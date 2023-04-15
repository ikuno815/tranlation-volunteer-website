import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext';

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
    <div>
        <form onSubmit={handleLogin}>
        <h1>Welcome Back!</h1>
        <label htmlFor="signin-email">Email</label>
        <input 
            id="signin-email"
            type="text"
            placeholder='someone@somewhere.com'
            value={email}
            onChange={(e) => {
                setEmail(e.target.value)
            }}/>
        <label htmlFor="signin-password">Password</label>
        <input 
            id="signin-password"
            type="password"
            value={password}
            onChange={(e) => {
                setPassword(e.target.value)
            }}/>
            <button  type='submit'>Sign In</button>
        </form>
        <p>
            New? <Link to='/signup'>Sign Up</Link>
        </p>
    </div>
  )
}

export default SignIn
