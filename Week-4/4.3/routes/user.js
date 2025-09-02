const express = require('express')
const userMiddleware = require("../middleware/admin")
const { User, Course } = require("../db")
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

router.get("/courses", async function(req, res){
    const response = await Course.find({});

    res.json({
        courses: response
    })
})

router.post("/courses/:courseId", userMiddleware, function(req, res){
    const courseId = req.params.courseId;

    const username = req.headers.username;
    User.updateOne({
        username: username
    }, {
        "$push": {
             purchasedCourses: courseId
        }
    })

    res.json({
        message: "Purchase complete!" 
    })
})

router.get("/purchasedCourses", userMiddleware, async function(req, res){
    const user = await User.findOne({
        username: req.headers.username
    })

    console.log(user.purchasedCourses);
    const courses = await Course.find({
        _id: {
            "$in": user.purchasedCourses
        }
    })

    res.json({
        courses: courses
    })
})

module.exports = router;