import { verify } from "crypto";
import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: [true, "please provide userName"],
        unique: true,
    },
    email: {
        type: String,
        required: [true, "please provide Email"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "please provide password"],
    },
    isVerfied: {
        type: Boolean,
        default: false,
    },
    forgotPasswordToken: String,
    forgotPasswordExpire: Date,
    verifyToken: String,
    verifyTokenExpire: Date,
})

const User = mongoose.models.users || mongoose.model("users", userSchema)
export default User;