const express = require('express');
const router = express.Router();

const {usersApi, gogersApi} = require('../api');

router.get('/api/users', usersApi.list );
router.get('/api/users/:id', usersApi.oneUser );

router.get('/api/gogers', gogersApi.products );
router.get('/api/gogers/:id', gogersApi.oneUser );


module.exports = router;