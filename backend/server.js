const express = require("express");
require("dotenv").config();

const PORT = 5000;

const app = express();

app.listen(PORT, console.log(`Server started on port ${PORT}`));
