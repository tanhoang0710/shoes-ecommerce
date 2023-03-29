const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");

const connectDB = require("./config/db");
const authRoute = require("./routes/authRoute");

// configure env
dotenv.config();

// database config
connectDB();

// rest object
const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// routes
app.use("/api/v1/auth", authRoute);

// rest api
app.get("/", (req, res) => {
  res.send({
    message: "Welcome to shoes app",
  });
});

// port
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(
    `Server is running on ${process.env.DEV_MODE} mode on ${PORT}`.bgCyan.white
  );
});
