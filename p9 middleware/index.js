const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 3000;


const middleWare = (req, res, next) =>{
    res.sendFile(__dirname + "/login.html");
   
}
const dateMiddleware = (req, res, next)=>{
    req.currentTime = new Date(Date.now)
}

app.use(middleWare);


app.get('/about', middleWare, (req,res)=>{
    res.send('about');
})
app.get('/contact', dateMiddleware, (req,res)=>{
    res.send('contact');
})
app.listen(PORT, ()=>{
    console.log(`Server is running at : http://localhost:${PORT}`);
})
