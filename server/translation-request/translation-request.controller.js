const express = require('express');
const router = express.Router();
const transRequestModel = require('./translation-request.model');

router.post('/', async(req, res) => {
    console.log('💙',req.body);
    const userId = req.body.user_id;
    const categoriesId = req.body.categories_id;
    const originalLanguageId = req.body.original_language_id;
    const translatedLanguageId = req.body.translated_language_id;
    const request = req.body.request;

    await transRequestModel.createTransRequest(
        userId,
        categoriesId,
        originalLanguageId,
        translatedLanguageId,
        request
    )
    res.status(200).send(req.body);
})

module.exports = router;