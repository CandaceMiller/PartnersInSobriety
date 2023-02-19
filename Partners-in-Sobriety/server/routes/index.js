const express = require('express');

const authRouter = require('./auth-router');
const sponsorRouter = require('./sponsor-router');
const router = express.Router();

router.use('/', authRouter);
router.use('/', sponsorRouter);

module.exports = router;