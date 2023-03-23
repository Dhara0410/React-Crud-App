import {Navbar} from "./component/Navbar";
import {Routes,Route} from 'react-router-dom'
import React  from "react";
import {Employeeform} from './component/Employeeform'
import {Employeelist} from './component/Employeelist'
import './App.css'
 export function App() {
  return (
    <>
    <Navbar/>
   <div className="container">
    <Routes>
    <Route path="/" element={<Employeelist/>}/>
    <Route path="/create-employee" element={<Employeeform/>}/>
    <Route path="/edit-employee/:id" element={<Employeeform/>}/>
    </Routes>
   </div>
    </>
  );
}


