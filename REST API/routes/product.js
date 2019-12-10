const controllers = require('../controllers');
const router = require('express').Router();
const { auth } = require('../utils');

router.get('/', controllers.product.get);

router.get('/my-products',auth(), controllers.product.getMy);

router.get('/details',controllers.product.getOne);

router.post('/', auth(), controllers.product.post);

router.put('/details', controllers.product.putSell);

router.put('/update', auth(), controllers.product.put);

router.delete('/delete', auth(), controllers.product.delete);

module.exports = router;