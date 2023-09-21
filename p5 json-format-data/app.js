const express = require('express');
const app = express();

const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // this is for json format data


app.post("/user", (req,res)=>{
    // const name = req.body.name;
    const id = req.body.id;
    const name = req.body.name;
    
    res.send(`User Id: ${id}  User Name : ${name}`);
    res.end();
})
module.exports = app;