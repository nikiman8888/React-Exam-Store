const models = require('../models');

module.exports = {

    getMy: (req, res, next) => {

        const userId = req.user;

        models.User.findById(userId)
            .populate('products')
            .then(user => res.send(user.products))
            .catch(next)
        //async(req, res,next) =>{
        //const userId = req.user.id;
        //const user = await models.User.findOne({_id:userId}).populate('products');
        //console.log(user.products)
        // res.send(user.products);

        // ----------------------------------------------------       

        // .then((user) => {
        //     console.log(user.products)
        //  })
        //.then((products)=> res.send(products))
        //.catch(next);
    },

    get: (req, res, next) => {

        models.Product.find()
            .then((products) => res.send(products))
            .catch(next);
    },

    getOne: (req, res, next) => {

        const { id } = req.query;
        models.Product.findById(id)
            .then((product) => res.send(product))
            .catch(next);
    },

    post: (req, res, next) => {
        const { title, price, imageUrl,description,category,sales } = req.body;
        const { _id } = req.user;

        models.Product.create({ title, price, imageUrl, description, category,sales,author: _id })
            .then((createdProduct) => {
                return Promise.all([
                    models.User.updateOne({ _id }, { $push: { products: createdProduct } }),
                    models.Product.findOne({ _id: createdProduct._id })
                ]);
            })
            .then(([modifiedObj, productObj]) => {
                res.send(productObj);
            })
            .catch(next);
    },

    put: (req, res, next) => {
        const pid = req.params.id;
        const { id } = req.query;
        const { sales} = req.body;
        models.Product.updateOne({ _id: id }, { sales})
            .then((updatedProduct) => res.send(updatedProduct))
            .catch(next)
    },

    putSell: (req, res, next) => {
        //const pid = req.params.id;
        const { id } = req.query;
        const { sales} = req.body;
        models.Product.updateOne({ _id: id }, { sales})
        
            .then((updatedProd) => res.send(updatedProd))
            .catch(next)
    },

    delete: (req, res, next) => {
        const id = req.params.id;
        models.Product.deleteOne({ _id: id })
            .then((removedProduct) => res.send(removedProduct))
            .catch(next)
    }
};