const express = require("express");
const router = express.Router();
const controller = require("../Controllers/index");

router.get('/api/get-gift', controller);

module.exports = router;


