## System dependencies:
- freshtomatoes-api is running

## Run app:
Open index.html in a browser

## Directory structure:  
index.html -> application  
babel/     -> pre-transpiled script containing bulk of project  
css/       -> stylesheet  
js/        -> transpiled js included within index.html  

## NOTE:
The UI is reliant on the API (makes a GET request). This endpoint can be modified within **js/index.js** by searching for the hardcoded string **http://localhost:3200/movie**
