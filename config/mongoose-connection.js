const mongoose = require('mongoose')

const db = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URI)
        console.log("connected to db")
    } catch (error) {
        console.error(error.message)
    }
}

module.exports = db