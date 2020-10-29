const express = require('express');
const router = express.Router();
const amadeus = require('../controllers/amadeusControl.js');


router.get('/results', (req, res, next) => {
  // incoming query params from search
  const cityCode = req.query.cityCode;
  const checkInDate = req.query.checkInDate;
  const checkOutDate = req.query.checkOutDate;

  amadeus.askAmadeus();

  res.render('results', {
    title: 'We Found Some Great Deals!',
    list: results,
    count: count,
    cityCode: cityCode,
    checkInDate: checkInDate,
    checkOutDate: checkOutDate,
    // latitude: lat, // 41.397158,
    // longitude: lon, // 2.160873,
  });
},

);

module.exports = router;
