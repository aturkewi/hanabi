# Hanabi

## Game Details

<!-- Details of the game will go here -->

## Tech Stack

This app is built using the NERD (Node, Express, React, Databases using SQL and/or NoSQL)

## Run App  

To run this app make sure that you have node installed go here, if you need to install Node https://nodejs.org/en/download/package-manager/

with `NPM` you need to have three global Node Modules installed

```bash
  npm install -g create-react-app sequilize-clie
```

In the root directory install the node modules

```bash
npm install
cd client && npm install
```

To run the server, go to the root directory and run:

```bash
npm run server:dev
```


## Set up Database and Run migrations

Make sure to create a test and development database in PostgreSQL

In the terminal run `psql`, and once you are in the psql terminal run

```SQL
CREATE DATABASE hanabi_test;
CREATE DATABASE hanabi_development;
```

To create a new migration file:

```bash
sequelize model:create --name <tableName> --attributes <column:type>
```

To run migrations run:

```bash
sequelize db:migrate
```

To rollback migrations run:

```bash
sequelize db:migrate:undo
```
