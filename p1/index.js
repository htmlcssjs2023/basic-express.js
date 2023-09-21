
const express = require("express");
const PORT = 4000;
const app = express();


app.get("/", (req, res)=>{
    res.send('This is get method !!');
});

app.post("/", (req, res)=>{
    res.send("This is post method");
});

app.put("/", (req, res)=>{
    res.send("This is put method")
});

app.patch("/", (req, res)=>{
    res.send("This is patch method");
});

app.delete("/", (req, res)=>{
    res.send("This is delete method");
});

app.listen(PORT, ()=>{
    console.log("Server is running now !");
});