import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {

  const history = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function submit(e) {
    e.preventDefault();

    try {
      await axios.post("http://localhost:3000/signup",{
        email, password
      })
      .then(res => {
        if(res.data === "exist"){
          alert("user already exist")
        }
        else {
          history("/home")
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
    <div className='signup'>
      <h1>Sign Up</h1>

      <form action="POST">
        <input type="email" onChange={(e) => {setEmail(e.target.value)}} placeholder='Your Email' />
        <input type="password" onChange={(e) => {setPassword(e.target.value)}} placeholder='Your Password' />
        <button type='submit' value='submit' onClick={submit} >Submit</button>
      </form>

      <br />
      <p>OR</p>
      <br />

      <Link to='/login'>Sign In</Link>

    </div>
  )
}

export default Signup