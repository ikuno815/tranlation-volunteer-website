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
        <p>Hi! {user && user.email}</p>
        <button onClick={() => navigate('/mypage')}>My Page</button>
        <button onClick={handleLogout}>Logout</button>
    </div>
  )
}