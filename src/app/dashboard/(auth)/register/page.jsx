"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const Register = () => {
  
  const router = useRouter()
  const [err, setErr] = useState(false); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = e.target[0].value
    const email = e.target[1].value
    const password = e.target[2].value

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST", 
        headers: {
          "Content-Type" : "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        })
      })

      res.status === 201 && router.push("/dashboard/login?success=Account has been created");
    } catch (err) {
      setErr(true)
    }
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit} >
        <input type="text" placeholder='username'/>
        <input type="email" placeholder='email'/>
        <input type="password" placeholder='password'/>
        <button>Register</button>
      </form>
      {err && "Something went wrong"}
      <Link href="/dashboard/login">Login with existing account</Link>
    </div>
  )
}

export default Register