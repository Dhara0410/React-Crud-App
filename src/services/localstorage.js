export const getlistofemployee = () => {
const emp=localStorage.getItem("employee");
// console.log(emp)
if(emp){
   return  JSON.parse(emp)
}
else{
    return []
}
}

export const addemployee = (employee) => {
    console.log("---------add----------")
    const emps =getlistofemployee()
    emps.push({id:new Date().getTime().toString(),...employee})
    localStorage.setItem("employee",JSON.stringify(emps))
}
export const remove=(id)=>{
    const emp=getlistofemployee();
    const employees = emp.filter((emps)=>emps.id!==id)
    localStorage.setItem("employee",JSON.stringify(employees))
}

export const getEmployeeById = (id) => {
    console.log("---------edit----------")
    const employees = getlistofemployee();
    console.log(employees)
    // const empid=Number(id)
    console.log(id)
    const employee = employees.find((emps) => emps.id===id)
    
    console.log(employee)
    return employee;
  };
 export const editemployee=(id,newvalue)=>{
    console.log("---------edit----------")
    console.log(newvalue)
    const emp=getlistofemployee();
    const employees = emp.map((emps)=>{
        if(emps.id!==id){
            return emps
        }
        else{
            return newvalue
        }
    })
 console.log(employees)
    localStorage.setItem("employee",JSON.stringify(employees))


 }