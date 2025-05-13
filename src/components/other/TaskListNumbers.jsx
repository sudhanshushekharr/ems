import React from 'react'

const TaskListNumbers = ({data}) => {
  return (
    <div className='flex mt-10 justify-between gap-5 screen'>
      <div className='w-[45%] p-10 bg-red-400 rounded-xl'>
        <h2 className='text-white text-4xl font-bold'>{data.taskCounts.newTask}</h2>
        <h3 className='text-white text-lg font-medium'>New Tasks</h3>
      </div>
      <div className='w-[45%] p-10 bg-blue-400 rounded-xl'>
        <h2 className='text-white text-4xl font-bold'>{data.taskCounts.active}</h2>
        <h3 className='text-white text-lg font-medium'>Active Tasks</h3>
      </div>
      <div className='w-[45%] p-10 bg-yellow-400 rounded-xl'>
        <h2 className='text-white text-4xl font-bold'>{data.taskCounts.completed}</h2>
        <h3 className='text-white text-lg font-medium'>Completed Tasks</h3>
      </div>
      <div className='w-[45%] p-10 bg-pink-400 rounded-xl'>
        <h2 className='text-white text-4xl font-bold'>{data.taskCounts.failed}</h2>
        <h3 className='text-white text-lg font-medium'>Failed Tasks</h3>
      </div>
    </div>
  )
}

export default TaskListNumbers
