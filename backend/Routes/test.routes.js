const router = require("express").Router();
const axios = require("axios");

router.route("/").post(async (req, res) => {
  await axios
    .get(`https://api.foursquare.com/v2/venues/explore`, {
      params: {
        client_id: process.env.FSQ_CLIENT_ID,
        client_secret: process.env.FSQ_CLIENT_SECRET,
        // ll: req.body.ll,
        near: "New Zealand",
        query: req.body.query.search,
        categoryId: `4d4b7104d754a06370d81259,4d4b7105d754a06373d81259,4d4b7105d754a06374d81259,4d4b7105d754a06377d81259,4d4b7105d754a06375d81259,4d4b7105d754a06378d81259,4d4b7105d754a06379d81259`,
        v: "20202408",
        limit: 50,
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
