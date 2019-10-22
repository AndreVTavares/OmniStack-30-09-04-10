const express = require('express');

const routes = express.Router();

routes.get('/users', (req, res) => {
    res.json({ 
        message: "Man you're doing changes like crazy"
    })
});

module.exports = routes;