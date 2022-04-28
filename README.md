# anime-api
[![Version](https://img.shields.io/badge/version-1.0.0-brightgreen)](https://github.com/JeanSolo10/anime-api/#)

This CRUD API was created during my time as a student at Code Chrysalis. It connects to a PostgresSQL database via the Knex.js library. 
anime-api allows you to add animes and reviews into the database. A React front-end application is also included to display present data.

# Getting started

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
- ```axios``` - HTTP Client for node.js used to request data from backend.

**Dev Dependencies**

- ```nodemon``` - Listens for file changes and restarts the application.


**Install FrontEnd dependencies**
- Navigate to ```./ANIME-API/front-end``` folder to install dependencies
- Execute ```npm i```

**Dependencies**
- ```react``` - A JavaScript library for building user interfaces.
- ```axios``` - HTTP Client for node.js used to request data from backend.

**Migration**

To generate tables in the PostgresSQL database, run the following command in the terminal
```
knex migrate:latest
```

# API Documentation

## Anime

| Request Type  | Request URI | Request Body Required Fields | Request Body Optional Fields | Description | 
| ------------- | ----------- | ---------------------------- | ---------------------------- | ----------- |
| GET  | ```/api/v1/anime/``` | N/A | N/A | List of all Anime in DB |
| GET  | ```/api/v1/anime/{idOrName}``` | N/A | N/A | Retrieve anime based on ```id``` or ```name``` |
| POST | ```/api/v1/anime/``` | ```name``` | N/A | Add anime to DB |
| PATCH | ```/api/v1/anime/{id}``` | any optional field | ```name``` |  Update anime data based on ```id``` |
| DELETE | ```/api/v1/anime/{id}``` | N/A | N/A | Delete anime based on ```id``` from DB |

## Anime Example Requests

**GET Request**
```
GET http://localhost:5000/api/v1/anime/1
```

**GET Response**
```
{
  "results": [
    {
      "id": 1,
      "name": "Spy x Family"
      "image_url": "https://cdn.myanimelist.net/images/anime/1441/122795.jpg"
    }
  ]
}
```

**POST Request**
```
POST http://localhost:5000/api/v1/anime

Body

{
    "name": "The Rising of the Shield Hero Season 2"
}
```

**POST Response**
```
{
  "message": "Anime successfully added"
}
```

## Reviews

| Request Type  | Request URI | Request Body Required Fields | Request Body Optional Fields | Description | 
| ------------- | ----------- | ---------------------------- | ---------------------------- | ----------- |
| GET  | ```/api/v1/review/``` | N/A | N/A | List of all Reviews in DB |
| GET  | ```/api/v1/review/anime/{id}``` | N/A | N/A | Retrieve reviews based on anime ```id``` |
| POST | ```/api/v1/review/anime``` | ```anime_id``` <br /> ```rating``` (number 1-10) | ```comment``` | Add review for anime to DB |
| PATCH | ```/api/v1/review/{id}``` | any optional field | ```rating``` <br /> ```comment``` |  Update review based on review ```id``` |
| DELETE | ```/api/v1/review/{id}``` | N/A | N/A | Delete review based on ```id``` from DB  |

## Review Example Requests

**GET Request**
```
GET http://localhost:5000/api/v1/review
```

**GET Response**
```
{
  "results": [
    {
      "id": 1,
      "comment": "Great show to watch. Lots of action and humor",
      "rating": 9,
      "anime_id": 1,
      "created_at": "2022-04-27T10:27:39.983Z",
      "updated_at": "2022-04-27T10:27:39.983Z"
    },
    {
      "id": 1,
      "comment": "Unexpectedly good show. Fun for the whole family!",
      "rating": 8,
      "anime_id": 1,
      "created_at": "2022-04-28T10:27:39.983Z",
      "updated_at": "2022-04-28T10:27:39.983Z"
    },
    {
      "id": 2,
      "comment": "Main character handles bad situations incredibly well. Very fun show overall.",
      "rating": 7,
      "anime_id": 2,
      "created_at": "2022-04-28T10:41:26.410Z",
      "updated_at": "2022-04-28T10:41:26.410Z"
    }
  ]
}
```

**POST Request**
```
POST http://localhost:5000/api/v1/review/anime

Body

{
    "anime_id": 1,
    "rating": 9,
    "comment": "Incredible show!"
}
```

**POST Response**
```
{
  "message": "Review successfully added"
}
```
