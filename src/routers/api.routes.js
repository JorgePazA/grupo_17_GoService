const express = require('express');
const router = express.Router();
const cors = require('cors');

const {usersApi, gogersApi} = require('../api');

router.get('/api/users', cors(), usersApi.list );
router.get('/api/users/:id', cors(), usersApi.oneUser );

router.get('/api/gogers', cors(), gogersApi.products );
router.get('/api/gogers/:id', cors(), gogersApi.oneUser );


module.exports = router;