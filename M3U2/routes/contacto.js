var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.send('hoy soy la página de contacto');
});

module.exports = router;
