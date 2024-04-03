import React from 'react'
import './home.css'
// import { useNavigate } from 'react-router-dom';
import Topbar from '../components/topbar/Topbar'
import Sidebar from '../components/sidebar/Sidebar'
import Homepage from './homepage/Homepage'
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      {/* <Topbar/>
      <div className='cont'>
          <Sidebar/>
          <Homepage/>
      </div> */}
    </div>
  )
}

export default Home
