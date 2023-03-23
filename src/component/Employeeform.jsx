import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { addemployee,getEmployeeById,editemployee } from '../services/localstorage'

export function Employeeform() {
    const navigate=useNavigate()

    const {id}=useParams()
   



    const initial={name:'',email:'',address:'',phone:''}
    const [inputvalue,setinputvalue]=useState(initial);
    const [showalert,setshowalert]=useState(false)





    const resetform = () =>{
        setinputvalue(initial)
    }


    const handelsubmit = (e) => {
        e.preventDefault()
        // navigate('/')
        if(id){
          const cid=id.slice(1)
          editemployee(cid,inputvalue)
        }
        else{
          addemployee(inputvalue)
        }
      //  id?editemployee(id,inputvalue): addemployee(inputvalue)
        setshowalert(true)
        resetform();
        setInterval(() => {
            setshowalert(false)
        }, 2000);
        // console.log(inputvalue)
    }


    const setform =(newvalue) =>{
      setinputvalue(newvalue)
    }
    
    useEffect(()=>{
            if(id){
             const cid =id.slice(1)
                console.log(cid)
                const employee=getEmployeeById(cid)
                console.log(employee) 
                setform(employee)
              }
    },[id])
    

    const handelchange = (e) =>{
        setinputvalue({...inputvalue,[e.target.name]:e.target.value})
    }



  return (
    <div>
      <div className='d-flex justify-content-between my-5'>
        <button className='btn btn-outline-secondary' onClick={() => {navigate('/')}}>Back</button>
        <h1 className='m-auto'>{(id)?'Edit':'Add'} Employee</h1>
      </div>
      <div className='card border-primary p-4    m-5'>
    <form onSubmit={handelsubmit}>
        <div className='form-group'>
        <label className='form-label mt-2' htmlFor='name'>Name</label>
        <input 
        className='form-control' 
        id='name' 
        value={inputvalue.name}
        name='name'
        type='text' 
        placeholder='Enter Name'
        onChange={handelchange}/>
    
        </div> 


        <div className='form-group'>
        <label className='form-label mt-2' htmlFor='email'>Email</label>
        <input 
        className='form-control' 
        id='email' 
        value={inputvalue.email}
        name='email'
        type='email' 
        placeholder='Enter Email'
        onChange={handelchange}/>
        </div>


        <div className='form-group'>
        <label className='form-label mt-2' htmlFor='address'>Address</label>
        <input 
        className='form-control' 
        id='address' 
        value={inputvalue.address}
        name='address'
        type='text' 
        placeholder='Enter Adress'
        onChange={handelchange}/>
        </div>


        <div className='form-group'>
        <label className='form-label mt-2' htmlFor='phone'>Phone</label>
        <input 
        className='form-control' 
        id='phone' 
        value={inputvalue.phone}
        name='phone'
        type='number' 
        placeholder='Enter Name'
        onChange={handelchange}/>
        </div>
        <div className='d-grid gap-2 mt-3'>
            <button type='text' className='btn  btn-outline-primary' > Add employee</button>
        </div>
    </form>
      </div>

    {
        showalert && (
<div className='px-5' >
        <div className='alert alert-success text-info' role="alert">
        Well Done!!! New Employee added Successfully
        </div>
        </div>
        )
    }
      

      
    </div>
  )
}

