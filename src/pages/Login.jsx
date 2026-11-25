import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [name,setName]=useState("")
  const [password,setPassword]=useState("")
    const navigate=useNavigate()

    function handleSubmit(e){
        e.preventDefault()
        navigate("/dashboard", {
      state: {
        username: "Sanjay",
        role: "Frontend Developer"
      }
    });
    }
  return (
    <div>
        <h1>Login Page</h1><br />
        <form action="" onSubmit={handleSubmit}>

        <label htmlFor='username'>Username : </label>
        <input type="text"
        id="username"
        placeholder='Enter your username' 
        />

        <br />
        <label htmlFor="password"> Password : </label>
        <input type="password" 
        id="password"
        placeholder='Enter your password'
         />

        <br />
        <button>Submit</button>
        </form>

    </div>
  )
}

export default Login