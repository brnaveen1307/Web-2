const express = require('express')
const adminMiddleware = require("../middleware/admin")
const { Admin } = require("../db")
const router = express.Router();

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

router.post("/courses", adminMiddleware, async function(req, res){
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;
    //zod

    const newCourse = await Course.create({
        title,
        description,
        imageLink,
        price
    })

    res.json({
        message: "Course created succesfully", courseId: newCourse._id
    })
})

router.get("/courses", adminMiddleware, async function(req, res){
    const response = await Course.find({})
    res.json({
         courses: response
    })
})

module.exports = router;