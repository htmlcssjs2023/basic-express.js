const express = require('express');
const app = express();
const PORT = 3000;

// body-parser is used to receive form and json data.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req,res)=>{
    res.sendFile(__dirname + "/views/index.html");
});

app.get("/register", (req,res)=>{
    res.statusCode = 201;
    res.sendFile(__dirname + "/views/register.html");
});

app.post('/register',(req,res)=>{
     const {firstName, lastName, userEmail} = req.body;
     res.send(`Full Name : ${firstName}<br> Last Name : ${lastName} <br> Email : ${userEmail}`);
})





app.listen(PORT, ()=>{
    console.log(`Server is running at : http://localhost:${PORT}`)
})