const mongoose = require("mongoose");

async function main() {
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(
      "mongodb+srv://govba:i1pvDyfCrbff57QH@cluster0.pi5nx9s.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log('Connected to the database!');
  } catch (error) {
    console.log(`Erro: ${error}`);
  }
}

module.exports = main;