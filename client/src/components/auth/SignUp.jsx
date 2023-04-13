import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/firebase';
import { Link } from 'react-router-dom';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();
    const userCred = await createUserWithEmailAndPassword(auth, email, password);
    console.log(userCred);
  }

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
