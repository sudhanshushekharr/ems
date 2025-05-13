import React from 'react'

const CompleteTask = ({ data }) => {
  if (!data) return null;
  return (
    <div className='flex-shrink-0 h-full w-[300px] p-5 bg-green-500 rounded-xl'>
      <div className='flex justify-between items-center'>
        <h3 className='bg-green-600 px-3 py-1 rounded-md text-white text-sm '>{data.category}</h3>
        <h4 className='text-white text-sm'>{data.taskDate}</h4>
      </div>
      <h2 className='mt-5 text-white text-2xl font-semibold'>{data.taskTitle}</h2>
      <p className='mt-2 text-white text-sm'>{data.taskDescription}</p>
      <div className='flex justify-center items-center mt-12'>
        <span className='bg-yellow text-green-600 px-4 py-2 rounded-md font-bold'>Completed</span>
      </div>
    </div>
  )
}

export default CompleteTask
