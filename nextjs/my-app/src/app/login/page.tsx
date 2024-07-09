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
import toast, { Toaster } from "react-hot-toast"
import { useState } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"

export default function LoginForm() {
  const router = useRouter()
  const [user, setUser] = useState({
    email: "",
    password: "",
  })

  const onLogin = async ()=>{
    try {
      const response = await axios.post("/api/users/login", user);
      toast.success("Login Successful", {
        duration: 3000,
        position: 'top-center',
      })
      setTimeout(() => {
        router.push("/")
      }, 2000);
      console.log("login")
    } catch (error:any) {
      toast.error("Login failed")
      console.log(error)
    }
  }
  return (
    <Card className="mx-auto max-w-sm mt-36">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
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
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
              <Link href="#" className="ml-auto inline-block text-sm underline">
                Forgot your password?
              </Link>
            </div>
            <Input id="password" type="password" required  value={user.password} onChange={(e)=> setUser({...user, password:e.target.value})}/>
          </div>
          <Button type="submit" className="w-full" onClick={onLogin}>
            Login
          </Button>
          <Button variant="outline" className="w-full">
            Login with Google
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link href="#" className="underline">
            Sign up
          </Link>
        </div>
      </CardContent>
<Toaster />
    </Card>
  )
}
