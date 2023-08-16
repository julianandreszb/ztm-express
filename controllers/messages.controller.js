const path = require('path');

function getMessages(req, res) {
    //res.send('<ul><li>Item One</li><li>Item Two</li></ul>');
    res.sendFile(path.join(__dirname, '..', 'public', 'img.png'));
}

function postMessage(req, res) {
    console.log(`Updating messages`);
}

module.exports = {
    getMessages,
    postMessage
}