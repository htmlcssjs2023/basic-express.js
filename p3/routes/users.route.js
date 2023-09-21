const express = require('express');
const { route } = require('../app');
const router = express.Router();

router.get('/register', (req,res)=>{
    res.send("Sending string as response");
    res.end();
})

// response as JSON format
router.get('/login', (req,res)=>{
    res.status(200).json({
        "username": "Md Abdul Halim",
        "statusCode": 200,
    });
})

;




module.exports = router;