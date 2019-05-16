require('dotenv').config()
const express = require("express");
const massive = require('massive')
const app = express();
const {SERVER_PORT, CONNECTION_STRING} = process.env;

app.use(express.json());

massive(CONNECTION_STRING)
  .then((dbInstance) => {
    app.set('db', dbInstance)
    console.log('database set!')
  // dbInstance.new_planes()
  // .then((planes) => {
  //   console.log(planes)
  // .catch((err) => {
  //   console.log(err)
  // }) 
  // })
  dbInstance.get_planes()
  .then((planes) => {
    console.log(planes)
  })
  .catch((err) => console.log(err))
  app.listen(SERVER_PORT, () => {
    console.log(`Server listening on port ${SERVER_PORT}`);
  });
})

