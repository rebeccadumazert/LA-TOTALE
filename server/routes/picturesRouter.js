const router = require('express').Router();

const picturesCtrl = require('../controllers/picturesCtrl');

router.get('/', picturesCtrl.getPictures);

module.exports = router;
