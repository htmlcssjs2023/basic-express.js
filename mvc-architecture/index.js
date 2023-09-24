const express = require("express");
require('dotenv').config();
const PORT = process.env.PORT || 3000;

const productRouter = require('./routes/prodcut.route');
const userRouter = require('./routes/users.route');

const app = express();

app.use(express.urlencoded({extended: false}));
app.use(productRouter);
app.use(userRouter);





app.listen(PORT, ()=>{
    console.log(`Server is running at : http://localhost:${PORT}`);
})