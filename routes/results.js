const express = require('express');
const router = express.Router();

router.get('/results', (req, res, next) => {
  // incoming query params from search
  cityCode = req.query.cityCode;
  checkInDate = req.query.checkInDate;
  checkOutDate = req.query.checkOutDate;
  // ask the controller for the list, must be before the render
  const askAmadeus = require('../controllers/amadeusControl.js');
  askAmadeus.shoppingActivitiesBySquare();
// render the results
  res.render('results', {
    title: 'We Found Some Great Deals!',
    list: docs,
    count: count,
    query: cityCode,
    checkInDate: checkInDate,
    checkOutDate: checkOutDate,
    // latitude: lat, // 41.397158,
    // longitude: lon, // 2.160873,
  });
},

);

module.exports = router;
