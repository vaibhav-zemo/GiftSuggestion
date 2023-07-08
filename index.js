const express = require("express");
const app = express();
const dotenv = require("dotenv");
const PORT = process.env.PORT || 4000;
const cors = require("cors");
const database = require("./Config/database");
const Gift = require("./models/gift");
const router = require("./Routes/index");
dotenv.config();

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

// mongoosedb.connect();
database.connect();

app.get("/", async (req, res) => {
  return res.json({
    succeess: true,
    message: "your server is up and running",
  });
});

app.use("/api", router);

app.listen(PORT, () => {
  console.log("app is running live on require port");
});
