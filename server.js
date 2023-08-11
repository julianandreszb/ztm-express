const express = require('express');

const app = express();
const PORT = 3000;

const friends = [
    {id: 1, name: 'Friend1'},
    {id: 2, name: 'Friend2'},
]

app.get('/', (req, res) => {
    res.send('Hello world!')
});

app.get('/messages', (req, res) => {
    res.send('<ul><li>Item One</li><li>Item Two</li></ul>');
});

app.get('/friends', (req, res) => {
    res.json(friends);
});

app.get('/friends/:friendId', (req, res) => {
    const friendId = Number(req.params.friendId);
    const friend = friends[friendId];
    if (friend) {
        res.status(200).json(friend);
    } else {
        res.status(404).json({
            error: "Friend does not exist"
        })
    }

});

app.get('/object', (req, res) => {
    res.send({name: 'Julian'});
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});