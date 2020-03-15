const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const axios = require('axios');
const port = 3000;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname +'/../client/dist'));
app.use(cors())

// axios.get('/',)
//   .then(response => {
//     //handle success
//     console.log(response);
//   })
//   .catch(error => {
//     console.log(error)
//   })


app.listen(port, () => console.log(`Grocerylist App is listening on port ${port}!`));
