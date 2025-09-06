const express = require('express');
const mongoose = require('mongoose');
const {UserModel, TodoModel} = require('./db');
const jwt = require('jsonwebtoken');

const JWT_SECRET = 'sdsf'

const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://gasfgfafa:Aa5jxKhylWdFhv4v@cluster0.7kmvq.mongodb.net/todo-app")

function auth(req, res, next) {
    const token = req.headers.authorization;

    const response = jwt.verify(token, JWT_SECRET);

    if (response) {
        req.userId = token.userId;
        next();
    } else {
        res.status(403).json({
            message: "Incorrect creds"
        })
    }
}



app.post('/signup', async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    await UserModel.create({email: email, password: password, name : name});

    res.json({
        message: 'You are signed up'
    })
});

app.post('/signin', async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    
    const response = await UserModel.findOne({email: email, password: password});

    if (response){

        const token = jwt.sign({id: response._id.toString()})
        res.json({
            token
        
        })
    }else{
        res.status(403).json({message: "Incorrectt creds"});
    }

    
    

} )

app.post('/todo', (req, res) => {


} )

app.get('/todos', (req, res) => {

} )

app.listen(3000);
