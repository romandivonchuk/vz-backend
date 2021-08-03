require('dotenv').config()
const mongoose = require('mongoose')

let MONGO_URI = `mongodb+srv://vzuttia:vzuttia@vzuttia.wluig.mongodb.net/shop?retryWrites=true&w=majority`
const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true

        })
        console.log('MongoDB connection success')
    } catch (error) {
        console.error('MongoDB connection FAIL')
        process.exit(1)
    }
}

module.exports = connectDB;