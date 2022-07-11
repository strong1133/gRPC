var express = require("express");
var router = express.Router();
const { responseDtoJson } = require("../utils/responseDto");

var fs = require("fs").promises;

router.get("/", async (req, res, next) => {
    responseDtoJson(null, null, "test Api", res);
});

module.exports = router;
