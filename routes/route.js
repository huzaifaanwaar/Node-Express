const express = require('express');
const router = express.Router();

const controllerFn = require('../controller/controller');

router.get('/get', controllerFn.getRequest);

router.post('/post', controllerFn.postRequest);

router.put('/put', controllerFn.putRequest);

router.delete('/delete', controllerFn.deleteRequest);

router.patch('/patch', controllerFn.patchRequest);

router.post('/insert-data', controllerFn.insertData);

router.get('/read-data', controllerFn.readData);

router.post('/select-data', controllerFn.selectOne);

router.delete('/delete-data', controllerFn.deleteRecord);

router.put('/update-data', controllerFn.updateRecord);


module.exports = router;