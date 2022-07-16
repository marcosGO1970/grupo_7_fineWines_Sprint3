const express = require('express');

const mainController = require ('../controllers/mainController.js')

const router= express.Router();

router.get('/', mainController.index);
router.get('/productCart', mainController.productCart);
router.get('/login', mainController.login);
router.get('/register', mainController.register);
router.get('/productDetail', mainController.productDetail);

module.exports = router;

