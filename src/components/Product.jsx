// import { useContext } from 'react'
import './product.css'
// import { StoreContext } from '../pages/transaction/Transactions'
// import {addToBasket} from './context/StoreContext'


const Product = ({item}) => {


  const handleAdd = () =>{
    
  }
  return (
    <div className="product">
        <div className="productImgCont">
            <img className="productImg" src={item.img} alt=''/>
            <p className='productTitle'>Dress Type: {item.name}</p>
            <p className='productPrice'>Price: {item.price}</p>
            <button onClick={handleAdd()} className='productBtn btn btn-primary'>Add to Cart</button>
        </div>
      

    </div>
  )
}

export default Product
