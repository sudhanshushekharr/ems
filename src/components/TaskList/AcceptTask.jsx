import React from 'react'

const AcceptTask = ({data, onStatusChange}) => {
    console.log('AcceptTask received:', data);
    if (!data) return null;
    
  return (
  
<div className='flex-shrink-0 h-full  w-[300px] p-5 bg-red-500 rounded-xl'>

<div className='flex justify-between items-center'>
<h3 className='bg-red-600 px-3 py-1 rounded-md text-white text-sm '>{data.category}</h3>
<h4 className='text-white text-sm'>{data.taskDate}</h4>
</div>
<h2 className='mt-5 text-white text-2xl font-semibold'>{data.taskTitle}</h2>
<p className='mt-2 text-white text-sm'>{data.taskDescription}</p>
<div className='flex justify-between items-center mt-12 gap-x-4'>
<button onClick={()=>onStatusChange('completed')} className='bg-blue-500 text-white text-sm px-4 py-2 rounded-md'>Mark as done</button>
<button onClick={()=>onStatusChange('failed')} className='bg-yellow-500 text-white text-sm px-4 py-2 rounded-md'>Mark as failed</button>
</div>

</div>






 
    
  )
}

export default AcceptTask
