import UsersRepository from '../db/repositories/usersRepository'

class loginController {

    static authenticate(req, res) {
        UsersRepository.get(req.body, user => {
            if (user) {
                return res.status(200).json({
                    authenticate: true,
                    token: "12345678"
                })
            }
            return res.status(400).json({
                authenticate: false,
                token: null,
                messageError: "user or password invalid"
            })
        })
    }

    static register(req, res) {
        try {
            UsersRepository.create(req.body,() => {
                return res.status(200).json({
                    authenticate: true,
                    token: "12345678"
                })
            })
        } catch (err) {
            return res.status(500).json(err)
        }
    }
}

export default loginController