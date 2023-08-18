const path = require('path');

function getMessages(req, res) {
    //res.send('<ul><li>Item One</li><li>Item Two</li></ul>');
    //res.sendFile(path.join(__dirname, '..', 'public', 'images','img.png'));
    res.render('messages', {
        title: 'Messages to my friends!',
        friend: 'Elon Musk'
    })
}

function postMessage(req, res) {
    console.log(`Updating messages`);
}

module.exports = {
    getMessages,
    postMessage
}