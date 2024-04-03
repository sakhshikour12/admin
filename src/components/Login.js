import React, { useState } from 'react'
import Home from '../pages/Home'
import './login.css'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate();
    
    const [input, setInput] = useState({
        email: "",
        psw:"",
    })

    const handleLogin = (e) =>{
        e.preventDefault();
        const loggedUser = JSON.parse(localStorage.getItem("user"));
        if(input.email === loggedUser.email && input.psw === loggedUser.psw){
            localStorage.setItem("loggedIn", true)
            navigate("/");
        }
        else{
            alert("Invalid Email and Password");
        }
    }
  return (
    <div>
        <div className='main'>
            <form onSubmit={handleLogin}  className='form'>
            <div className="imgcontainer">
                <h1>LOGIN</h1>
            </div>

            <div className="container">
                <label htmlFor="email"><b>Email</b></label>
                <input type="text" placeholder="Enter email" name="email" value={input.email}
                    onChange={(e) => setInput({...input, [e.target.name]: e.target.value})} required/>

                <label htmlFor="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" value={input.psw}
                    onChange={(e) => setInput({...input, [e.target.name]: e.target.value})} required/>

                <button type="submit">Login</button>
                {/* <label>
                <input type="checkbox" checked="checked" name="remember"/> Remember me
                </label> */}
            </div>

            <div className="container" style={{backgroundColor: "#f1f1f1"}}>
                <span className="psw">Donot have an account? <Link to="/register"><u>Register Here</u></Link></span>
            </div>
            </form>
        </div>
        

    </div>
  )
}

export default Login
