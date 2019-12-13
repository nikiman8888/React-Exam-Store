const models = require('../models');
const config = require('../config/config');
const utils = require('../utils');

module.exports = {
   
    post: {
        register: (req, res, next) => {
            const { username, password } = req.body;
            //const existingUsername = models.User.findOne({name:username});


            models.User.create({ username, password })
              .then(user =>{
                  console.log(user )
                  res.send({success:true,message:'Succesfull Registered'})
              }).catch((err) =>{
                  let message = 'Something is not correct';
                  if(err.code === 11000){
                      message = 'Username already exist'
                  }
                  return res.json({success:false,message:message})
              });
                  
              
                  
              
        },

        login: (req, res, next) => {
            const { username, password } = req.body;
            models.User.findOne({ username })    
                     
                .then((user) => Promise.all([user,user!==null? user.matchPassword(password):null]))
                .then(([user, match]) => {
                    if (!match) {
                        res.status(401).send({success:false,message:'Invalid username or password'});
                        return;
                    }

                    const token = utils.jwt.createToken({ id: user._id });
                    res.cookie(config.authCookieName, token).send({success:true,user:user});
                })
                .catch(next);
        },

        logout: (req, res, next) => {
            
            res.clearCookie(config.authCookieName).send('Logout successfully!');
        }
    },
};