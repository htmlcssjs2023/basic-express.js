const epxress = require("express");
const {showUser} = require('../controllers/user.controller');
const router = epxress.Router();


router.get('/user', showUser);
module.exports = router;
