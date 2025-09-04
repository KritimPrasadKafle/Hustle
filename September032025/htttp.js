const express = require('express');

const app = express();

app.get('/multiply', async function(req, res){
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


app.listen(3000, () => {
    console.log('Server is up and running');
    
})