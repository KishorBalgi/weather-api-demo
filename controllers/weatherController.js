const axios = require("axios");

const apiInstance = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
  params: {
    appid: process.env.API_KEY,
  },
});

exports.getWeather = async (req, res, next) => {
  const { cities } = req.body;

  const promises = cities.map((city) => {
    return apiInstance.get("/weather", { params: { q: city } });
  });

  try {
    const responses = await Promise.all(promises);
    const data = responses.map((response) => {
      return {
        city: response.data.name,
        weather: response.data.main,
      };
    });

    res.status(200).send(data);
  } catch (err) {
    next(err);
  }
};
