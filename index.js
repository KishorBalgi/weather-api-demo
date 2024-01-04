const express = require("express");
const dotenv = require("dotenv");
const app = express();
const path = require("path");
dotenv.config();

const weatherRouter = require("./routes/weather");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use("/", (req, res, next) => {
//   res.sendFile(__dirname + "/public/index.html");
// });

app.use("/", weatherRouter);

// Error handling:
app.use((err, req, res, next) => {
  res.status(err.status || 500).send({ error: err.message });
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
