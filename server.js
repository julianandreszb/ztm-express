const express = require('express');

const app = express();
const PORT = 3000;

const friends = [
    {id: 1, name: 'Friend1'},
    {id: 2, name: 'Friend2'},
    {id: 3, name: 'Friend3'},
]

app.use((req, res, next) => {
    // Here when the request comes in
    const start = Date.now();
    next(); // Call to next middleware
    // Here when the response is back
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.url} ${delta}ms`);
});

// express.json is a middleware It parses incoming requests with JSON payloads and is based on body-parser.
app.use(express.json());

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
            error: 'Friend does not exist'
        });
    }

});

app.post('/friends', (req, res) => {

    if (!req.body.name) {
        return res.status(400).json({
            error: 'Missing friend name'
        });
    }

    const newFriend = {
        name: req.body.name,
        id: friends.length
    }
    friends.push(newFriend);
    res.json(newFriend);
});

app.get('/object', (req, res) => {
    res.send({name: 'Julian'});
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});