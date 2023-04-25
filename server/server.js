const express = require('express');
const usersController = require('./users/users.controller');
const translationRequestController = require('./translation-request/translation-request.controller');
const categoriesController = require('./categories/categories.controllers');
const languagesController = require('./languages/languages.controller');
const translationSuggestionController = require('./translation-suggestion/translation-suggestion.controller');

function setupServer() {
    const app = express();

    app.use(express.static(path.resolve(__dirname, '../client/build')));
    app.use(express.json());

    app.use('/api/user', usersController);
    app.use('/api/translation-request', translationRequestController);
    app.use('/api/translation-suggest', translationSuggestionController);
    app.use('/api/categories', categoriesController);
    app.use('/api/languages', languagesController);

    app.get('/hello', (req, res) => {
        res.send('world🌎')
    });

    return app;
}

module.exports = setupServer;