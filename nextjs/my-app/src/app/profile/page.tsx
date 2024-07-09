"use client"
import { Button } from "@/components/ui/button"
import axios from "axios"
import { error } from "console"
import Link from "next/link"
import {useRouter} from "next/navigation"
import { useState } from "react"
import toast, {Toaster} from "react-hot-toast"


export default function ProfileFunction(){
    const router = useRouter();
    const [data, setData] = useState('nothing')
    const onLogout = async ()=>{
        try {
            await axios.get('/api/users/logout')
            toast.success("Logout Success")
            router.push('/login')
       } catch (error:any) {
            console.log(error.message)
            toast.error(error.message)
        }
    }

    const GetUserDetails = async ()=>{
        try {
           const res = await axios.get('/api/users/me') 
           console.log(res.data)
           setData(res.data.data._id)
        } catch(error:any) {
            console.log(error.message)
        }
    }
    return (
        <div>
        <h1>My Profile</h1>
        <Button onClick={onLogout}>Log out</Button>

        <br />
        <br />
        <h2 className="text-center">{data==='nothing'? "Nothing": data}</h2>

        <Button onClick={GetUserDetails}>Get Details</Button>
        <Toaster/>
    </div>
    )
}