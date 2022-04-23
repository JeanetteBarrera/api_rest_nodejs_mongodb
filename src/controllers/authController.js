const bcrypt = require("bcryptjs")
const User = require("../models/User");
const jwt = require("jsonwebtoken")

let controller = {
    register: async (req, res) => {
        const { username, email, password } = req.body;

        const newUser = new User({
            username: username.trim(),
            email: email.trim(),
            password: bcrypt.hashSync(password, 10)
        })

        try {
            
            const saveUser = await newUser.save();
            res.status(201).json(saveUser);

        } catch (error) {

            res.status(500).json(err)
        }
    },
    login: async (req, res) => {
        const { email, password } = req.body;

        try {
            
            const user = await User.findOne({
                email: email.trim()
            })
    
            if(user) {
                if(bcrypt.compareSync(password.trim(), user._doc.password)) {
                    const { password, others } = user._doc
                    
                    const accessToken = jwt.sign(
                        {
                            id: user._id,
                            isAdmin: user.isAdmin
                        }
                    )
                    
                    res.status(200).json(others)
                } else {
                    res.status(401).json("Wrong Credential")
                }
            } else {
                res.status(401).json("Wrong Credential")
            }


        } catch (err) {
            res.status(500).json(err);
        }
       
    }
}

export default controller;