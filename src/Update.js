import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Update = () => {
  const{id}=useParams()
  const navig = useNavigate()
const[getvalue,setGetvalue]=useState({
  name: " ",
  email:" ",
  phone:" "
})

  useEffect(()=>{
        axios.get(`  http://localhost:3000/student/${id}`)
        .then(res=>{
          setGetvalue(res.data)
        }).catch(err=>{console.log(err)}
        )
  },[])

  function UpdateNew(e){
    e.preventDefault()

      axios.put(`  http://localhost:3000/student/${id}`,getvalue).then(res3=>{
    console.log(res3)
    navig("/")
      }).catch(err=>{console.log(err)})
 
  }

  return (
    <>

  <form >
  <label>Name :</label>
  <input type='text' value={getvalue.name} onChange={e=>setGetvalue({...getvalue,name:e.target.value})} /> 
  <br/>
  <br/>
  <label>Email :</label>
  <input type='text' value={getvalue.email} onChange={e=>setGetvalue({...getvalue,email:e.target.value})}  />
  <br/>
  <br/>
  <label>Phone :</label>
  <input type='text' value={getvalue.phone} onChange={e=>setGetvalue({...getvalue,phone:e.target.value})}  />
  <button onClick={(e)=>UpdateNew(e)}>update</button>
</form>
    </>
  )
}

export default Update
