import { useContext } from 'react'
import { SongContext } from '@/context/SongContext'

// Paso 3. Crear un custom hook para usar el contexto (consumirlo)

export default function useSongContext () {
  const context = useContext(SongContext)

  if (context === undefined) {
    throw new Error('useSongContext debe estar dentro del proveedor SongProvider')
  }

  return context
}
