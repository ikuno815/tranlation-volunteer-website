const express = require('express');
const router = express.Router();
const usersModel = require('./users.model');

router.get('/:email', async(req, res) => {
    const reqEmail = req.params.email;
    const email = await usersModel.getUserInfobyEmail(reqEmail);
    res.status(200).send(email);
})

router.post('/',  async(req, res) => {
    console.log('👍',req.body);
    const email = req.body.email;
    const username = req.body.username;
    await usersModel.createNewUser(username, email);
    res.status(200).send(req.body);
})

module.exports = router;