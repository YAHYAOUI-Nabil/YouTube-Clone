const mongoose = require("mongoose")

const connectDB = async() => {
    try {
        const conn = await mongoose.connect('mongodb+srv://youtube:FyZwKWqAsbyqqYP7@cluster-youtube.gkl6i7w.mongodb.net/Youtube?retryWrites=true&w=majority')
        console.log(`MongoDB connected : ${conn.connection.host}`)
    }
    catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDB