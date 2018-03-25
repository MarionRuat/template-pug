var express = require('express');
var router = express.Router();


router.put('/:name([a-zA-Z]+)', function(req, res, next) {
  res.send('Hey ! My name is ' + req.params.name);
});	

/* POST user creation. */
router.delete('/:nb(\\d+)', function(req, res, next) {
  res.send('Hey ! It\'s a DELETED ID' + req.params.nb);
});



module.exports = router;