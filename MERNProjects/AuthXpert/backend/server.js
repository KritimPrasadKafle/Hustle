const express = require('express');
const dotenv = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const AuthRouter = require('./routes/Auth/auth.js');
const UserRouter = require('./routes/user.js')

//Load environment variables
// dotenv.config();

const app = express();

//Middleware
app.use(cors());
app.use(express.json()); //For parsing json bodies
app.use(morgan('dev')); //For logging

//Database connection 
mongoose.connect('mongodb+srv://admin:1234567890@cluster0.ptksj.mongodb.net/AuthXpert',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
).then(() => console.log('Database connected')
).catch((err) => console.error('DB connection error:', err)
);


//Basic route

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.use('/api/auth', AuthRouter);
app.use('/api/user', UserRouter);




//Start server 
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);

})
