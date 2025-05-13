import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'
const TaskList = ({data}) => {

    const updateTaskStatus = (taskIndex, status) => {
        const employees = JSON.parse(localStorage.getItem('employees'));
        const employee = employees.find(emp => emp.email === data.email);
        if (!employee) return;
    
        // Reset all status flags for this task
        employee.tasks[taskIndex] = {
          ...employee.tasks[taskIndex],
          active: false,
          newTask: false,
          completed: false,
          failed: false,
          [status]: true, // set the selected status to true
        };
    
        // Recalculate taskCounts
        const active = employee.tasks.filter(t => t.active).length;
        const newTask = employee.tasks.filter(t => t.newTask).length;
        const completed = employee.tasks.filter(t => t.completed).length;
        const failed = employee.tasks.filter(t => t.failed).length;
        employee.taskCounts = { active, newTask, completed, failed };
    
        // Save back to localStorage
        localStorage.setItem('employees', JSON.stringify(employees));
    
        // Optionally, force a re-render (if using state/context, update it here)
        window.location.reload(); // simple way, or use state/context for a better UX
      };
  return (
    <div id='taskList' className='h-[50%] overflow-x-auto flex items-center justify-start flex-nowrap gap-5 w-full py-5  mt-10 rounded-xl'>
     {data.tasks.map((task,idx) => {
          if(task.active){
            return <AcceptTask  key={idx} data={task} onStatusChange={status => updateTaskStatus(idx, status)}/>
          }
          else if(task.completed){
            return <CompleteTask key={idx} data={task} onStatusChange={status => updateTaskStatus(idx, status)}/>
          }
          else if(task.failed){
            return <FailedTask key={idx} data={task} onStatusChange={status => updateTaskStatus(idx, status)}/>
          }else if (task.newTask) {
            return <NewTask key={idx} data={task} onStatusChange={status => updateTaskStatus(idx, status)}/>
          }
          return null;
     }
      
     )}
        
    </div>
  )
}

export default TaskList
