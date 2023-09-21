const express = require('express');
const app = express();
const port = 3001;

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.get('/', (req,res)=>{
    res.statusCode = 200;
    res.sendFile(__dirname + "/views/index.html");
});

app.get('/circle', (req,res)=>{
    res.sendFile(__dirname + "/views/circle.html");
})
app.get('/triangle', (req,res)=>{
    res.sendFile(__dirname + "/views/triangle.html");
})
app.post('/triangle', (req, res)=>{
    const base = req.body.base;
    const height = req.body.height;
    const areaOfTriangle = 0.5 * (base * height);

    res.send(`<h1> Area of triangle : ${areaOfTriangle} </h1>`);
})

app.post('/circle', (req, res)=>{
    const radius = req.body.radius;
    const circleRadius = Math.PI * radius * radius;
    res.send(`<h1> Circle radius : ${circleRadius.toFixed(3)} </h1>`);
})


app.listen(port,()=>{
    console.log(`Server is running at : http://localhost:${port}`);
})