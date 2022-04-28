# anime-api
[![Version](https://img.shields.io/badge/version-1.0.0-brightgreen)](https://github.com/JeanSolo10/anime-api)

This CRUD API was created during my time as a student at Code Chrysalis. It connects to a PostgresSQL database via the Knex.js library. 
anime-api allows you to add animes and reviews into the database. A React front-end application is also included to display present data.

## Getting started

To run this api locally after you fork it, you must create the following:
- a ```.env``` file in the root directory
- a local PostgresSQL database named ```anime_db```

**Copy and paste the following into the ```.env``` file**

```
PORT=5000
DB_NAME=anime_db
DB_USER="your_database_user"
DB_PASSWORD="your_database_password"
```
**Install dependencies**
```
npm i
```

**Dependencies**

- ```cors``` - Allows for frontend/backend interaction.
- ```dotenv``` - Loads environment variables from the .env file for use in the application.
- ```express``` - Node.js web application framework for backend manipulation.
- ```knex``` - SQL query builder for PostgreSQL.
- ```pg``` - Used by knex via the knexfile.js config file to connect to PSQL database.

**Dev Dependencies**

- ```nodemon``` - Listens for file changes and restarts the application.


**Install FrontEnd dependencies**
- Navigate to ```./ANIME-API/front-end``` folder to install dependencies
- Execute ```npm i```

**Dependencies**
- ```react``` - A JavaScript library for building user interfaces.
- ```axios``` - HTTP Client for node.js used to request data from backend.
