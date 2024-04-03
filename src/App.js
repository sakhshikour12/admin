import React from 'react'
import './app.css'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
// import Home from './pages/Home'
// import Login from './components/Login'
// import Register from './components/Register'
// import ProtectedRoutes from './services/ProtectedRoutes'
import UserList from './pages/userList/UserList'
import Topbar from './components/topbar/Topbar'
import Sidebar from './components/sidebar/Sidebar'
import Homepage from './pages/homepage/Homepage'
import User from './pages/user/User'
import NewUser from './pages/newUser/NewUser'
import ProductList from './pages/productList/ProductList'
import Product from './pages/product/Product'
// import { EmployeeData } from './EmployeeData'
import Reports from './pages/reports/Reports'
// import Transaction from './pages/transaction/transaction'
import Transactions from './pages/transaction/Transactions'
import Basket from './pages/transaction/Basket'
// import { StoreProvider } fr  om './components/context/StoreContext'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Topbar/>
        <div className='cont'>
            <Sidebar/>
            <Routes>
              {/* <Route exact path='/' element={<ProtectedRoutes/>}> */}
              <Route exact path='/' element={<Homepage/>}/>
              {/* </Route>  */}
              {/* <Route  path='/login' element={<Login/>}/> */}
              {/* <Route  path='/register' element={<Register/>}/> */}
              <Route  path='/users' element={<UserList/>}/>
              <Route  path='/user/:userId' element={<User/>}/>
              <Route  path='/newUser' element={<NewUser/>}/>
              <Route  path='/products' element={<ProductList/>}/>
              <Route  path='/product/:productId' element={<Product/>}/>
              <Route  path='/newProduct' element={<NewUser/>}/>
              <Route  path='/report' element={<Reports/>}/>
              {/* <StoreProvider></StoreProvider> */}
              <Route  path='/transaction' element={<Transactions/>}/>
              <Route  path='/cart' element={<Basket/>}/>
            </Routes>
            {/* <Homepage/> */}
        </div>
        
      </BrowserRouter>
    </>
  )
}

export default App

