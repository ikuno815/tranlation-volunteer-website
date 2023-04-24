const express = require('express');
const router = express.Router();
const transSuggestModel = require('./translation-suggestion.model');

router.post('/', async(req, res) => {
    const userId = req.body.user_id;
    const requestId = req.body.request_id;
    const bestAnswer = req.body.best_answer;
    const suggestion = req.body.suggestion;

    await transSuggestModel.createTransSuggest(
        userId,
        requestId,
        bestAnswer,
        suggestion
    )
    res.status(200).send(req.body);
})

router.get('/:requestId', async(req, res) => {
    const requestId = Number(req.params.requestId);
    const SuggestionsData = await transSuggestModel.getAllSuggestionsByReqId(requestId);
    console.log('🐠', SuggestionsData)
    res.status(200).send(SuggestionsData);
})



module.exports = router;