const express = require('express');
const app = express();


// app.get('/', (req,res)=>{
//     res.send("I'm Home Page");
// });


// =========== QUERY PARAMETER

// http://localhost:3001/?id=101&name=abdul%20halim
// app.get('/',(req, res)=>{

//     // const id = req.query.id;
//     // const userName = req.query.name;

//     // destructuring
//     const {id, name} =req.query;

//     res.send(`User Id: ${id} <br> User Name: ${name}`);
//     res.end();
// });



//============== ROUTE PARAMETER
// http://localhost:3001/userId/193/userName/Halim

// app.get('/userId/:userId/userName/:userName',(req,res)=>{
//     // const userId = req.params.userId;
//     // const userName = req.params.userName;
    
//     // destructuring
//     const {userId, userName} = req.params;

//     res.send(`User Id : ${userId} <br> User Name: ${userName}`);
// })


// =========== request data using header()
app.get('/', (req, res)=>{
    const id = req.header('id');
    const name = req.header('name');

    res.send(`User Id : ${id} <br> User Name: ${name}`)
})




module.exports = app;