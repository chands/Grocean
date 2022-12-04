const route = require('express').Router();

route.use('/users', require('./user'));
route.use('/products', require('./product'));

exports = module.exports = {
    route
}