const mongoose = require('mongoose');

mongoose.set("strictQuery", true);

async function connectionMongoDb(url) {
  return mongoose.connect(url);
}

exports.connectionMongoDb = connectionMongoDb;  
