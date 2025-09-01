const express = require('express')
const adminMiddleware = require("../middleware/admin")
const { User } = require("../db")
const router = express.Router();

router.post("/signup", async function(req, res){
    const username = req.body.username;
    const password = req.body.password;

   await User.create({
        username: username,
        password: password
    })

    res.json({
        message: "User created successfully"
    })   
})

module.exports = router;