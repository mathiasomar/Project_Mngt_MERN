const mongoose = require('mongoose')

const connectDB = async (url) => {
    const conn = await mongoose.connect(url)
    console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline.bold)
}

module.exports = connectDB