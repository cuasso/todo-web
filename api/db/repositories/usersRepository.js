import UserModel from '../models/userModel'

class UsersRepository {

    static create(user, callback) {
        UserModel.create(user, (err, user) => {
            if (err) throw err
            callback()
        })
    }

    static get(filter, callback) {
        return UserModel.findOne(filter, (err, user) => {
            if (err) throw err
            callback(user)
        })
    }

    static update(user,callback) {
        this.get({username: user.username,password:user.password},(userModel => {
            userModel.activeToken = user.activeToken
            userModel.save()
            callback(userModel.activeToken)
        }))
    }
}

export default UsersRepository
