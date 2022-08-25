const express = require("express");
const app = express();
// const connectDB = require("./config/database");
// const homeRoutes = require("./routes/home");
// const characterRoutes = require("./routes/characters");

require("dotenv").config({ path: "./config/.env" });

// connectDB();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});
app.get("/characters", (req, res) => {
  res.sendFile(__dirname + "/views/characters.ejs");
});

app.listen(process.env.PORT, () => {
  console.log("Server is running!");
});
