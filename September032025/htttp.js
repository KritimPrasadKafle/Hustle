const express = require('express');
const cors = require("cors");

const app = express();
app.use(cors());


app.use(function(req, res, next){
    req.name = "kritim"
    console.log("request received");
    next();
    
} )

app.get('/multiply', async function(req, res){
    console.log(req.name);
    
    const inputA = req.query.a;
    const inputB = req.query.b;

    const multiply = inputA * inputB;

    res.json({
        multiply
    })
})



app.get('/add', async function(req, res){
    const inputA = req.query.a;
    const inputB = req.query.b;

    const sum = inputA + inputB;

    res.json({
        sum
    })
})



app.get('/divide', async function(req, res){
    const inputA = req.query.a;
    const inputB = req.query.b;

    const divide = inputA * inputB;

    res.json({
        divide
    })
})


app.get('/subtract', async function(req, res){
    const inputA = req.query.a;
    const inputB = req.query.b;

    const subtract = inputA * inputB;

    res.json({
        subtract
    })
})



function logRequest(req, res, next){
    console.log('Request made to: ${req.url}');
    next();
}

app.get('/special', logRequest, (req, res) => {
    res.send('This route uses route-specific middleware!');
})

app.listen(3000, () => {
    console.log('Server is up and running');
    
})