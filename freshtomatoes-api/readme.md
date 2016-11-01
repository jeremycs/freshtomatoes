## System dependencies:
- mysql  
- node.js  
- npm  

## Setup:
#### DB
Execute sql script **bootstrap/setup.sql** with a db user (your system creds) with privileges to create database and database user  
`mysql -uroot -p < setup.sql`

#### node.js API app
Execute shell command `npm install` from the project root - same directory level as this README - to install external npm dependencies

#### Configure app:
App configuration can be done by modifying **config/default.json**

Configuration includes:  
- application default port  
- database connection
- logging (if file logging is enabled, create the **logs** directory in the project root - same directory level as this README)

## Run app:
Execute shell command `npm start` or `node app/app` from the project root - same directory level as this README 

## Bootstrap data: 
Execute sql script **bootstrap/bootstrap.sql** with a db user (freshtomatoes application creds, created by setup.sql, found in default.json) with privileges to populate the movie table with data. This must be executed after running the application at least once (which initializes/creates the table)  
`mysql -ufreshtomatoes -p < bootstrap.sql`

## API endpoints:
### /movie - GET - retrieves all movies
**Query Parameters:**  
None

### /movie - POST - creates a new movie
**Query Parameters:**  
- movieName: string  
- imageUrl: string  
- rating: string  
- description: string 

### /movie/{ID} - PUT - updates an existing movie
**Query Parameters:**  
- movieName: string  
- imageUrl: string  
- rating: string  
- description: string 

### /movie/{ID} - DELETE - deletes an existing movie  
**Query Parameters:**  
None

## Example usage:
Visit `localhost:3200/movie` in the browser
