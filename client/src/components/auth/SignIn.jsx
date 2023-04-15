import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext';
import './SignIn.css';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { loginUser } = UserAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
        await loginUser(email, password);
        navigate('/home');
    } catch (err) {
        console.error(err);
    }
    await loginUser(email, password);
  };


  return (
    <div className='formContainer'>
        <form onSubmit={handleLogin}>
        <h1>Welcome Back!</h1>
        <hr />
        <div className='entireForm'>
        <div className='formField'>
        <label htmlFor="signin-email">Email</label>
        <input 
            id="signin-email"
            type="text"
            placeholder='someone@somewhere.com'
            value={email}
            onChange={(e) => {
                setEmail(e.target.value)
            }}/>
        </div>
        <div className='formField'>
        <label htmlFor="signin-password">Password</label>
        <input 
            id="signin-password"
            type="password"
            value={password}
            onChange={(e) => {
                setPassword(e.target.value)
            }}/>
        </div>
        <button type='submit'>Sign In</button>
        
        <div className='message-for-signup'>
            <p>
                New? <Link to='/signup'>Sign Up from here!</Link>
            </p>
        </div>
        </div>
        </form>
    </div>
  )
}

export default SignIn
