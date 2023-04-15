import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const { createUser } = UserAuth();
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

      const fetchedUserInfo = await axios.get(`/api/user/${email}`);
      console.log('😊',fetchedUserInfo)
      if (fetchedUserInfo.data.length === 0) {
        await createUser(email, password);
        await axios.post('/api/user', {
          email: email,
          username: username
        })
      } else {
        navigate('/');
      }
  };

  return (
    <div>
        <form onSubmit={handleSignUp}>
        <h1>Welcome New User!</h1>
        <label htmlFor="signup-username">Username</label>
        <input 
          id="signup-username"
          type="text"
          placeholder='someone'
          value={username}
          onChange={(e) => {
            setUsername(e.target.value)
          }}
        />
            
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
