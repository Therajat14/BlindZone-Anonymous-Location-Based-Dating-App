const express = require("express");
const dbConnect = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();

dbConnect();
const app = express();
const PORT = process.env.PORT || 3001;
app.use(
  cors({
    origin: "*", // <--- IMPORTANT: This must be your exact frontend origin
    methods: ["GET", "POST", "PUT", "DELETE"], // <--- Add allowed HTTP methods
    credentials: true, // <--- IMPORTANT: Allow sending cookies/authorization headers
    allowedHeaders: ["Content-Type", "Authorization"], // <--- Specify headers your frontend sends
  })
);
app.use(morgan("dev"));
app.use(express.json());

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => res.send("hitere"));
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
