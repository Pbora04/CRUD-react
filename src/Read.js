import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const Read = () => {
const[inputvalue,setInputvalue]=useState([])
const {id}=useParams()

  useEffect(()=>{
    axios.get(`http://localhost:3000/student/${id}`).then(res=>{
      setInputvalue(res.data)
    })
  },[])



  return (
   <>
    <div className='container'>
    <h1> Showing Information </h1>
    <div className='body'>
     <div className='bodyparts'>  <span><b>Name : </b></span> {inputvalue.name}</div>
      <div className='bodyparts'> <span><b>Email : </b></span> {inputvalue.email}</div>
      <div className='bodyparts'> <span><b>Phone : </b></span> {inputvalue.phone}</div>
    </div>
     <Link className='editRead' to='/update/${id}'>Edit</Link>
     <Link className='backRead' to='/'>Back</Link>
    </div>
   </>
  )
}

export default Read;