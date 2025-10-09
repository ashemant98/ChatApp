const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const app = express();
dotenv.config();

const authRoute = require("../backend/routes/authRoute");

const PORT = process.env.PORT || 3000;
app.use(cors())
app.use("/api/auth", authRoute);

app.listen(PORT, () => {
  console.log("server running on port" + PORT);
});
