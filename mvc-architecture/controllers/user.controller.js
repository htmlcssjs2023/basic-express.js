const users = require('../models/user.model')


const showUser =(req, res)=>{
    res.send(users)
}
exports.showUser = showUser;
