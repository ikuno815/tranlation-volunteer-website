import React, { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/firebase';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async (e) => {
    e.preventDefault();
    const userCred = await signInWithEmailAndPassword(auth, email, password);
    console.log(userCred);
  }
  return (
    <div>
        <form onSubmit={handleSignIn}>
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
    </div>
  )
}

export default SignIn
