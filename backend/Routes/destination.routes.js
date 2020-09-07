const router = require("express").Router();
const axios = require("axios");
router.route("/nearbyplaces").all(async (req, res) => {
  console.log("destination is called");
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
    })
    .catch((err) => {
      console.log(err.response);
    });

  data.map((value, index) => {
    return (value["place_details"] = placeDetail[index]);
  });
  res.send(data);
});

module.exports = router;
