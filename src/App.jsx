import React from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { useEffect, useState, useContext } from 'react'
import { AuthContext } from './context/AuthProvider'

const App = () => {
  const [user, setUser] = useState(null)
  const [loggedInUser, setLoggedInUser] = useState(null)
  const authData = useContext(AuthContext)

  useEffect(() => {
    if (authData) {
      const loggedInUser = localStorage.getItem('loggedInUser')
      if (loggedInUser) {
        setUser(JSON.parse(loggedInUser).role)
        setLoggedInUser(JSON.parse(loggedInUser).data)
      }
    }
  }, [authData])

  const handleLogin = (email, password) => {
    if (email === 'admin@me.com' && password === '123') {
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
      setUser('admin')
    } else if (authData) {
      const employee = authData.employees.find(
        employee => employee.email === email && employee.password === password
      )
      if (employee) {
        setUser('employee')
        setLoggedInUser(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee',data:employee }))
      } else {
        alert('invalid credentials')
      }
    }
  }

  return (
    <>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user === 'admin' ? (
        <AdminDashboard changeUser={setUser} />
      ) : (
        <EmployeeDashboard changeUser={setUser} data={loggedInUser} />
      )}
      {/* <EmployeeDashboard /> */}
      {/* <AdminDashboard /> */}
    </>
  )
}

export default App
