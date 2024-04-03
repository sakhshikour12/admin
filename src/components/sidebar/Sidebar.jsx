import { Link } from 'react-router-dom'
import './sidebar.css'
import React from 'react'

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
            <h3 className="sidebarTitle">Dashboard</h3>
            <ul className="sidebarList">
                <Link to="/" className='link'>
                    <li className="sidebarListItem">
                        <i className="sidebarIcon fa-solid fa-house"></i>
                        Home
                    </li>
                </Link>
                <br/>
                <li className="sidebarListItem">
                    <i className="sidebarIcon fa-solid fa-chart-line"></i>
                    Analytics
                </li><br/>
                <li className="sidebarListItem">
                    <i className="sidebarIcon fa-solid fa-arrow-trend-up"></i>
                    Sales
                </li>
            </ul>
        </div>
        <div className="sidebarMenu">
            <h3 className="sidebarTitle">Quick Menu</h3>
            <ul className="sidebarList">
                <Link className='link' to="/users">
                    <li className="sidebarListItem">
                        <i className="sidebarIcon fa-solid fa-house"></i>
                        User
                    </li>
                </Link><br/>
                <Link className='link' to="/products">
                    <li className="sidebarListItem">
                        <i className="sidebarIcon fa-solid fa-chart-line"></i>
                        Products
                    </li>
                </Link><br/>
                <Link className='link' to="/transaction">
                <li className="sidebarListItem">
                    <i className="sidebarIcon fa-solid fa-arrow-trend-up"></i>
                    Transaction
                </li>
                </Link><br/>
                <Link className='link' to="/report">
                    <li className="sidebarListItem">
                        <i className="sidebarIcon fa-solid fa-arrow-trend-up"></i>
                        Reports
                    </li>
                </Link>
                
            </ul>
        </div>
        <div className="sidebarMenu">
            <h3 className="sidebarTitle">Notifications</h3>
            <ul className="sidebarList">
                <li className="sidebarListItem">
                    <i className="sidebarIcon fa-solid fa-house"></i>
                    Mail
                </li><br/>
                <li className="sidebarListItem">
                    <i className="sidebarIcon fa-solid fa-chart-line"></i>
                    Feedback
                </li><br/>
                <li className="sidebarListItem">
                    <i className="sidebarIcon fa-solid fa-arrow-trend-up"></i>
                    Messages
                </li>
            </ul>
        </div>
        <div className="sidebarMenu">
            <h3 className="sidebarTitle">Staff</h3>
            <ul className="sidebarList">
                <li className="sidebarListItem">
                    <i className="sidebarIcon fa-solid fa-house"></i>
                    Manage
                </li><br/>
                <li className="sidebarListItem">
                    <i className="sidebarIcon fa-solid fa-chart-line"></i>
                    Analytics
                </li><br/>
                <li className="sidebarListItem">
                    <i className="sidebarIcon fa-solid fa-arrow-trend-up"></i>
                    Reports
                </li>
            </ul>
        </div>
      </div>
    </div>
  )
}
