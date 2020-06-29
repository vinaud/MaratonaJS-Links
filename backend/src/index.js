const express = require('express');

const authController = require('./controllers/auth')

const app = express();
app.use('/auth', authController);

app.get('/', (request, response) => {
    return response.json('Api running...');
})

app.listen(3001, () =>{
    console.log('Listening on port 3001');
});
