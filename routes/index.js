//loading or calling the express
const express = require('express');
//calling the router funtions
const router = express.Router();
//importing homeController in router
const homeController = require('../controller/home_controller');

router.get('/', homeController.home);

console.log('Router is running');

module.exports = router;