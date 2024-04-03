import React, { useState } from 'react'
import './productList.css'
import { DataGrid } from '@mui/x-data-grid';
import {productRows} from "../../dummyData";
import { Link } from 'react-router-dom';

export default function ProductList() {
    const [data, setData] = useState(productRows);

    const handleDlt = (id) =>{
        setData(data.filter((item) => item.id !== id))
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'product', headerName: 'Product', width: 130, renderCell: (params)=>{
          return(
            <div className='productListItem'>
              <img className="productListImg" src={params.row.img} alt=''/>
              {params.row.name}
            </div>
          )
        } },
        { field: 'stock', headerName: 'Stock', width: 150 },
        {
          field: 'status',
          headerName: 'Status',
          width: 90,
        },
        {
          field: 'price',
          headerName: 'Price',
          width: 90,
        },
        {
          field: 'action',
          headerName: 'Action',
          width: 150,
          renderCell : (params) =>{
            return(
              <>
                <Link to={"/product/"+params.row.id}>
                  <button className="productListEdit">Edit</button>
                </Link>
                
                <i onClick={() =>handleDlt(params.row.id)} className="productListDlt fa-solid fa-trash-can"></i>
              </>
            )
          }
        },
        
      ];
  return (
    <div className='productList' >
      <DataGrid
        rows={data}
        columns={columns}
        disableRowSelectionOnClick
        pageSize = {5}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  )
}
