const express = require('express');

const app = express();

app.get('/', (request, response) => {
    return response.json('Api running...');
})

app.listen(3001, () =>{
    console.log('Listening on port 3001');
});
