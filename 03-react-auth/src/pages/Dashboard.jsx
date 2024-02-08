import { useState, useEffect } from 'react'
import { getMeUserServices } from '@/services/useServices'

function Dashboard () {
  const [userData, setUserData] = useState({})
  const token = localStorage.getItem('token')

  useEffect(() => {
    const getMeUser = async () => {
      const response = await getMeUserServices(token)
      if (response.status === 200) {
        setUserData(response.data)
      }
    }
    getMeUser()
  }, [token])

  return (
    <>
      <h1>Dashboard</h1>
      {userData?.first_name && <p>Nombre: {userData.first_name}</p>}
      {userData?.last_name && <p>Apellido: {userData.last_name}</p>}
      {userData?.gender && <p>Genero: {userData.gender}</p>}
      {userData?.email && <p>Email: {userData.email}</p>}
      {userData?.role && <p>Rol: {userData.role}</p>}
    </>
  )
}

export default Dashboard
