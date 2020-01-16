import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost/tododb', { useNewUrlParser: true, autoIndex: false })

const db = mongoose.connection;

db.on("error", err => {
    console.log("error occurred from the database");
    throw err
});
db.once("open", () => {
    console.log("> successfully opened the database");
});

export default mongoose


