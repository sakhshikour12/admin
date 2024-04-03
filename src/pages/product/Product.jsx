import React from 'react'
import './product.css'
import { Link } from '@mui/material'
import Charts from '../../components/chart/Charts'
import { productData } from '../../dummyData'

export default function Product() {
  return (
    <div className='product'>
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newproduct">
            <button className="produtAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
            <Charts data={productData} dataKey="Sales" title="Sales Performance"/>
        </div>
        <div className="productTopRight">
            <div className="productInfoTop">
                <img src="https://conaturalintl.com/cdn/shop/files/blueshampoofront.png?v=1693829613&width=600"
                 alt="" className="productInfoImg" />
                 <span className="productName">Blue Shampoo</span>
            </div>
            <div className="productInfoBottom">
                <div className="productInfoItem">
                    <span className="productInfoKey">id: </span>
                    <span className="productInfoValue">123</span>
                </div>
                <div className="productInfoItem">
                    <span className="productInfoKey">sales: </span>
                    <span className="productInfoValue">1223</span>
                </div>
                <div className="productInfoItem">
                    <span className="productInfoKey">active: </span>
                    <span className="productInfoValue">yes</span>
                </div>
                <div className="productInfoItem">
                    <span className="productInfoKey">in stock: </span>
                    <span className="productInfoValue">Yes</span>
                </div>
            </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
            <div className="productFormLeft">
                <label>Product Name</label>
                <input type='text' placeholder='hair shampoo'/>
                <label>In Stock</label>
                <select name='inStock' id='inStock'>
                    <option value='yes'>Yes</option>
                    <option value='no'>No</option>
                </select>
                <label>Active</label>
                <select name='active' id='active'>
                    <option value='yes'>Yes</option>
                    <option value='no'>No</option>
                </select>
            </div>
            <div className="productFormRigght">
                <div className="productUpload">
                    <img src="https://conaturalintl.com/cdn/shop/files/blueshampoofront.png?v=1693829613&width=600" alt="" className="productUploadImg" />
                    <label for='file'>
                        <i class="fa-solid fa-upload"></i>
                    </label>
                    <input type='file' id='file' style={{display:'none'}}/>
                </div>
                <button className="productButton">Update</button>
            </div>
        </form>
      </div>
    </div>
  )
}
