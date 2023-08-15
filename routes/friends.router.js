const express = require("express");
const friendsRouter = express.Router();
const friendsController = require('./../controllers/friends.controller');

friendsRouter.use((req, res, next) => {
    console.log(`IP address: ${req.ip}`);
    next();
});
friendsRouter.get('/', friendsController.getFriends);
friendsRouter.get('/:friendId', friendsController.getFriend);
friendsRouter.post('/', friendsController.postFriend);

module.exports = friendsRouter;