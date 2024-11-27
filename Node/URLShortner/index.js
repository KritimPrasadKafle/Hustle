const express = require('express');
const app = express();
const { urlRoute } = require('./routes/url.routes.js');
const { connectToMongoDB } = require('./connect.js');
const URL = require('./models/url.models.js');

require('dotenv').config()

connectToMongoDB(process.env.MONGODB_URL)
  .then(() => {
    console.log("MongoDB Connected Successfully");
  })

app.use(express.json());


app.use('/url', urlRoute);
app.get('/:shortId', async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate({
    shortId,
  },
    {
      $push: {
        visitHistory: {
          timeStamp: Date.now()
        },

      },
    });
  res.redirect(entry.redirectURL);
})



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server up and running ${PORT}`);
})