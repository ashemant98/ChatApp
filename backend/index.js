const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const app = express();
dotenv.config();
const connectDB = require("../backend/config/db");
const authRoute = require("../backend/routes/authRoute");

const PORT = process.env.PORT || 3000;
app.use(cors());
app.use("/api/auth", authRoute);

//started server
app.listen(PORT, () => {
  //server listening to port
  console.log("server running on port" + PORT);
  //connection to db
  connectDB();
});
