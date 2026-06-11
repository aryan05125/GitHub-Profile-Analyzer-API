require("dotenv").config();
require("./config/db");

const express = require("express");

const app = express();

const profileRoutes = require("./routes/profileRoutes");

app.use(express.json());

app.use("/api/profile", profileRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "GitHub Profile Analyzer API Running"
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Running On Port ${PORT}`);
});