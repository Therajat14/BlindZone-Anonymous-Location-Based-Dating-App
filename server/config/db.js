const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 5000,
    });
    console.log("✅ Database connected successfully");
  } catch (err) {
    console.error(`❌ Unable to connect to database:\n${err.message}`);
    process.exit(1);
  }

  mongoose.connection.on("disconnected", () => {
    console.error("⚠️ MongoDB disconnected");
  });

  mongoose.connection.on("error", (err) => {
    console.error("❌ MongoDB connection error:", err);
  });

  process.on("SIGINT", async () => {
    await mongoose.connection.close();
    console.log("🔌 MongoDB connection closed due to app termination");
    process.exit(0);
  });
};

module.exports = dbConnect;
