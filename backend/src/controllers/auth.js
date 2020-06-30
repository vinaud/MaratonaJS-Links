const express = require('express');

const router = express.Router();
router.use(express.json());
const { Account } = require('../models');
const bcrypt = require('bcrypt');
const saltRounds = 10;


router.get('/sign-in', (request, response) =>{
    return response.json("Sign in"); 
})

router.get('/sign-up', async (request, response) =>{
    const { email, password } = request.body;
    console.log({ email, password });
    const hash = bcrypt.hashSync(password,saltRounds);
    const result = await Account.create({email, password: hash});
    return response.json({ email, password: hash });
})

module.exports = router;