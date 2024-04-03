import React from 'react'
import { useState } from 'react'
// import { json } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    

    const navigate = useNavigate();
    const [input, setInput] = useState({
        uname:"",
        email: "",
        psw:"",
    });

    const handleSubmit = (e) =>{
        e.preventDefault();
        localStorage.setItem("user", JSON.stringify(input));
        navigate("/login")
    }
  return (
    <div className='main'>
        <form  onSubmit={handleSubmit} method="post" className='form'>
            <div className="imgcontainer">
                <h1>CREATE AN ACCOUNT</h1>
            </div>

            <div className="container">
                <label htmlFor="uname"><b>Username</b></label>
                <input autoComplete='off' id="uname" type="text" name="uname" value={input.uname}
                onChange={(e) => setInput({...input, [e.target.name]: e.target.value})} required/>

                <label htmlFor="email"><b>Email</b></label>
                <input autoComplete='off' id='email' type="text" name="email" value={input.email}
                onChange={(e) => setInput({...input, [e.target.name]: e.target.value})} required/>

                <label htmlFor="psw"><b>Password</b></label>
                <input autoComplete='off' id='psw' type="password" name="psw" value={input.psw}
                onChange={(e) => setInput({...input, [e.target.name]: e.target.value})} required/>

                <button type="submit">Register</button>
                {/* <label>
                <input type="checkbox" checked="checked" name="remember"/> Remember me
                </label> */}
            </div>

            <div className="container" style={{backgroundColor: "#f1f1f1"}}>
                
                <span className="psw">Already have an account? <Link to="/login"><u>Login Here</u></Link></span>
            </div>
        </form>

    </div>
  )
}

export default Register
