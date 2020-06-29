const express = require('express');

const router = express.Router();

const { Account } = require('../models');
const bcrypt = require('bcrypt');
const saltRounds = 10;


router.get('/sign-in', (request, response) =>{
    return response.json("Sign in"); 
})

router.get('/sign-up', async (request, response) =>{
    const email = 'user@domain.com';
    const password = '123456';
    const hash = bcrypt.hashSync(password,saltRounds);
    const result = await Account.create({email, password: hash});
    return response.json(result);
})

module.exports = router;