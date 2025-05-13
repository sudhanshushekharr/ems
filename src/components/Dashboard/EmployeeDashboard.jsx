import React, { useState, useEffect } from 'react'
import Header from '../other/Header'
import TaskListNumbers from '../other/TaskListNumbers'
import TaskList from '../TaskList/TaskList'
const EmployeeDashboard = ({data, changeUser}) => {
    console.log(data);

    const [employee, setEmployee] = useState(data);

  useEffect(() => {
    // Always get the latest employees from localStorage
    const employees = JSON.parse(localStorage.getItem('employees'));
    // Find the employee by email (or another unique field)
    const updatedEmployee = employees.find(emp => emp.email === data.email);
    setEmployee(updatedEmployee);
  }, [data.email]);
    
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
      <Header data={employee} changeUser={changeUser}/>
      <TaskListNumbers data={employee}/>   
    <TaskList data={employee}/>
    </div>
  )
}

export default EmployeeDashboard
