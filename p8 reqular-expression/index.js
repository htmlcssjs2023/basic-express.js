const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', (req,res)=>{
    res.send('Home Page');
});

// app.get('/product/:id',(req,res)=>{
//     const id = req.params.id;
//     res.send(`Product ID : ${id}`);
// })

// Regular Expression
app.get('/product/:id([0-9A-Za-z]+)',(req,res)=>{
    const id = req.params.id;
    res.send(`Product ID : ${id}`);
})

app.get('/title/:title([a-zA-Z])',(req,res)=>{
    const title = req.params.title;
    res.send(`Product ID : ${title}`);
})

// Wild card
app.use("*", (req, res)=>{
    res.status(404).send({
        message: "404 Error File not found"
    })
})


app.listen(PORT, ()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
})