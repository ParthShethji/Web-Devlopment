import {connect} from "@/dbConfig/dbConfig"
import User from "@/models/userModel"
import { NextRequest, NextResponse } from "next/server"
import bcryptjs from "bcryptjs"

connect()

export async function POST(request: NextRequest){
    try {
        const reqData = await request.json()
        const {userName, email, password} = reqData

        //check if user already exists
        const user = await User.findOne({email})

        if(user){
            return NextResponse.json({message: "User already exists"}, {status: 400})
        }

        // hash the password
        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password, salt)

        // create a new user
        const newUser = new User({
            userName,
            email,
            password: hashedPassword
        })

        const savedUser = newUser.save()
        console.log(savedUser)

        return NextResponse.json({
            message: "User created successfully",
            success: true,
            savedUser
        })
        
    } catch (error) {
        
    }
}