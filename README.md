<img src="https://static.begin.app/node-faunadb/readme-banner.png" width="655">

$BADGE

A super simple Begin **c**reate **r**ead **u**pdate **d**elete app that exemplifies a basic todo app that uses one static html page and three API endpoints that connect to a FaunaDB database.

# Prerequisites

1. You must go to https://fauna.com/ and set up a FaunaDB account and database named 'faunadb-todos' in order to get server secret required to run this example.

2. Create an `.env` file in the root of this project and add the content below with your server secret added.
```sh
@testing
FAUNADB_SERVER_SECRET=Your server secret

@staging
FAUNADB_SERVER_SECRET=Your server secret

@production
FAUNADB_SERVER_SECRET=Your server secret
```

## Deploy your own

[![Deploy to Begin](https://static.begin.com/deploy-to-begin.svg)](https://begin.com/apps/create?template=https://github.com/begin-examples/node-faunadb)

Deploy your own clone of this app to Begin!

## Getting started

- Start the local dev server: `npm start`
- Lint your code: `npm run lint`
- Run your tests: `npm test`

## Reference

- [FaunaDB](https://docs.begin.com/en/data/faunadb) - Begin x FaunaDB official documentation.
- [Quickstart](https://docs.begin.com/en/guides/quickstart/) - basics on working locally, project structure, deploying, and accessing your Begin app
- [Creating new routes](https://docs.begin.com/en/functions/creating-new-functions) - basics on expanding the capabilities of your app

Head to [docs.begin.com](https://docs.begin.com/) to learn more!
