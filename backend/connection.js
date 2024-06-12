const mongoose = require("mongoose");

async function connectmongodb(url) {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }); // Added options for connection
}

module.exports = {
  connectmongodb,
};
