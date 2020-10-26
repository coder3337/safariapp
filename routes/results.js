// const {response} = require('express');
// const {response} = require('express');
const express = require('express');
const router = express.Router();


/* GET search page. */
/* router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Find Your Package!',
    body: req.body,
    // body: req.body,
  });
}); */

/* app.post('/flightSearch', (req, res) => {
  // askAmadeus(req, res);
  res.send('respond with a resource', res.body);
}); */
// const city = 'CPT';


router.get('/results', (req, res, next) => {
// TO DO implement module export from here to amadeus controller to get results and send to res.render
/*     const askAmadeus = require('../controllers/amadeusControl.js');
   askAmadeus.findNew(docs); */

  cityCode = req.query.cityCode;
  checkInDate = req.query.checkInDate;
  checkOutDate = req.query.checkOutDate;

  const Amadeus = require('amadeus');
  const amadeus = new Amadeus({
    'clientId': process.env.AMADEUS_CLIENT_ID,
    'clientSecret': process.env.AMADEUS_CLIENT_SECRET,
  });
  // https://developers.amadeus.com/self-service/category/hotel/api-doc/hotel-search/api-reference

  amadeus.shopping.activities.bySquare.get({
    // western cape area
 /*    north: -32.155740,
    west: 18.672539,
    south: -33.584539,
    east: 19.471774, */
      north: 41.397158,
  west: 2.160873,
  south: 41.394582,
  east: 2.177181

  }).then(function(response) {
    docs = response.data;

    // (JSON.stringify(docs));
    count = Object.keys(docs).length;
    console.log('count', count);
    console.log('docs', docs);
    console.log('media', docs);
    docs;

    // res.render needs to be inside this .then - OMFG
    res.render('results', {
      title: 'We Found Some Great Deals!',
      // list: ['Hotel 1', 'Hotel 1', 'Hotel 1', 'Hotel 1', 'Hotel 1', 'Hotel 1'],
      list: docs, // this works after some delay and undefined - duh josh
      count: count,
      query: cityCode,
      checkInDate: checkInDate,
      checkOutDate: checkOutDate,
      // latitude: lat, // 41.397158,
      // longitude: lon, // 2.160873,
    });

    // console.log(response);
  }).catch(function(response) {
    console.error(response);
  });
},
);

module.exports = router;
// What are the popular places in Barcelona (based on a geo location and a radius)
/* amadeus.referenceData.locations.pointsOfInterest.get({
  latitude: 41.397158,
  longitude: 2.160873,
}).then(function(response) {
  docs = response.data;
  count = Object.keys(response).length;
  console.log('count', count);
  // console.log(response);
}).catch(function(response) {
  console.error(response);
}); */


//
/* amadeus.shopping.hotelOffers.get({
  cityCode: cityCode,
}).then(function(response) {
  docs = response.data;
  count = Object.keys(response).length;
  console.log('count', count);
  // console.log(response);
}).catch(function(response) {
  console.error(response);
}); */

/* // Generates a photo with mountain
    amadeus.media.files.generatedPhotos.get({
      category: 'MOUNTAIN',
    }).then(function(response) {
      console.log('pic', response.data.attachmentUri); // I can see this in the console
      pic = response.data;
      console.log(pic);
      //console.log(response);
    }).catch(function(response) {
      console.error(response);
    }); */


/*  // What is the safety information of a location based on its Id?
amadeus.safety.safetyRatedLocation('Q930400801').get()

// Tours and Activities
// What are the best tours and activities in Barcelona?
amadeus.shopping.activities.get({
  latitude: 41.397158,
  longitude: 2.160873
})

// What are the best tours and activities in Barcelona? (based on a Square)
amadeus.shopping.activities.bySquare.get({
  north: 41.397158,
  west: 2.160873,
  south: 41.394582,
  east: 2.177181
})

// Extract the information about an activity with ID '56777'
amadeus.shopping.activity('56777').get()

// Hotel Ratings
// Get Sentiment Analysis of reviews about Holiday Inn Paris Notre Dame.
amadeus.eReputation.hotelSentiments.get({
  hotelIds: 'XKPARC12'
}) */

// const result = ;
// q = JSON.stringify(q);
// console.log('results.js', q);

// console.log('results.js');
// console.log('prop', count); // => The data attribute taken from the result

// console.log('results2.js', searchAmadeus.findNew());
// console.log(docs);
/* const searchAmadeus = require('../controllers/amadeusControl.js');
  searchAmadeus.findNew(cityCode); */
// docs = response.data;

