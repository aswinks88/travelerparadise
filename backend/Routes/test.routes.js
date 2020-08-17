const router = require("express").Router();
const Amadeus = require("amadeus");
router.route("/").get(async (req, res) => {
  const amadeus = new Amadeus({
    clientId: "ltanYY3jNBpL1ywqrvhVC2im3ofxPJA9",
    clientSecret: "50RFG8yklo7hbJbH",
  });
  amadeus.shopping.flightDestinations
    .get({
      origin: "PAR",
      maxPrice: 200,
    })
    .then(function (response) {
      res.json(JSON.stringify(response));
    })
    .catch(function (responseError) {
      res.json(responseError);
    });
});
module.exports = router;
