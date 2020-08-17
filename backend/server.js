const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const route = require("./Routes/test.routes");
const port = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", route);
app.listen(port, () => {
  console.log(`server is running on port: http://localhost:${port}`);
});
