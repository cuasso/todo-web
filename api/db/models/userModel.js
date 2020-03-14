import mongoose from '../db'

const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    activeToken: String
})

const UserModel = mongoose.model('user', userSchema)

export default UserModel