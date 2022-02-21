const mongoose = require("mongoose");

exports.connection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("connected");
  } catch (error) {
    console.log(error.message);
  }
};
