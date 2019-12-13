const jwt = require('./jwt');
const config = require('../config/config');
const models = require('../models');

module.exports = (redirectAuthenticated = true) => {

    return function (req, res, next) {
        const token = req.cookies[config.authCookieName] || '';

        Promise.all([
            jwt.verifyToken(token)
        ])
            .then(([data]) => {

                models.User.findById(data.id)
                    .then((user) => {
                        req.user = user;
                        next();
                    });
            })
            .catch(err => {
                if (!redirectAuthenticated) { next(); return; }

                next(err);
            })
    }
};