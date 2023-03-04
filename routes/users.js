var express = require('express');
var router = express.Router();
var usersController = require('../controller/user.controller');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/contat-us',usersController.contactUs)
router.post('/ask-for-quote',usersController.askForQuote)
router.post('/subscribe-new-letter',usersController.subscribeNewLetter)
module.exports = router;
