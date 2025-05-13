import React, { useState, useEffect } from 'react'

const CreateTask = () => {

  const [taskTitle, setTaskTitle] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [assignTo, setAssignTo] = useState('')
  const [category, setCategory] = useState('')
  const [taskDescription, setTaskDescription] = useState('')




  const submitHandler=(e)=>{
    e.preventDefault()
    console.log( taskTitle, taskDate, assignTo, category, taskDescription);
 
    // Create the new task object directly
    const task = {
      taskTitle,
      taskDate,
      category,
      taskDescription,
      active: false,
      newTask: true,
      completed: false,
      failed: false
    };

    // Get employees from localStorage
    const employees = JSON.parse(localStorage.getItem('employees'));

    // Find the employee and add the new task
    employees.forEach(element => {
      if (element.firstName === assignTo) {
        element.tasks.push(task);
      
        const active = element.tasks.filter(t => t.active).length;
    const newTask = element.tasks.filter(t => t.newTask).length;
    const completed = element.tasks.filter(t => t.completed).length;
    const failed = element.tasks.filter(t => t.failed).length;
    element.taskCounts = { active, newTask, completed, failed };
      }
    });

    // Save the updated employees array back to localStorage
    localStorage.setItem('employees', JSON.stringify(employees));

    // Clear form fields
    setTaskTitle('')
    setTaskDate('')
    setAssignTo('')
    setCategory('')
    setTaskDescription('')


  }
  return (
    <div>
       <div className='p-5 bg-[#1c1c1c] mt-5 rounded'>
            <form onSubmit={submitHandler} className='flex flex-wrap w-full items-start justify-between'>
              <div className='w-1/2'>
              <div>
              <h3 className='text-sm text-gray-300 mb-0.5'>Task title</h3>
              <input
                 value={taskTitle}
                 onChange={(e)=>setTaskTitle(e.target.value)}
              className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Enter task title' />
              </div>
              <div>
                <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                <input 
                value={taskDate}
                onChange={(e)=>setTaskDate(e.target.value)}
                className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="date" />
                </div>
               <div>
               <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
               <input 
               value={assignTo}
               onChange={(e)=>setAssignTo(e.target.value)}
               className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text"  placeholder='Enter employee name' />
               </div>
               <div>
               <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
               <input  
               value={category}
               onChange={(e)=>setCategory(e.target.value)}
               className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='design, dev, etc' />
               </div>
              </div>
             
                <div className='w-2/5 flex flex-col items-start'>
                <h3 className='text-sm text-gray-300 mb-0.5'>Task description</h3>
                <textarea 
                value={taskDescription}
                onChange={(e)=>setTaskDescription(e.target.value)}
                className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400' name="" id="" placeholder='Enter task description' />
                </div>
               
               
               <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full' type='submit'>Add Task</button>
               
                  
              

            </form>
        </div>
    </div>
  )
}

export default CreateTask
