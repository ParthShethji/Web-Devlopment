"use client"


import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRouter } from "next/navigation"
import  {useState} from 'react'
import axios from "axios"
import toast, { Toaster } from "react-hot-toast"

export default function LoginForm() {
  const router = useRouter();
  const [user, setUser] = useState({
    userName: "",
    email: "",
    password: "",
  })

  const onSignup = async () =>{
    try {
      const response = await axios.post("/api/users/signup", user);
      toast.success("Signup Success")
      console.log("signup Success", response.data)
      router.push("/login")
    } catch (error:any) {
      console.log("signup Failed", error.message)
      toast.error("Signup failed")
    }
  }
  return (
    <Card className="mx-auto max-w-sm mt-28">
      <CardHeader>
        <CardTitle className="text-xl">Sign Up</CardTitle>
        <CardDescription>
          Enter your information to create an account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-4">
            <div className="">
              <Label htmlFor="first-name">First name</Label>
              <Input id="first-name" placeholder="Max" required value={user.userName} onChange={(e)=>setUser({...user, userName: e.target.value})}/>
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
              value={user.email} 
              onChange={(e)=>setUser({...user, email: e.target.value})}
              />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" 
            type="password" 
            value={user.password} 
            onChange={(e)=> setUser({...user, password:e.target.value})}/>
          </div>
          <Button type="submit" className="w-full" onClick={onSignup}>
            Create an account
          </Button>
          <Button variant="outline" className="w-full">
            Sign up with GitHub
          </Button>
        </div>
        <div className="mt-4 text-center text-sm" >
          Already have an account?{" "}
          <Link href="#" className="underline">
            Sign in
          </Link>
        </div>
      </CardContent>
      <Toaster/>
    </Card>
  )
}
