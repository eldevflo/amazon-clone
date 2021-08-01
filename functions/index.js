const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors")
// secret api key from stripe
const stripe = require("stripe")('sk_test_51IgQ1sDhmyrgepSH6ZJBzlThlaNTu5NSIMQIKBbHAKnx5eggyZGH0RcLUGv1K3pHdNDmspONDEYYIXJzbtFwZC1e00fnitzx0s')


//app config
const app = express()

//middleware
app.use(cors({origin: true}));
app.use(express.json());

// api routes
app.get('/' , (request, response) => response.status(200).send('hello world'))

app.post('/payments/create' , async (request, response) => {
    const total = request.query.total;//: the amount in subunit
    
    console.log('payment req received for this amount >>>>' , total);
    
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, //:subunit of the currency
        currency: 'usd',
    });
    // ok- created
    response.status(201).send({

        clientSecret : paymentIntent.client_secret
    });

}); //in hamoon routie k toye payment.js dadim (in getclientsecret func)

// listen
exports.api= functions.https.onRequest(app)

// END POINT EXAMPLE: http function initialized (https://clone-3cadd.web.app).





// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
