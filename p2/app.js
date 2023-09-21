const express = require('express');
const userRouter = require('./routes/users.route');
const app = express();

// app.use("/api/user/", userRouter);
app.use(userRouter);

app.get('/', (req, res)=>{
    res.send('<h1>This is home page</h1>');
    res.end();
});

// Bad Request Middleware
app.use((req,res)=>{
    res.send('<h1> 404 Not Found</h1>');
    res.end();
})

module.exports = app;
