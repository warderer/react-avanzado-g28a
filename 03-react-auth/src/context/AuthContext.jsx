import { createContext, useState, useEffect } from 'react'
import { jwtDecode } from 'jwt-decode'

// #1 Crear el contexto
const AuthContext = createContext()

// #2 Crear el proveedor del contexto (provider)
const AuthProvider = ({ children }) => {
  // Aqui va mi lógica
  const [isAuth, setIsAuth] = useState(false) // ¿Estoy autenticado?
  const [userPayload, setUserPayload] = useState(null) // La información del usuario

  const login = (token) => {
    localStorage.setItem('token', token)
    const payload = jwtDecode(token) // Decodificamos el payload del token
    setIsAuth(true)
    setUserPayload(payload)
  }

  const logout = () => {
    localStorage.removeItem('token') // Borro el token del localStorage
    setIsAuth(false) // Estoy deslogeado
    setUserPayload(null) // Borro el payload del estado
  }

  useEffect(() => {
    const token = localStorage.getItem('token') // Obtengo el token del localStorage
    if (token) {
      const payload = jwtDecode(token) // Decodificamos el payload del token
      setIsAuth(true) // Estoy autenticado
      setUserPayload(payload) // Guardo el payload en el estado
    }
  }, [])

  const data = {
    // Las cosas que quiero hacer global
    isAuth,
    userPayload,
    login,
    logout
  }

  return (
    <AuthContext.Provider value={data}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
