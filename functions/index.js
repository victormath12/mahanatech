const functions = require('firebase-functions');
const express = require('express');
var cors = require('cors')
const bodyParser = require('body-parser');
const app = express();

/* var corsOptions = {
  origin: 'http://example.com',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.get('/products/:id', cors(corsOptions), function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for only example.com.'})
})
 */

// Configuration
app.use(cors({ origin: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// Path Declaration
visitantes = require('./visitantes/visitantes-router');


// Path Routing
app.use('/visitantes', visitantes);


exports.app = functions.https.onRequest(app);