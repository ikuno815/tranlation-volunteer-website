const express = require('express');
const usersController = require('./users/users.controller');
const translationRequestController = require('./translation-request/translation-request.controller');


function setupServer() {
    const app = express();

    app.use(express.json());

    app.use('/api/user', usersController);
    app.use('/api/translationrequest', translationRequestController);

    app.get('/hello', (req, res) => {
        res.send('world🌎')
    });

    return app;
}

module.exports = setupServer;