const express = require('express');
const app = express();
const { connectionMongoDb } = require('./connection.js');
const UserRouter = require('./routes/user.route.js');
const { logReqRes } = require('./middlewares/index.middleware.js');

//Connection
const mongoURI = "mongodb+srv://kritim10kafle:0123456789@cluster0.yjzcg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/Test";

connectionMongoDb(mongoURI).then(() => {
  console.log("MongoDB Connected");
}).catch((err) => {
  console.error("MongoDB connection error:", err);
});

app.use(express.json());
app.use(logReqRes("log.txt"));

//Routes
app.use("/api/user", UserRouter);

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is up and running in ${PORT} `);

});