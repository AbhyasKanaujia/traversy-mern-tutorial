const express = require("express");
const path = require("path");
const colors = require("colors");
const { errorHandler } = require("./middleware/errorHandler");
const goalRoutes = require("./routes/goalRoutes.js");
const userRoutes = require("./routes/userRoutes.js");
require("dotenv").config();
const connectDB = require("./config/db.js");

const PORT = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", goalRoutes);
app.use("/api/users", userRoutes);

// Serve Frontend
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));

  app.get("*", (req, res) => {
    res.sendFile(
      path.resolve(__dirname, "../", "frontend", "build", "index.html")
    );
  });
} else {
  app.get("/", (req, res) => {
    res.send("Please set to production");
  });
}

app.use(errorHandler);

app.listen(PORT, console.log(`Server started on port ${PORT}`));
