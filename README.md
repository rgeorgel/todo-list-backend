# TODO-list Backend

Simple node.js backend using MongoDB, to be consumed by client-side applications

# Frontend applications
> [https://github.com/rgeorgel/todo-list-react](https://github.com/rgeorgel/todo-list-react)
> 

# How to run
## To run with nodemoon (development mode)
### To start the database

> docker-compose up -d

### To start the application

> **npm run dev**

## To run as a server (production mode)
### To start the database
> docker-compose up -d
### To start the application
> npm run production
### To check status in production mode
> npx pm2 status
### To stop the aplication in production mode
>npx pm2 stop todo-list

