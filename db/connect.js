
const mongoose = require('mongoose');


const connectDB = async (mongo_uri) => {
    await mongoose.connect(mongo_uri)
    console.log('connected');
}

module.exports = connectDB