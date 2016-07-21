var express = require('express'),
    cors = require('cors'),
    router = express.Router(),
    bodyParser = require('body-parser'),
    parseUrlEncoded = bodyParser.urlencoded({extended: false});

router.route('/')
  .get(cors(), function(req, res){
    var listOfProducts = {"sample-data": [
      {
        "name": "Toothbrush",
        "price": 15.49,
        "description": "The world's first toothbrush of its kind with Bluetooth communication between brush and smartphone",
        "qtyAvailable": 4,
        "image": "http://media.oralb.com/en-US/assets/images/products/gallery/pulsonic34.jpg",
        "tags": ["Hygiene"]
      },
      {
        "name": "Hand Towels",
        "price": 5.00,
        "description": "2-pack of cotton bath towels, size 16\" x 30\" inches",
        "qtyAvailable": 100,
        "image": "http://images.cb2.com/is/image/CB2/SmithHandTowelBlueGreenS15/&$web_zoom$&/1411031640/smith-blue-green-hand-towel.jpg",
        "tags": ["Towel"]
      }
    ]};

    res.json(listOfProducts);
  })
  .post(parseUrlEncoded, function(req, res){
    // To do
  });

module.exports = router;
