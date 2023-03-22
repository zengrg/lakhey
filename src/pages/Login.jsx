import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {

  const history = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function submit(e) {
    console.log("hello")
    e.preventDefault();

    try {
      await axios.post("http://localhost:3000/login",{
        email, password
      })
      .then(res => {
        if(res.data === "exist"){
          history("/home");
        }
        else {
          alert("User doesn't exist")
        }
      })
      .catch(e => {
        alert("wrong details");
        console.log(e)
      })
    }
    catch(e){
      console.log(e);
    }
  }

  return (
    <div className='signin'>
      <h1>Sign In</h1>

      <form action='POST'>
        <input type="email" onChange={(e) => {setEmail(e.target.value)}} placeholder='Your Email' />
        <input type="password" onChange={(e) => {setPassword(e.target.value)}} placeholder='Your Password' />
        <input type='submit' onClick={submit} />
      </form>

      <br />
      <p>ORa</p>
      <br />

      <Link to='/signup'>Sign Up</Link>

    </div>
  )
}

export default Login