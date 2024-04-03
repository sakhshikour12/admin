import React, { useState } from 'react'
import './userList.css'
import { DataGrid } from '@mui/x-data-grid';
import {userRows} from "../../dummyData";
import { Link } from 'react-router-dom';

export default function UserList() {
  const [data, setData] = useState(userRows);

  const handleDlt = (id) =>{
    setData(data.filter((item) => item.id !== id))
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'user', headerName: 'User', width: 130, renderCell: (params)=>{
      return(
        <div className='userListUser'>
          <img className="userListImg" src={params.row.profile} alt=''/>
          {params.row.username}
        </div>
      )
    } },
    { field: 'email', headerName: 'Email', width: 150 },
    {
      field: 'status',
      headerName: 'Status',
      width: 90,
    },
    {
      field: 'transaction',
      headerName: 'Transaction',
      width: 90,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell : (params) =>{
        return(
          <>
            <Link to={"/user/"+params.row.id}>
              <button className="userListEdit">Edit</button>
            </Link>
            
            <i onClick={() =>handleDlt(params.row.id)} className="userListDlt fa-solid fa-trash-can"></i>
          </>
        )
      }
    },
    
  ];
  
  return (
    <div className='userList' >
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
