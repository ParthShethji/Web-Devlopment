import { getDataFromToken } from "@/helpers/getData";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import { connect } from "@/dbConfig/dbConfig";


connect();

export async function GET(request: NextRequest){
    try {
        const userID = await getDataFromToken(request)
        const user = await User.findOne({_id: userID}).select("-password")
        return NextResponse.json({
            message: "User Found",
            data: user,
        })
    } catch (error:any) {
        console.log(error.message)
    }
    
}