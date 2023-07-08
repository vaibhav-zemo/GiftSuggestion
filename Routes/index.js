const express = require("express");
const router = express.Router();
const controller = require("../Controllers/index");

router.get('/allGifts', controller.Data);
router.post('/getGifts',controller.Home);

module.exports = router;


