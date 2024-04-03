import React from 'react'
import './transaction.css'
import { Link } from 'react-router-dom'
import {storeData} from '../../Data'
import Product from '../../components/Product'

export default function Transactions() {
    
  return (
    
    <div className='store'>
        <div className="storeTitleCont">
            <h2 className='storeTitle'>
                Online Store
            </h2>
            <Link className='link' to="/cart">
            <i className="storeIcon fa-solid fa-cart-shopping"></i>
            </Link>
        </div>
        <div className='storeImg'> 
            {storeData.map((item, i) => 
                <Product key={i} item={item}/>
            )}
        </div>
    </div>
  )
}
