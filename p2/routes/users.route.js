const express = require('express');
const router = express.Router();


router.get('/register', (req, res)=>{
    res.send('<h1>This is Register page</h1>');
    res.end();
});

router.get('/login', (req, res)=>{
    res.send('<h1>This is login page</h1>');
    res.end();
});




module.exports = router;