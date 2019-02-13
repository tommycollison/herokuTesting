const knex = require('knex');
const express = require('express');
const server = express();
const PORT = 7765;

server.use(express.json());


server.get('/', (req, res) => {
    res.send(`Welcome!`)
})

server.listen(PORT || 7766, () => {
    console.log(`hi from port`)
})