const express = require('express');
const router = express.Router();

router.post('/results', function(req, res, next) {
  //const q = req.query.q;
  //console.log('post query', req.query.cityCode);
  
  res.send({ cityCode: req.query.cityCode, checkInDate: req.query.checkInDate, checkOutDate: req.query.checkOutDate });
  
  // res.send(q);
  // console.log(q);
});

module.exports = router;

