const express = require('express');
const path = require('path');

const friendsRouter = require('./routes/friends.router');
const messagesRouter = require('./routes/messages.router');

const app = express();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

const PORT = 3000;

app.use((req, res, next) => {
    // Here when the request comes in
    const start = Date.now();
    next(); // Call to next middleware
    // Here when the response is back
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}ms`);
});
app.use('/site', express.static(path.join(__dirname, 'public')));
// express.json is a middleware It parses incoming requests with JSON payloads and is based on body-parser.
app.use(express.json());

app.get('/', (req, res) => {
    res.render('index-view', {
        title: 'Custom title',
        caption: 'This is a view HBS template content',
    });
});
app.use('/messages', messagesRouter);
app.use('/friends', friendsRouter);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});