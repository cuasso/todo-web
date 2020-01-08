import UserModel from '../models/userModel'

class UsersRepository {

    static create(user,callback) {
        UserModel.create(user, (err, user) => {
            if(err) throw err
            callback()
        })
    }

    static get(user,callback) {
        UserModel.findOne(user, (err, user) => {
            if (err) throw err
            callback(user)
        })   
    }
}

export default UsersRepository
