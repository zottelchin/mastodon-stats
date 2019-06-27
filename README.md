# Mastodon-Statistiken
Ein kleiner Node.js Server, der eine Tabelle der gemeldeten Nutzer führt.

Verwendet:
- [Bulma](https://github.com/jgthms/bulma) Lizenz: MIT
- [Pug](https://github.com/pugjs/pug) Lizenz: MIT
- [Express](https://github.com/expressjs/express) Lizenz: MIT
- [Axios](https://github.com/expressjs/express) Lizenz: MIT

### Installation
Per Docker: `docker run -e "TOKEN=..." -e "INSTANCE=..." -p "3000:3000" zottelchin/mastodon-stats`
oder mit einer Docker-Compose Datei (siehe docker-compose.yml im Repo).

Es müssen die Umgebungsvariablen TOKEN und INSTANCE gesetzt werden, wobei TOKEN der API-Token ist und INSTANCE die Domain der INSTANCE ist (muss in folgender Form sein: `mastodon.social`).

----
Lizenz: MIT
