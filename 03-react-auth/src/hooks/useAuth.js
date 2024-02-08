import { useContext } from 'react'
import { AuthContext } from '@/context/AuthContext'

// Paso 3. Crear un custom hook para usar el contexto (consumirlo)

export function useAuthContext () {
  const context = useContext(AuthContext)

  if (context === undefined) {
    throw new Error('useAuthContext debe estar dentro del proveedor AuthProvider')
  }

  return context
}
