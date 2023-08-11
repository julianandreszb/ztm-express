const express = require('express');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello world!')
});

app.get('/messages', (req, res) => {
    res.send('<ul><li>Item One</li><li>Item Two</li></ul>');
});

app.get('/object', (req, res) => {
    res.send({name: 'Julian'});
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});