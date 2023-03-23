import React, { useEffect, useState } from 'react'
import { getlistofemployee } from '../services/localstorage'
import { Employeeitem } from './Employeeitem'

 export function Employeelist() {
    const [employees,setemployees]=useState([])
   
    useEffect(() => {
        setemployees(getlistofemployee())
    },[])
  return (
    <div>
      <h1 className='text-center my-5'>Manage Employeelist</h1>
      {
        employees.length>0?(<div className=' card bg-secondary p-3'>
       <div className='table-responsive'>
       <table className='table table-hover '>
            <thead>
                <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Adress</th>
                <th>Phone</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    employees.map((employee)=>{ console.log(employee) 
                        return <Employeeitem employee={employee} setemployees={setemployees} key={employee.id}/>})
                }  
            </tbody>
        </table>
       </div>
      </div>):

        (<h3 className='text-center'>No Employee</h3>)

      }
      
    </div>
  )
}


