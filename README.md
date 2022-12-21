<img src="https://cdn.worldvectorlogo.com/logos/nodejs.svg" width="150px" align="right" />

# Bankuish-challenge

```
. api rest
. node js
. express
. postgres
. Docker
. docker compose
. firebase auth
```

## Installation

We need docker, docker compose and environment variables:

```
NODE_ENV=development
NODE_PORT=5001
POSTGRES_PASSWORD="12345"
POSTGRES_USER=root
POSTGRES_DB=test
POSTGRES_PORT=5432
POSTGRES_HOST=pg
POOL=1
GOOGLE_APPLICATION_CREDENTIALS="./path/to/key/file.json"
FIREBASE_PROJECT_ID="challenge-test-1a32b"
```

### GOOGLE_APPLICATION_CREDENTIALS examples:

```
GOOGLE_APPLICATION_CREDENTIALS_LOCAL="/home/ivan/Desktop/challenge/src/firebase/firebase.json"
GOOGLE_APPLICATION_CREDENTIALS_DOCKER="/usr/src/app/src/firebase/firebase.json"
```

### Build Project

> run `docker-compose build`

### Start Project

> run `docker-compose up`

### App service

> `localhost:5001` you can change the port in `docker-compose.yml` file `<host-port>:5001`

### Postgres sevice

> `localhost:5432` you can change the port in `docker-compose.yml` file `<host-port>:5432`

## local Install

With `package.json` and dependencies

> run `npm i`

### Start Project

> run `npm run start`

### App service

> `localhost:5001` you can change the port in `.env` file `5001`

### Postgres sevice

> We need an external or local postgres service and its credentials in our `.env`

### Ducument API

`url-host[:port]`/api-docs/ default is `localhost:5001/api-docs`

### Tests

> run `npm run test`

## Diagrama

![Alt text](./diagrama/diagramaDeFlujoHugoChallenge.png?raw=true "Diagrama")
