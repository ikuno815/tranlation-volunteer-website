import React from 'react';
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';


function Home() {
  const {user, logOut } = UserAuth();
  const navigate = useNavigate();
  const handleLogout = async() => {
    try {
        await logOut();
        navigate('/');
    } catch (err) {
        console.error(err);
    }
  }
  return (
    <div>
        <h1>Home</h1>
        <p>Hi! {user && user.email}</p>
        <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Home