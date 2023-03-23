import React from 'react'
import { useNavigate } from 'react-router-dom'
import { remove, getlistofemployee } from '../services/localstorage'
export function Employeeitem({employee,setemployees}) {
    const navigate= useNavigate()
    const { id,name,email,address,phone }=employee
   const  deleteEmp = ()=>{
    console.log(id)
    remove(id)
    setemployees(getlistofemployee())
   }
  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>{address}</td>
      <td>{phone}</td>
      <td>
        <div className='d-flex gap-3'>
            <span role='button' className='badge bg-success' onClick={()=>{
              navigate(`/edit-employee/:${id}`)
              ;
          }}> 
                Edit
            </span>
            <span  role='button' className='badge bg-danger' onClick={()=>{deleteEmp()}}>
                Delete
            </span>
        </div>
      </td>
    </tr>
  )
}


