import { connect } from "@/dbConfig/dbConfig";
import { NextResponse, NextRequest } from "next/server";
import User from "@/models/userModel";


connect()

export async function Post(request: NextRequest) {
    try {
        const reqBody  =  await request.json()
        const {token} = reqBody
        console.log(token)
    } catch (error:any) {
        console.log(error)
    }
}