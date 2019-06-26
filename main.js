const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const server = require('http').createServer(app);
const port = process.env.PORT || 3000;
const toke = process.env.TOKEN;
const instance = process.env.INSTANCE; 
const axios = require('axios');

app.set('view engine', 'pug');
let data = []

app.get('/', function (req, res) {
    res.render('index', { 
        instance: instance,
        reports: data,
    });
});

function update() {
    console.log("Update Mastodon Reports...")
    
    axios.get('https://' + instance + '/api/v1/admin/reports?resolved', { headers: { 'Authorization': 'Bearer ' + toke } })
        .then(function (response) {
            // handle success
            data = response.data.map(x => {
                let tmp = {};
                tmp.id = x.id;
                tmp.created_at = x.created_at;
                tmp.updated_at = x.updated_at;
                tmp.affected_user = x.target_account.username;
                tmp.affected_domain = x.target_account.domain;
                tmp.suspended = x.target_account.suspended;
                tmp.silenced = x.target_account.silenced;
                tmp.moderator = x.action_taken_by_account.username;
                return tmp;
            })
            console.log(data);
            // Alle 15 Minuten nach dem letzten erfolgreichen Abrufen ausführen
            setTimeout(update, 15 * 60 * 1000);
      })
      .catch(function (error) {
            console.log(error);
            // Alle 5 Minuten nach dem letzten fehlgeschlagenen Abrufen ausführen
             setTimeout(update, 5 * 60 * 1000);
      });

    
}

update();

server.listen(port, () => {
    console.log('Server listening on port %d', port);
});