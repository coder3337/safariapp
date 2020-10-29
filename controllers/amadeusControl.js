const Amadeus = require('amadeus');
const amadeus = new Amadeus({
  'clientId': process.env.AMADEUS_CLIENT_ID,
  'clientSecret': process.env.AMADEUS_CLIENT_SECRET,
});

async function askAmadeus() {
  await amadeus.shopping.activities.bySquare.get({
    north: 41.397158,
    west: 2.160873,
    south: 41.394582,
    east: 2.177181, // barcelona
  }).then(function(response) {
    console.log(response.data);
    results = response.data;
    count = Object.keys(results).length;
    // console.log(results);
    // console.log(count);
  }).catch(function(response) {
    console.error(response);
  });
}
askAmadeus();

module.exports.askAmadeus = askAmadeus;

/* console.log(response.body); // => The raw body
    console.log(response.result); // => The fully parsed result
    console.log(response.data); // => The data attribute taken from the result */


// western cape area
/*    north: -32.155740,
  west: 18.672539,
  south: -33.584539,
  east: 19.471774, */ // this is the cape region, not always availble in test dataset


// list of endpoint egs
// What are the popular places in Barcelona (based on a geo location and a radius)
/* amadeus.referenceData.locations.pointsOfInterest.get({
  latitude: 41.397158,
  longitude: 2.160873,
}).then(function(response) {
  results = response.data;
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
  results = response.data;
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
// console.log(results);
/* const searchAmadeus = require('../controllers/amadeusControl.js');
  searchAmadeus.findNew(cityCode); */
// results = response.data;
