const Product = require('../../db').Product;
const route = require('express').Router();

route.get('/', (req, res) => {
    //get all products from our database.
    Product.findAll()
        .then(products => {
            res.status(200).send(products)
        })
        .catch((err) => {
            res.status(500).send({
                error: 'Could not retrieve products'
            })
        })
})

route.post('/', (req, res) => {
    //Validate the values
    if(isNaN(req.body.price)){
        return res.status(403).send({
            error: "Price is not a valid number!"
        })
    }
    //add a new product
    Product.create({
        name: req.body.name,
        price: parseFloat(req.body.price), // str to float conversion for db
        manufacturer: req.body.manufacturer,
        description: req.body.description
    }).then((product) => {
        res.status(201).send(product);
    }).catch((err) => {
        res.status(501).send({
            error: 'Could not add new product'
        })
    })
})

exports = module.exports = route