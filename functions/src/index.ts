import * as functions from "firebase-functions";

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

export const helloWorld = functions.https.onRequest((request, response) => {
  console.log('hello from the emulator');
  const cors = require('cors')({origin: true});
  cors(request, response, () => {
    response.send(JSON.stringify({data: "Hello from Firebase!"}));
  });
  
});
