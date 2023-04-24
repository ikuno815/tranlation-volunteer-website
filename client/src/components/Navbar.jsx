import React from 'react'
import './Navbar.css';
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
    const {user, logOut} = UserAuth();
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
      <div className='sidebar'>
        <h2 className='title'>Translation Volunteer</h2>
        <p className='welcome-message'>Hi! {user && user.email}</p>
        <button className='mypage-button' onClick={() => navigate('/home')}>Home</button>
        <button className='logout-button' onClick={handleLogout}>Logout</button>
      </div>
    </div>
  )
}
