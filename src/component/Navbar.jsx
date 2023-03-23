import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
 export function Navbar() {
  const navigate=useNavigate();
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <div class="container-fluid nav-container">
    <a class="navbar-brand" href="#">React-Crud-App</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span className='btn btn-white toggelname' onClick={() => {navigate("/create-employee")}} >Create Employee </span>
    </button>
    <div class="collapse navbar-collapse" id="navbarColor01">
      <ul class="navbar-nav me-auto">
       
      </ul>
        <button className='btn btn-outline-secondary my-2 my-sm-0' onClick={() => {navigate("/create-employee")}}> Create Employee</button>
    </div>
  </div>
</nav>
    </>
  )
}


