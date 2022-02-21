const express = require("express");
const dotenv = require("dotenv");
const { connection } = require("./config/DBConnection.js");
const femaleNamesRoutes = require("./ressources/femaleNames/routes.js");
const cors = require("cors");
dotenv.config();

// init app  + middelwares
const app = express();
const port = process.env.PORT || 5151;

app.use(express.json());
app.use(cors());

app.listen(port, () => {
  console.log(`server started at port number ${port}`);
});

// db connection
connection();

// routes

//female names routes
app.use("/api/female-names", femaleNamesRoutes);
