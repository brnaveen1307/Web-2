const { Router } = require("express")
const adminMiddleware = require("../middleware/admin")
const { Admin } = require("../db")
const {JWT_SECRET} = require('../config')
const router = Router()
const jwt = require('jsonwebtoken')

router.post("/signup", async function(req, res){
    const username = req.body.username;
    const password = req.body.password;

   await Admin.create({
        username: username,
        password: password
    })

    res.json({
        message: "Admin created successfully"
    })   
})

router.post("/signin", async function(req, res){
    const username = req.body.username;
    const password = req.body.password;

    const user = await User.find({
        username,
        password
    })

    if(user){
        const token = jwt.sign({
            username
        }, JWT_SECRET)

        res.json({
            token
        })
    }else{
        res.status(411).json({
            message: "Incorrect email and password"
        })
    }
})