const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.json({ 
        message: "look what you did champs"
    })
});

app.listen(3333);