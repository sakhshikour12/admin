import React from 'react'
import './user.css'
import { Link } from 'react-router-dom'

export default function User() {
  return (
    <div className='user'>
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser"> 
            <button className="userAddButton">Create</button>
        </Link>
        
      </div>
      <div className="userContainer">
        <div className="userShow">
            <div className="userShowTop">
                <img src="https://static.vecteezy.com/system/resources/previews/005/005/788/original/user-icon-in-trendy-flat-style-isolated-on-grey-background-user-symbol-for-your-web-site-design-logo-app-ui-illustration-eps10-free-vector.jpg"
                 alt="" className="userShowImg" />
                <div className="userShowTopTitle">
                    <span className="userShowUsername">Herry</span>
                    <span className="userShowUserTitle">Software Engineer</span>
                </div>
            </div>
            <div className="userShowBottom">
                <span className="userShowTitle">Account Details</span>
                <div className="userShowInfo">
                    <i className="userShowIcon fa-regular fa-user"></i>
                    <span className="userShowInfoTitle">Herry</span>
                </div>
                <div className="userShowInfo">
                    <i className="userShowIcon fa-regular fa-calendar-days"></i>
                    <span className="userShowInfoTitle">12.04.2000</span>
                </div>
                <span className="userShowTitle">Contact Details</span>
                <div className="userShowInfo">
                    <i className="userShowIcon fa-solid fa-phone"></i>
                    <span className="userShowInfoTitle">+92 30524907</span>
                </div>
                <div className="userShowInfo">
                    <i class="userShowIcon fa-regular fa-envelope"></i>
                    <span className="userShowInfoTitle">herry45@gmail.com</span>
                </div>
            
                
            </div>
        </div>
        <div className="userUpdate">
            <span className="userUpdateTitle">Edit</span>
            <form className="userUpdateForm">
                <div className="userUpdateLeft">
                    <div className="userUpdateItem">
                        <label>Username: </label>
                        <input type="text" placeholder="herry45" className="userUpdateInput" />
                    </div>
                    <div className="userUpdateItem">
                        <label>Phone: </label>
                        <input type="text" placeholder="+92 30524907" className="userUpdateInput" />
                    </div>
                    <div className="userUpdateItem">
                        <label>Email: </label>
                        <input type="text" placeholder="herry45@gmail.com" className="userUpdateInput" />
                    </div>
                    <div className="userUpdateItem">
                        <label>Date of Birth: </label>
                        <input type="text" placeholder="12.04.2000" className="userUpdateInput" />
                    </div>
                    
                </div>
                <div className="userUpdateRight">
                    <div className="userUpdateUpload">
                        <img src="https://static.vecteezy.com/system/resources/previews/005/005/788/original/user-icon-in-trendy-flat-style-isolated-on-grey-background-user-symbol-for-your-web-site-design-logo-app-ui-illustration-eps10-free-vector.jpg"
                         alt="" className="userUpdateImg" />
                         <label htmlFor='file'><i className="userUpdateIcon fa-solid fa-file-arrow-up"></i></label>
                         <input type='file' id='file' style={{display:"none"}}/>
                    </div>
                    <button className="userUpdateButton">Update</button>
                </div>
            </form>
        </div>
      </div>
    </div>
  )
}
