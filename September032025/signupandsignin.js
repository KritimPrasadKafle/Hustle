const express = require('express');

const jwt = require('jsonwebtoken');
const app = express();

let user = [];

app.post('/signup', function(req, res){
    const username = req.body.username;
    const password = req.body.password;

    user.push({username, password});

    res.send({
        message: 'You have signed up'
    })
})

function generatetoken(){
    let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    token = '';
    options.map((value) => {token += options[Math.floor(Math.random() * options.length)]});
    return token;    

}

app.post('/signin', function(req, res) {
    const username = req.body.username;
    const password = req.body.password;

    const user1 = user.find((value) => value.username === username && user.password === user.password);
    if (user){
        const token = generatetoken();
        user.token = token
        res.send({token})
        console.log(users);
        
    }else{
        res.status(403).send({message: "Invalid username or password"});
    }
})

app.get('/me', (req, res) => {
    const auuthorization = req.headers.authorization;
    const user2 = user.find((uu) => uu.token == auuthorization);
    if (user2){
        res.send({
            message: user.username
        })
    }else{
        res.status(401).send({
            message: "Unauthorized"
        })
    }
})

const JWT_SECRET = 'sdfsd'
app.post('/signup1', function(req, res) {
    const username = req.body.username;
    const password = req.body.password;

    const user3 = user.find((u) => u.username == username && u.password == password);

    if (user3){
        const token = jwt.sign({username: user.username}, JWT_SECRET);
        user.token = token;
        res.send({
            token
        })
        console.log(users);
        
    }else{
        res.status(403).send({
            message: "invalid username or password"
        })
    }
})

app.get('/me', (req, res) => {
    const token = req.headers.authorization;
    const userDetails = jwt.verify(token, JWT_SECRET);

    const username = userDetails.username;

    const user4 = user.find((i) => i.username === username);

    if(user4){
        res.send({
            message: user.username
        })
    }else{
        res.status(401).send({
            message: "Unauthorized"
        })
    }

})

function auth(req, res, next) {
    const token = req.headers.authorization;

    if (token) {
        jwt.verify(token, JWT_SECRET, (err, decoded) => {
            if (err) {
                res.status(401).send({
                    message: "Unauthorized"
                })
            } else {
                req.user = decoded;
                next();
            }
        })
    } else {
        res.status(401).send({
            message: "Unauthorized"
        })
    }
}

app.get("/me", auth, (req, res) => {
    const user = req.user;

    res.send({
        username: user.username
    })
})