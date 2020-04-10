import mongoose from 'mongoose'

const mongo_db = process.env.MONGO_DB || 'localhost'
mongoose.connect(`mongodb://${ mongo_db }:27017/tododb`, { useNewUrlParser: true, autoIndex: false })

const db = mongoose.connection;

db.on("error", err => {
    console.log("error occurred from the database");
    throw err
});
db.once("open", () => {
    console.log("> successfully opened the database");
});

export default mongoose