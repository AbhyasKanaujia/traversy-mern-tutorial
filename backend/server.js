const express = require("express");
const { errorHandler } = require("./middleware/errorHandler");
const goalRoutes = require("./routes/goalRoutes.js");
require("dotenv").config();

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", goalRoutes);

app.use(errorHandler);

app.listen(PORT, console.log(`Server started on port ${PORT}`));
