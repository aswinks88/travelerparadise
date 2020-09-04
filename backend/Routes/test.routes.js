const router = require("express").Router();
const axios = require("axios");
router.route("/").post(async (req, res) => {
  // console.log(req.body.category);
  const data = [];
  const placeDetail = [];
  await axios
    .get("https://maps.googleapis.com/maps/api/place/textsearch/json", {
      params: {
        query: req.body.query.search,
        key: process.env.GOOGLE_PLACE_API_KEY,
      },
    })
    .then((response) => {
      for (let i = 0; i < response.data.results.length; i++) {
        if (!response.data.results[i].hasOwnProperty("photos")) {
          // console.log(response.data.results[i].name);
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
    })
    .then(async () => {
      for (let i = 0; i < data.length; i++) {
        await axios
          .get(
            `https://maps.googleapis.com/maps/api/place/details/json?place_id=${data[i].placeId}&fields=name,rating,url,website,formatted_phone_number&key=${process.env.GOOGLE_PLACE_API_KEY}`
          )
          .then((response) => {
            placeDetail.push(response.data.result);
          })
          .catch((err) => {
            console.log(err.response.data);
          });
      }
    })
    .catch((err) => {
      console.log(err.response);
    });

  data.map((value, index) => {
    return (value["place_details"] = placeDetail[index]);
  });

  res.send(data);
});

router.route("/nearbyplaces").post(async (req, res) => {
  console.log(req.body);
  const data = [];
  const placeDetail = [];
  await axios
    .get("https://maps.googleapis.com/maps/api/place/nearbysearch/json", {
      params: {
        key: process.env.GOOGLE_PLACE_API_KEY,
        location: req.body.ll,
        radius: 20000,
        keyword: "popular destinations near me",
      },
    })
    .then((response) => {
      console.log(1, "for loop starts here");
      response.data.results.forEach((value, i) => {
        if (!value.hasOwnProperty("photos")) {
          data.push({
            name: value.name,
            photoUrl: "N/A",
            address: value.formatted_address,
            location: value.geometry.location,
            rating: value.rating,
            status: value.business_status,
            tags: value.types,
            placeId: value.place_id,
          });
        } else {
          data.push({
            name: value.name,
            photoUrl: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=${value.photos[0].photo_reference}&key=${process.env.GOOGLE_PLACE_API_KEY}`,
            address: value.formatted_address,
            location: value.geometry.location,
            rating: value.rating,
            status: value.business_status,
            tags: value.types,
            placeId: value.place_id,
          });
        }
      });
      console.log(1, "for loop ends here");
    })
    .then(async () => {
      console.log(2, "for loop starts here");
      for (let i = 0; i < data.length; i++) {
        await axios
          .get(
            `https://maps.googleapis.com/maps/api/place/details/json?place_id=${data[i].placeId}&fields=name,rating,url,website,formatted_phone_number&key=${process.env.GOOGLE_PLACE_API_KEY}`
          )
          .then((response) => {
            placeDetail.push(response.data.result);
          })
          .catch((err) => {
            console.log(err.response.data);
          });
      }
      console.log(2, "for loop ends here");
    })
    .catch((err) => {
      console.log(err.response);
    });
  console.log(3, "map starts here");
  data.map((value, index) => {
    return (value["place_details"] = placeDetail[index]);
  });
  console.log(3, "map ends here");
  console.log(5, data[0]);
  res.send(data);
});

router.route("/forhikers").post(async (req, res) => {
  // console.log(req.body.ll);
  const data = [];
  const placeDetail = [];
  await axios
    .get("https://maps.googleapis.com/maps/api/place/nearbysearch/json", {
      params: {
        key: process.env.GOOGLE_PLACE_API_KEY,
        location: req.body.ll,
        radius: 20000,
        keyword: "Hiking near me",
      },
    })
    .then((response) => {
      response.data.results.forEach((value, i) => {
        if (!value.hasOwnProperty("photos")) {
          data.push({
            name: value.name,
            photoUrl: "N/A",
            address: value.formatted_address,
            location: value.geometry.location,
            rating: value.rating,
            status: value.business_status,
            tags: value.types,
            placeId: value.place_id,
          });
        } else {
          data.push({
            name: value.name,
            photoUrl: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=${value.photos[0].photo_reference}&key=${process.env.GOOGLE_PLACE_API_KEY}`,
            address: value.formatted_address,
            location: value.geometry.location,
            rating: value.rating,
            status: value.business_status,
            tags: value.types,
            placeId: value.place_id,
          });
        }
      });
    })
    .then(async () => {
      for (let i = 0; i < data.length; i++) {
        await axios
          .get(
            `https://maps.googleapis.com/maps/api/place/details/json?place_id=${data[i].placeId}&fields=name,rating,url,website,formatted_phone_number&key=${process.env.GOOGLE_PLACE_API_KEY}`
          )
          .then((response) => {
            placeDetail.push(response.data.result);
          })
          .catch((err) => {
            console.log(err.response.data);
          });
      }
    })
    .catch((err) => {
      console.log(err.response);
    });
  data.map((value, index) => {
    return (value["place_details"] = placeDetail[index]);
  });
  res.send(data);
});
router.route("/funactivities").post(async (req, res) => {
  // console.log(req.body.ll);
  const data = [];
  const placeDetail = [];
  await axios
    .get("https://maps.googleapis.com/maps/api/place/nearbysearch/json", {
      params: {
        key: process.env.GOOGLE_PLACE_API_KEY,
        location: req.body.ll,
        radius: 20000,
        keyword: "Recreational Activities",
      },
    })
    .then((response) => {
      response.data.results.forEach((value, i) => {
        if (!value.hasOwnProperty("photos")) {
          data.push({
            name: value.name,
            photoUrl: "N/A",
            address: value.formatted_address,
            location: value.geometry.location,
            rating: value.rating,
            status: value.business_status,
            tags: value.types,
            placeId: value.place_id,
          });
        } else {
          data.push({
            name: value.name,
            photoUrl: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=${value.photos[0].photo_reference}&key=${process.env.GOOGLE_PLACE_API_KEY}`,
            address: value.formatted_address,
            location: value.geometry.location,
            rating: value.rating,
            status: value.business_status,
            tags: value.types,
            placeId: value.place_id,
          });
        }
      });
    })
    .then(async () => {
      for (let i = 0; i < data.length; i++) {
        await axios
          .get(
            `https://maps.googleapis.com/maps/api/place/details/json?place_id=${data[i].placeId}&fields=name,rating,url,website,formatted_phone_number&key=${process.env.GOOGLE_PLACE_API_KEY}`
          )
          .then((response) => {
            placeDetail.push(response.data.result);
          })
          .catch((err) => {
            console.log(err.response.data);
          });
      }
    })
    .catch((err) => {
      console.log(err.response);
    });
  data.map((value, index) => {
    return (value["place_details"] = placeDetail[index]);
  });
  res.send(data);
});

// router.route("/fetchplacedetails").post(async (req, res) => {
//   await axios
//     .get(
//       `https://maps.googleapis.com/maps/api/place/details/json?place_id=${req.body.placeId}&fields=name,rating,url,website,formatted_phone_number&key=${process.env.GOOGLE_PLACE_API_KEY}`
//     )
//     .then((response) => {
//       res.send(response.data);
//     })
//     .catch((err) => {
//       console.log(err.response.data);
//     });
// });
module.exports = router;
