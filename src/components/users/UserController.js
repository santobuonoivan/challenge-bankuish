//const userRepository = require('./UserRepository');
const admin = require('../../firebase/firebase-config');

exports.createUser = async function(req,res){
    const {password, email} = req.body;
    try {
        const userResponse = await admin.auth().createUser({
            email,
            password,
            emailVerified: false,
            disabled: false
        });

        return res.status(201).send({ user: userResponse });
    }catch (e) {
        if(e instanceof require('./../../Exceptions/AppError'))
            return res.status(e.status).json({error:e.message});
        return res.status(400).json({error:e.message})
    }
};
/*
exports.testToken = async function (req,res,next) {
    return res.send({user:req.user, ur:req.user_roles,ul:req.user_locations});
};

exports.refreshToken = async function (req,res,next) {
    const refresh_token =  await userService.generateToken(req.user);
    return res.send({ token: refresh_token});
};
*/

