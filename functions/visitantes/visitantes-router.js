const express = require('express');
const controller = require('./visitantes-controller');
const router = express.Router();

router.post('/', controller.post);

router.post('/json', controller.postWithJson); 

router.post('/mail', controller.sendMailjet); 

router.put('/:id', controller.put);

router.delete('/:id', controller.delete);

module.exports = router;