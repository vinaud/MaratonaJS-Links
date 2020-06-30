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
    
    const account = await Account.findOne({ where: {email}});
    if(account){
        return response.jsonBadRequest(null, 'Account already exists');
    }

    const hash = bcrypt.hashSync(password,saltRounds);
    const result = await Account.create({email, password: hash});

    return response.jsonOK(result, 'Account created');
})

module.exports = router;