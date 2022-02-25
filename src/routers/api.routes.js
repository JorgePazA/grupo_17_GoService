const express = require('express');
const router = express.Router();

const {usersApi, gogersApi} = require('../api');

router.get('/api/users', usersApi.list );
router.get('/api/users/:id', usersApi.oneUser );

router.get('/api/products', gogersApi.products );
// router.get('/products/:id', productsApi.getById );


module.exports = router;