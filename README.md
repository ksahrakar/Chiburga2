This web application will allow you to create and consume burgers. It stores all burger creations in a SQL database table. Each burger has a boolean attribute, "devoured", which is set to be false by default. The html code is generated in part with express-hanblebars templates.

DEPENDENCIES
Please install these prior to running the program ("npm install")
- express
- express handlebars
- mySQL

DATABASE
- create burgers_db
- run schema and seeds from workbench

ARCHITECTURE
MVC system is used...
- db - contains schema and seeds for database
- config - contains database connection and orm
- models - contains database-specific orm calls
- controllers - contains routes
- views - contains front end html with handlebars templates
- public - contains front end js, css, and images
- server.js - initiates, sets dependencies, and opens local port