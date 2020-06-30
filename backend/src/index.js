const express = require('express');
const db = require('./models');
const authController = require('./controllers/auth');
const bodyParser = require('body-parser');
const response = require('./middlewares/response');

const app = express();
app.use(response);
app.use('/auth', authController);
app.use(express.json());
app.use(bodyParser.json())
app.use(express.urlencoded({extended: false}));


app.get('/', (request, response) => {
    return response.json('Api running...');
})

db.sequelize.sync().then(()=>{
    app.listen(3001, () =>{
        console.log('Listening on port 3001');
    })
})

