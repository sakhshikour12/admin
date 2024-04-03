import React from 'react'
import { useNavigate } from 'react-router-dom';
import './topbar.css'

export default function Topbar() {
  const navigate = useNavigate();
  const handleLogOut = (e) =>{
    localStorage.removeItem('loggedIn');
    navigate('/login');
  }
  return (
    <div className='topbar'>
        <div className="topbarWrapper">
            <div className="topLeft">
                <span className="logo">AdminDashboard</span>
            </div>
            <div className="topRight">
                <div className="topbarIconContainer">
                    <i className="bell fa-regular fa-bell"></i>
                    <span className='topbarIconBadge'>2</span>
                </div>
                <div className="topbarIconContainer">
                    <i class="fa-solid fa-gear"></i>
                </div>
                <button type='button' className="but" onClick={handleLogOut}>LogOut</button>

            </div>
        </div>
    </div>
  )
}
