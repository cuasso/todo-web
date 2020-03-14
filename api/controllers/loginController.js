import UsersRepository from '../db/repositories/usersRepository'

class loginController {

    static authenticate(req, res) {
        UsersRepository.update({
            username: req.body.username,
            password: req.body.password,
            activeToken: generateToken()
        }, (token) => {
            if (token) {
                return res.status(200).json({
                    authenticate: true,
                    token: token
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
            UsersRepository.create(req.body, () => {
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

const generateToken = () => {
    const rand = () => Math.random().toString(36).substr(2)
    return rand() + rand()
}

export default loginController