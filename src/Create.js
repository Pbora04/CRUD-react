import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const Create = () => {
  const[input,setInput]=useState({
    name: "",
    email: "",
    phone: ""
  })

  function SubmitFunc(e){
    e.preventDefault()
    axios.post(`http://localhost:3000/student`,input)
    .then((res)=>{
     console.log(res.data)
    }).catch(err =>{
      console.log(err)
    })

  }
  return (
    <>
    <div className='Outercreate'>
<h2>Add New Data</h2>
<form>
<div className='inputs'>
      <label>Name : </label>
      <input type='text' placeholder='enter your name' name='name'
      value={input.name} onChange={e => setInput({...input,name:e.target.value})}/>
      <br></br>
      <br></br>
        <label>Email : </label>
      <input type='text' placeholder='enter your email' name='email'
      value={input.email} onChange={e => setInput({...input,email:e.target.value})}/>
      <br></br>
      <br></br>
        <label>Mobile No : </label>
      <input type='text' placeholder='enter your phone number' name='name'
      value={input.phone} onChange={e => setInput({...input,phone:e.target.value})}/>

</div>
      <br></br>
      <br></br>
      <button onClick={e =>SubmitFunc(e)}>Submit</button>
        <Link className='Link' to={`/`}>Back</Link>
    </form>
</div>
      
        
     
      
    
    
    </>
  )
}

export default Create