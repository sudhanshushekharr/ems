import React, {useState} from 'react'

const Header = ({data, changeUser}) => {

    // const [username, setUsername] = useState('')

    // if(!data){
    //     setUsername('Admin')
    // }
    // else{
    //     setUsername(data.firstName)
    // }
    const handleLogout = () => {
        localStorage.setItem('loggedInUser', '')
        changeUser('')
        //window.location.reload()
    }
  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-white text-2xl font-bold'>
        Hello <br />
        <span className='text-blue-500 text-3xl'>
          {data && data.firstName ? data.firstName : "Admin"}👋
        </span>
      </h1>
      <button onClick={handleLogout} className='bg-red-600 text-lg font-medium text-white p-2 rounded-md'>Logout</button>
    </div>
  )
}

export default Header
