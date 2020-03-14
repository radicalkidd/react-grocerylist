const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const port = 3000;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname +'/../client/dist'));
app.use(cors())

app.get('/', (req, res) => res.send('Hello World'));

app.listen(port, () => console.log(`Grocerylist App is listening on port ${port}!`));
