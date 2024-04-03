import { EmployeeData } from "../../EmployeeData";
import './reports.css'
import TextField from '@mui/material/TextField'

import React, { useEffect, useState } from 'react'

export default function Reports() {
    const [data, setData] = useState([]);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState(0);
    const [id, setId] = useState(0);
    const [isUpdate, setIsUpdate] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    // const [sortingValue, setSortingValue] = useState("lowest");
    let sortValue ="";

    useEffect(() => {
        setData(EmployeeData)
    },[]);

    

    const handleEdit =(id)=>{
        const dt = data.filter(item => item.id === id);
        if(dt !== undefined){
            setIsUpdate(true);
            setId(id);
            setFirstName(dt[0].firstName);
            setLastName(dt[0].lastName);
            setAge(dt[0].age);
        }
    }

    const handleDlt =(id)=>{
        if(id>0){
            if(window.confirm("Are you sure to delete the item?")){
                const dlt = data.filter(item => item.id !== id);
                setData(dlt)
            }
        }
    }

    const handleSave =(e)=>{
        let error = ''

        if(firstName === '' && lastName === '' && age <= 0){
            error += 'you must fiil all the fields'
        }

        if(error === ''){
            e.preventDefault();
            const dt =[...data];
            const newDt ={
                id :EmployeeData.length+1,
                firstName:firstName,
                lastName:lastName,
                age:age
            }
            dt.push(newDt);
            setData(dt);
            handleClear();
        }
        else{
            alert(error)
        }
        

    }

    const handleUpdate =()=>{
        const index = data.map((item)=>{
            return item.id;
        }).indexOf(id);
        const dt = [...data];
        dt[index].firstName = firstName;
        dt[index].lastName = lastName;
        dt[index].age = age;

        setData(dt);
        handleClear();
    }

    const handleClear =(id)=>{
        setId(0);
        setFirstName('');
        setLastName('');
        setAge('');
        setIsUpdate(false);
    }

    const sorting = (e) => {
        sortValue = e.target.value;
        console.log(sortValue);
        sortingData(sortValue)
        // sorting Data(sortValue);
        
        // let newSortdata;
        // let tempSort = data;

        // if(value === 'a-z'){
        //     newSortdata = tempSort.sort((a,b) => a.firstName.localeCompare(b.firstName))
        // }
    }

    // useEffect(() => {
    //     console.log(sortValue)
    // },[sorting]);

    const sortingData =(value)=>{
        let newSortdata;
        let tempSort = [...data];

        if(value === 'a-z'){
            newSortdata = tempSort.sort((a,b) => a.firstName.localeCompare(b.firstName))
        }
        else if(value === 'z-a'){
            newSortdata = tempSort.sort((a,b) => b.firstName.localeCompare(a.firstName))
        } 
        else if(value === 'lowest'){
            const sortingAge = (a,b) =>{
                return a.age - b.age
            }
            newSortdata = tempSort.sort(sortingAge);   
        }
        else if(value === 'highest'){
            const sortingAge = (a,b) =>{
                return b.age - a.age
            }
            newSortdata = tempSort.sort(sortingAge);
        }
        setData(newSortdata)

        return newSortdata;
    }

    const search = (e) =>{ 
        const results = data
        .filter((val) => {
            if(searchTerm === ""){
                return val;     
            }
            else if(val.firstName.toLowerCase().includes(searchTerm.toLowerCase())){
                console.log(val)
                return val;
            }
        });
        setSearchResults(results);
    }

    const reset = ()=>{
        setSearchTerm("");
        setSearchResults([]);
    }


  return (
    <div className="employeeData">
        <div className="headingTitle">
            <h2>Manage Students Data</h2>
            <hr style={{width: "40%"}}/>
        </div>
        
        <div className="search">
            <TextField className="srch" id="standard-basic" label="Search" variant="standard" value={searchTerm} placeholder="Search here..." onChange={(e) => setSearchTerm(e.target.value)}/>&nbsp;
            {/* <input id="searchInput" name="search" className="srch" type="text" value={searchTerm} placeholder="Search here..." onChange={(e) => setSearchTerm(e.target.value)}/>&nbsp;  */}
            <button className="srchButton" onClick={(e) => search(searchTerm)}>Search</button>&nbsp; 
            <button className="srchButton" onClick={() => reset()}>Reset</button>
            {/* <div className="sort">
                <form >
                    <label htmlFor="sort"></label>
                    <select name="sort" id="sort" className="sort-selection--style"  onChange={sorting}>
                        <option value="lowest">Lowest Age</option>
                        <option value="#" disabled></option>
                        <option value="highest">Highest Age</option>
                        <option value="#" disabled></option>
                        <option value="a-z">A-Z</option>
                        <option value="#" disabled></option>
                        <option value="z-a" >Z-A</option>
                    </select>
                </form>
            </div> */}
        </div>
        <div className="AddTitle"> 
            {!isUpdate ? <h3 >Add New Item</h3>: <h3 >Update Item</h3>}
        </div>
        <div className="update">
            
            <div>
                <TextField id="standard-basic" label="FirstName" variant="standard" onChange={(e)=> setFirstName(e.target.value)} value={firstName} required/>
            </div>
            <div>
                <TextField id="standard-basic" label="LastName" variant="standard" onChange={(e)=> setLastName(e.target.value)} value={lastName} required/>
            </div>
            <div>
                <TextField id="standard-basic" label="Age" variant="standard" onChange={(e)=> setAge(e.target.value)} value={age} required/>
            </div>
            <div>
                {
                    !isUpdate ? <button className="btn btn-primary" onClick={(e) => handleSave(e)}>Save</button>
                    : <button className="btn btn-primary" onClick={() => handleUpdate()}>Update</button>
                }
                
                
                &nbsp;<button className="btn btn-danger" onClick={() => handleClear()}>clear</button>
            </div>
        </div>
        <div className="sort">
            <h6 style={{marginRight: "5px", marginBottom: "20px", marginTop:"5px"}}>Filter:</h6>
            <form >
                <label htmlFor="sort"></label>
                <select name="sort" id="sort" className="sortForm sort-selection--style"  onChange={sorting}>
                    <option value="lowest">Lowest Age</option>
                    <option value="#" disabled></option>
                    <option value="highest">Highest Age</option>
                    <option value="#" disabled></option>
                    <option value="a-z">A-Z</option>
                    <option value="#" disabled></option>
                    <option value="z-a" >Z-A</option>
                </select>
            </form>
        </div>
      <table className="report table table-hover">
        <thead>
            <tr>
                <td>Sr.No</td>
                <td>Id</td>
                <td>FirstName</td>
                <td>LastName</td>
                <td>Age</td>
                <td>Actions</td>
            </tr>
        </thead>
        <tbody>
            {
                // data
                // .filter((val) => {
                //     if(searchTerm === ""){
                //         return val;     
                //     }
                //     else if(val.firstName.toLowerCase().includes(searchTerm.toLowerCase())){
                //         return val;
                //     }
                // })
                (searchTerm === "" ? data : searchResults).map((item,index) =>{
                    return(
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{item.id}</td>
                            <td>{item.firstName}</td>
                            <td>{item.lastName}</td>
                            <td>{item.age}</td>
                            <td>
                                <button className="btn btn-primary" onClick={() => handleEdit(item.id)}>Edit</button>&nbsp;&nbsp;
                                <button className="btn btn-danger" onClick={() => handleDlt(item.id )}>Delete</button>
                            </td>
                        </tr>
                    )
                })
            }
        </tbody>
      </table>
    </div>
  )
}
