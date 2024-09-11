import express from "express"

import mongoose from "mongoose"
import { router } from "./routes/user-routes.js";
import blogRouter from "./routes/blog-routes.js"

const app = express();

app.use(express.json());

app.use("/api/user", router);
app.use("/api/blog", blogRouter)

mongoose.connect(`mongodb+srv://admin:1234567890@cluster0.ptksj.mongodb.net/Blog?retryWrites=true&w=majority&appName=Cluster0`)
  .then(() => {
    app.listen(5000);
  }).then(() => {
    console.log("Connected to database and listening to localhost 5000")


  })
  .catch((err) => {
    console.log(err);
  });



// app.use("/api", (req, res, next) => {
//   res.send("Hello world")
// })

// const port = 5000;
// app.listen(port, () => {
//   console.log(`App is running in the port http://localhost:${port}`);

// });


// admin
// 1234567890


