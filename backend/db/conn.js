const mongoose = require('mongoose');

const conn = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error(
      `Something went wrong with connecting to the database: ${error.message}`
    );
    throw error;
  }
};

module.exports = conn;
