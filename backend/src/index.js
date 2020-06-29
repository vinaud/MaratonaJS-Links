const express = require('express');
const db = require('./models');
const authController = require('./controllers/auth')

const app = express();
app.use('/auth', authController);

app.get('/', (request, response) => {
    return response.json('Api running...');
})

db.sequelize.sync().then(()=>{
    app.listen(3001, () =>{
        console.log('Listening on port 3001');
    });
})

