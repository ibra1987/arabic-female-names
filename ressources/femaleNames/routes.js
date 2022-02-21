const express = require("express");
const {
  createFemaleName,
  getRandomFemaleNames,
  getAllNames,
} = require("./controller");

const router = express.Router();

//@create name
router.post("/create", createFemaleName);

//@ge 3 random names

router.get("/random-names", getRandomFemaleNames);

//@get all names

router.get("/", getAllNames);

module.exports = router;
