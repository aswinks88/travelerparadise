const router = require("express").Router();
const axios = require("axios");
const Amadeus = require("amadeus");
const { json } = require("body-parser");
const { data } = require("jquery");
let count = 0;
router.route("/").post(async (req, res) => {
  console.log(req.body.category);
  // query=tongariro&key=AIzaSyDF383sJqvwvvPP4rcTStAXJtWmh7oAW6g
  const GooglePhotoApiURL =
    "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=";
  const imageURL = [];
  const data = [
    // {
    //   name: "",
    //   photoUrl: "",
    //   address: "",
    //   location: "",
    //   status: "",
    //   tags: [],
    //   rating: "",
    //   placeId: "",
    // },
  ];
  axios
    .get("https://maps.googleapis.com/maps/api/place/textsearch/json", {
      params: {
        query: req.body.query.search,
        key: process.env.GOOGLE_PLACE_API_KEY,
        // location: req.body.ll,
      },
    })
    .then((response) => {
      // response.data.results.map((data, index) => {
      //   console.log(data.photos[0].photo_reference, index);
      // imageURL.push(
      //   `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${data.photos.photo_reference}&key=${process.env.GOOGLE_PLACE_API_KEY}`
      // );
      // });
      for (let i = 0; i < response.data.results.length; i++) {
        if (!response.data.results[i].hasOwnProperty("photos")) {
          console.log(response.data.results[i].name);
          // imageURL.push("Image not available");
          data.push({
            name: response.data.results[i].name,
            photoUrl: "N/A",
            address: response.data.results[i].formatted_address,
            location: response.data.results[i].geometry.location,
            rating: response.data.results[i].rating,
            status: response.data.results[i].business_status,
            tags: [response.data.results[i].types],
            placeId: response.data.results[i].place_id,
          });
        } else {
          // console.log(response.data.results[i].photos[0].photo_reference);
          // imageURL.push(
          //   `https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=${response.data.results[i].photos[0].photo_reference}&key=${process.env.GOOGLE_PLACE_API_KEY}`
          // );
          data.push({
            name: response.data.results[i].name,
            photoUrl: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=${response.data.results[i].photos[0].photo_reference}&key=${process.env.GOOGLE_PLACE_API_KEY}`,
            address: response.data.results[i].formatted_address,
            location: response.data.results[i].geometry.location,
            rating: response.data.results[i].rating,
            status: response.data.results[i].business_status,
            tags: response.data.results[i].types,
            placeId: response.data.results[i].place_id,
          });
        }
      }

      res.send(data);
      // console.log(data);
    });
  // .then((placeDetailsRes) => {
  //   axios
  // });
});
module.exports = router;

// if (req.body.category.id === 1) {
// }
// const id = [];
// const resObject = {
//   venue: "",
//   photo: [],
// };

// {
//   prefix: "",
//   width: "",
//   height: "",
//   suffix: "",
// }
// Arts & Entertainment 4d4b7104d754a06370d81259 ,
// Event 4d4b7105d754a06373d81259,
// Food 4d4b7105d754a06374d81259,
// Outdoors & Recreation 4d4b7105d754a06377d81259,
// Professional & Other Places 4d4b7105d754a06375d81259,
// Shop & Service 4d4b7105d754a06378d81259,
// Travel & Transport 4d4b7105d754a06379d81259
// await axios
//   .get(`https://api.foursquare.com/v2/venues/explore`, {
//     params: {
//       client_id: process.env.FSQ_CLIENT_ID,
//       client_secret: process.env.FSQ_CLIENT_SECRET,
//       ll: req.body.ll,
//       // near: "New Zealand",
//       query: req.body.query.search,
//       // categoryId: "4d4b7105d754a06377d81259",
//       v: "20202408",
//       limit: 15,
//       sortByDistance: 1,
//     },
//   })
//   .then((response) => {
//     console.log(response.data.response.groups[0].items[0].venue.id);
//     id.push(response.data.response.groups[0].items[0].venue.id);
//     console.log(id);
//     resObject.venue = response.data.response.groups[0].items;
//     // return res.json(response.data.response.groups[0].items);
//   })
//   .then(async () => {
//     await axios
//       .get(`https://api.foursquare.com/v2/venues/${id}/photos`, {
//         params: {
//           client_id: process.env.FSQ_CLIENT_ID,
//           client_secret: process.env.FSQ_CLIENT_SECRET,
//           v: "20202408",
//           limit: 5,
//         },
//       })
//       .then((response) => {
//         console.log(3, JSON.stringify(response.data));
//         resObject.photo.push(response.data);
//         return res.json(resObject);
//       });
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const amadeus = new Amadeus({
//   clientId: process.env.CLIENT_ID,
//   clientSecret: process.env.CLIENT_SECRET,
// });
// amadeus.referenceData.locations.pointsOfInterest
//   .get({
//     latitude: -36.9,
//     longitude: 174.7488161,
//   })
//   .then((response) => {
//     console.log(response.data);
//     // res.json(JSON.stringify(response.data));
//   })
//   .catch(function (responseError) {
//     console.log(responseError);
//   });
