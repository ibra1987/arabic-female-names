const femaleNameModel = require("./model");
const axios = require("axios");

//@create names
exports.createFemaleName = async (req, res) => {
  const { Name, Meaning } = req.body;

  if (!Name) return res.status(400).json({ error: "Please enter a name" });
  if (!Meaning)
    return res.status(400).json({ error: "Please enter the meaning" });

  try {
    const newName = new femaleNameModel({ Name, Meaning });
    await newName.save();
    res.status(201).json(newName);
  } catch (error) {
    console.log(error);
  }
};

//@get 3 random records

exports.getRandomFemaleNames = async (req, res) => {
  try {
    const femaleNames = await femaleNameModel.aggregate([
      { $sample: { size: 3 } },
    ]);

    if (!femaleNames)
      return res.status(404).json({ error: "no records found" });

    res.status(200).json(femaleNames);
  } catch (error) {
    console.log(error);
  }
};

//@get full names list

exports.getAllNames = async (req, res) => {
  try {
    const names = await femaleNameModel.find().sort({ Name: 1 });
    res.status(200).json(names);
  } catch (error) {
    console.log(error);
  }
};
