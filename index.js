require('dotenv').config()
const express = require("express");
const massive = require('massive')
const app = express();
const {SERVER_PORT, CONNECTION_STRING} = process.env;

app.use(express.json());

massive(CONNECTION_STRING).then((dbInstance) => {
  app.set('db', dbInstance)
  console.log('database set!')
  console.log(`Server listening on port ${SERVER_PORT}`);
})

app.listen(SERVER_PORT, () => {
});
