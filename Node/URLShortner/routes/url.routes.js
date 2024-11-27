const express = require('express');
const { handleGenerateNewShortURL, handleGetAnalytics } = require('../controller/url.controller.js')
const router = express.Router();

router.post('/', handleGenerateNewShortURL);
router.get('/analytics/:shortId', handleGetAnalytics);


module.exports = { router };