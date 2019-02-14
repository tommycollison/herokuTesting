const knex = require('knex');
const express = require('express');
const server = express();
const PORT = process.env.PORT || 7766;

server.use(express.json());


server.get('/', (req, res) => {
    
    res.send(`Welcome!`)
})

server.listen(process.env.PORT , () => {
    console.log(`hi from port ${PORT}`)
    console.log('env', process.env);
})


// server.listen(process.env.PORT || 3000)


