import nodemailer from 'nodemailer'
import User from '@/models/userModel'
import bcrypt from 'bcryptjs'



export const sendEmail = async ({ email, emailType, userId }: any) => {
    try {
        const hashedToken = bcrypt.hash(userId.toString(), 10)
        if(emailType === 'VERIFY'){
            await User.findByIdAndUpdate(userId, {
                verifyToken: hashedToken,
                verifyTokenExpire: Date.now() + 3600000
            })
        }

        else if(emailType === 'RESET'){
            await User.findByIdAndUpdate(userId, {
                forgotPasswordToken: hashedToken,
                forgotPasswordExpire: Date.now() + 3600000
            })
        }
        
        var transport = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
              user: "e0f3903c5c4800",
              pass: "533c5892bdb04a"
            }
          })

        const mailOptions = {
            from: 'parthrudy@gmail.com',
            to: email,
            subject: emailType === 'VERIFY'? "Verify your Email": "Reset Your Password",
            html: `<h1>emailType === 'VERIFY'? "Verify your Email": "Reset Your Password"</h1><p>click on the link</p>`, 
        };

        const mailResponse = await transport.sendMail(mailOptions);
        return mailResponse
        
    } catch (error: any) {
        console.log(error)
    }
}