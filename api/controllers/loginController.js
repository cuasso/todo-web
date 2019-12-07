class loginController {
    
    static authenticate(req,res) {
        const {username,password} = req.body
        if(username === 'lafken' && password === "123456") 
            return res.status(200).json({
                authenticate: true,
                token : "12345678"
            })

        return res.status(400).json({
            authenticate: false,
            token : null,
            messageError: "user or password invalid"
        })  
    }
}

export default loginController