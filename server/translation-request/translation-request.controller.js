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

router.get('/', async(req, res) => {
    const allReqData = await transRequestModel.getAllTransReqData();
    console.log('💚', allReqData)
    res.status(200).send(allReqData);
})

// router.get('/:cId/:langOrgId/:langTransId', async(req, res) => {
//     const cId = Number(req.params.cId);
//     const langOrgId = Number(req.params.langOrgId);
//     const langTransId = Number(req.params.langTransId);

//     const DisplayedPayload = await transRequestModel
//                 .getDisplayedPayload(cId, langOrgId, langTransId);
//     res.status(200).send(DisplayedPayload);
// })

module.exports = router;