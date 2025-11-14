import { z } from 'zod';
import express from 'express';

const app = express();

app.use(express.json())

//Define the schema for profile update
const userProfileSchema = z.object({
    name: z.string().min(1, {message: 'Name cannot be empty'}),
    email: z.string().email({message: 'Invalid email format'}),
    age: z.number().min(18, {message: 'You must be at least 18 years old'}).optional(),
});

type FinalUserSchema = z.infer<typeof userProfileSchema>

app.put("/user", function(req, res){
    const parsedData = userProfileSchema.safeParse(req.body);

    if(!parsedData.success){
        res.status(411).json({});
        return
    }

    const updateBody: FinalUserSchema = parsedData.data;

    //update database here
    res.json({
        message: "User updated"
    });
});