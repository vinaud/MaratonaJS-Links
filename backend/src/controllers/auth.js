const express = require('express');

const router = express.Router();

const { Account } = require('../models');


router.get('/sign-in', (request, response) =>{
    return response.json("Sign in"); 
})

router.get('/sign-up', async (request, response) =>{
    const result = await Account.create({email: 'user@domain.com', password: '123456'});
    return response.json("Sign up");
})

module.exports = router;