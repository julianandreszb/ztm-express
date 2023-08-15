const express = require('express');
const messagesController = require('./controllers/messages.controller');
const friendsController = require('./controllers/friends.controller');

const app = express();
const PORT = 3000;

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

app.get('/messages', messagesController.getMessages);
app.post('/messages', messagesController.postMessage);

app.get('/friends', friendsController.getFriends);
app.get('/friends/:friendId', friendsController.getFriend);
app.post('/friends', friendsController.postFriend);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});