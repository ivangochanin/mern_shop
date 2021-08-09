import mongoose from "mongoose"

const conectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true
        }) 
        console.log(`Mongo connected: ${connect.connection.host}`);
    } catch (error) {
        console.error(`Error ${error.message}`);
        process.exit(1)
    }
}

export default conectDB