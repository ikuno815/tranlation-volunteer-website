import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { createUser } = UserAuth();
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
        await createUser(email, password);
        navigate('/home');
    } catch (err) {
        console.error(err);
    }
  };

  return (
    <div>
        <form onSubmit={handleSignUp}>
        <h1>Welcome New User!</h1>
        <label htmlFor="signup-email">Email</label>
        <input 
            id="signup-email"
            type="text"
            placeholder='someone@somewhere.com'
            value={email}
            onChange={(e) => {
                setEmail(e.target.value)
            }}/>
        <label htmlFor="signup-password">Password</label>
        <input 
            id="signup-password"
            type="password"
            value={password}
            onChange={(e) => {
                setPassword(e.target.value)
            }}/>
            <button  type='submit'>Sign Up</button>
        </form>
        <p>
            Returning User?<Link to='/'>Sign In</Link>
        </p>
    </div>
  )
}

export default SignUp
