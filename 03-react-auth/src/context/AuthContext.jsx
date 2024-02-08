import { createContext } from 'react'

// #1 Crear el contexto
const AuthContext = createContext()

// #2 Crear el proveedor del contexto (provider)
const AuthProvider = ({ children }) => {
  // Aqui va mi lógica

  const data = {
    // Las cosas que quiero hacer global
  }
  return (
    <AuthContext.Provider value={data}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
