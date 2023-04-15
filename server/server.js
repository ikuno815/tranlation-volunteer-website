const express = require('express');
const usersController = require('./users/users.controller');


function setupServer() {
    const app = express();

    app.use(express.json());

    app.use('/api/user', usersController);

    app.get('/hello', (req, res) => {
        res.send('world🌎')
    });

    return app;
}

module.exports = setupServer;