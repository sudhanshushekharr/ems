import React, { useState } from 'react'


const Login = ({handleLogin}) => {
 
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

    const submitHandler = (e) => {
        e.preventDefault()
        handleLogin(email, password)
        console.log(e.target.email.value)
        console.log(e.target.password.value)

        setEmail("")
        setPassword("")
    }
    
  return (
    <div className='flex items-center justify-center h-screen w-screen'> 
      <div className='border-2 border-gray-300 rounded-md p-20'>
        <form onSubmit={(e)=>{
            submitHandler(e);
        }} className='flex flex-col items-center justify-center gap-4 p-4'>
            <input
            value={email}
             onChange={(e)=>{
                setEmail(e.target.value)
             }}
            required className='border-2 border-gray-300 rounded-md p-2' type="email" name="email" placeholder='Enter your Email' />
            <input 
                value={password}
                onChange={(e)=>{
                    setPassword(e.target.value)
                }}
            required className='border-2 border-gray-300 rounded-md p-2' type="password" name="password" placeholder='Enter your Password' />
            <button className='bg-blue-500 text-white p-2 rounded-md' type='submit'>Login</button>
        </form>

      </div>
    </div>
  )
}

export default Login
