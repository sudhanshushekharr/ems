import React from 'react'
import Header from '../other/Header.jsx'
import CreateTask from '../other/CreateTask.jsx'
import AllTask from '../other/AllTask.jsx'
const AdminDashboard = ({changeUser}) => {
  return (
    <div className='w-full h-screen p-10'>
        <Header changeUser={changeUser} />
       <CreateTask />
       <AllTask />
    </div>
  )
}

export default AdminDashboard
