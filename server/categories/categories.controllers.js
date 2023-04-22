const express = require('express');
const router = express.Router();
const categoriesModel = require('./categories.model');

router.get('/:categoryId', async(req, res) => {
    
    const categoryId = Number(req.params.categoryId);
    console.log(categoryId)
    const categoryName = await categoriesModel.getCategoriesNamebyId(categoryId);
    console.log('💚', categoryName)
    res.status(200).send(categoryName);
})

module.exports = router;
