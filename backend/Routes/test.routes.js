const router = require("express").Router();
const axios = require("axios");

router.route("/").post(async (req, res) => {
  await axios
    .get(`https://api.foursquare.com/v2/venues/explore`, {
      params: {
        client_id: process.env.FSQ_CLIENT_ID,
        client_secret: process.env.FSQ_CLIENT_SECRET,
        ll: req.body.ll,
        query: req.body.query.search,
        v: "20202408",
        limit: 15,
      },
    })
    .then((response) => {
      return res.json(response.data.response.groups[0].items);
    })
    .catch((err) => {
      console.log(err.response);
    });
});
module.exports = router;
