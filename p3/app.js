const express = require('express');
const userRouter = require('./routes/users.route');
const app = express();

// app.use("/api/user/", userRouter);
app.use(userRouter);

app.get('/', (req, res)=>{
    res.status(200).json({
     "name": "Abdul Hali",
     "age": "33"
    });
 });

app.use('/about', (req,res)=>{
    res.statusCode = 202;
    res.sendFile(__dirname + '/views/about.html');
})

app.get("/cookie", (req, res) => {
      res.cookie("name", "Abdul Halim");
      res.cookie("age", "30");
    //   res.clearCookie("name");
    //   res.clearCookie("age");
      res.append("id", "123330000");
      res.end();
  });

// Bad Request Middleware
app.use((req,res)=>{
    res.send('<h1> 404 Not Found</h1>');
    res.end();
})

module.exports = app;
