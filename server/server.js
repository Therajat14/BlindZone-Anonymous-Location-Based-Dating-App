const express = require("express");
const dbConnect = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const morgan = require("morgan");
require("dotenv").config();

dbConnect();
const app = express();
const PORT = process.env.PORT || 3001;

app.use(morgan("dev"));
app.use(express.json());

app.use("/api/v1", authRoutes);

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
