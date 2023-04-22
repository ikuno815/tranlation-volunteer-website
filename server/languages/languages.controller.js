const express = require('express');
const router = express.Router();
const languagesModel = require('./languages.model');

router.get('/:langId', async(req, res) => {
    
    const langId = Number(req.params.langId);
    const langName = await languagesModel.getLangNamebyId(langId);
    console.log('💚', langName)
    res.status(200).send(langName);
})

module.exports = router;