const fs = require("fs");
const express = require("express");
const app = express();
const port = 3000;
var bodyParser = require("body-parser");
app.set("view engine", "pug");
app.use(express.static(__dirname + "/public"));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
// getting all survey responses with given survey id
app.get("/survey/:survey_id", (req, res) => {
  var data = fs.readFileSync("./data.json");
  let responses = [];
  try {
    responses = JSON.parse(data);
  } catch (error) {
    new Error("something broke!");
  }
  responses = responses.filter((r) => r.survey_id === req.params.survey_id);

  res.render("index", {
    title: "Survey",
    message: "Survey Responses",
    responses: responses,
  });
});
// initial get request
app.get("/", (req, res) => {
  res.render("index", {
    title: "Seam Social Labs",
    responses: [],
    //- I thought this would be a funny photo
    image: "src/public/collage.jpg",
  });
});
// route for home page
app.get("/home", (req, res) => {
  res.render("index", {
    title: "Home",
    message2: "How do you feel about the COVID-19 response in your community?",
    responses: [],
  });
});
// route for posting survey response
app.post("/response", (req, res) => {
  var data = fs.readFileSync("./data.json");
  let responses = [];
  try {
    responses = JSON.parse(data);
  } catch (error) {
    new Error("something broke!");
  }
  //   survey response data
  let newData = {
    response: req.body.response,
    survey_id: req.body.survey_id,
  };
  //   adding survey response to JSON file
  responses.push(newData);
  newData = JSON.stringify(responses);
  fs.writeFile("./data.json", newData, (err) => {
    if (err) throw new Error("something broke!");
  });
  // redirect so all responses are shown
  res.render("index", {
    message3: "Survey Responses",
    responses: responses,
  });
});

app.listen(port);

module.exports = app;
