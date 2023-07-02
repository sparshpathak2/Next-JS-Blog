"use client"
import React from 'react'
import { signIn } from 'next-auth/react';

const Login = () => {

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target[0].value
    const password = e.target[1].value

    signIn("credentials", { email, password });
  }



  return (
    <div>
      <form onSubmit={handleSubmit} >
        <input type="email" placeholder='email'/>
        <input type="password" placeholder='password'/>
        <button>Login</button>
      </form>
      <button onClick={() => signIn("google")}>Login with Google</button>
    </div>
  )
}

export default Login;
