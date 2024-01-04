const { getWeather } = require("../controllers/weatherController");

const router = require("express").Router();

router.post("/getWeather", getWeather);

module.exports = router;
