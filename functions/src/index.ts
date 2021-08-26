import * as functions from "firebase-functions";
// const request = require('request');

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

export const helloWorld = functions.https.onCall((data, context) => {
  const json = JSON.parse(data)
  console.log(json.action)
//   const obj = JSON.parse(json);
//   console.log(obj)
//   const cors = require('cors')({origin: true});
  return 'Hello from Firebase'
  
});
