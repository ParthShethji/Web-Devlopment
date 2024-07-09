
import {connect} from '@/dbConfig/dbConfig'
import { NextRequest, NextResponse } from 'next/server';
import User from '@/models/userModel';
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'

connect();


export async function POST(request: NextRequest){
    try {
        const reqBody = await request.json()
        const {email, password} = reqBody;
        const user = await User.findOne({email})
        if(!user){
            return NextResponse.json('User not found',{status: 404})
        }
        console.log("user exists")

        const validPassword = await bcryptjs.compare(password, user.password);
        if(!validPassword){
            return NextResponse.json('Invalid password', {status: 401})
        }

        // create token data
        const tokenData = {
            id: user._id,
            username: user.username,
            email: user.email,
        }

        const token = await jwt.sign(tokenData, process.env.Token_Secret!, {expiresIn: "1d"})
        const reponse = NextResponse.json({
            message: "login successfull",
            success: true,
        })
        reponse.cookies.set("token", token, {
            httpOnly: true,
        })
        return reponse;
    } catch (error:any) {
        return NextResponse.json({
            error: error.message,
            status: 500,
        })
    }

}