import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  const [data,setData] = useState([])
    useEffect(()=>{
      axios.get("http://localhost:3000/student").then((item)=>{
        setData(item.data)
      })
    },[])

    function deleteFunc(id){
      const confirm = window.confirm("Would tou like to Delete?")
       if(confirm){ axios.delete(`http://localhost:3000/student/${id}`).then(Response=>{
          // console.log(Response.data)
          window.location.reload();
        }).catch(err=>{
          console.log(err)
        })
    }}
  return (
   <>
   <div className="outer">
 <div className='mainBox'>
  
    <div className='heading'>
      <h1>LIST OF STUDENTS</h1>
    </div>
    <div className='createConnect'>
    <Link className='createbg' to='/create'>Add New Student</Link>
    </div>
    <div className='tableBox'>
    <table border={1}>
    <thead>
      <tr>
       <th>ID</th>
       <th>Name</th>
       <th>Email</th>
       <th>phone</th>
       <th>Action</th>
      </tr>
    </thead>
    <tbody>
       {
        data.map((item,i)=>{
          return <tr key={i} >
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
            <td>
              <Link className='LinkHome' to={`/read/${item.id}`}>Read</Link>
             <Link className='edit' to='/update'>Edit</Link>
              <button className='delete' onClick={e =>deleteFunc(item.id)}>Delete</button>
            </td>
          </tr>
        })
       }
    </tbody>
  </table>
  </div>
 </div>
 </div>
   </>
  )
}

export default Home