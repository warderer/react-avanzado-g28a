import { createContext, useState, useEffect } from 'react'
// Alias: Usamos @ para no tener que poner toda la ruta desde src
import canciones from '@/assets/listaCanciones.json'
// import canciones from '../../assets/listaCanciones.json'

// CONTEXT tiene que ver con el manejo de estados globales en React.
// Es decir, poder compartir LA MISMA información entre diferentes NIVELES de componentes.

// Para usar Context necesitamos seguir una serie de pasos

// 1. Crear el contexto
const SongContext = createContext()

// 2. Crear el componente Provider (proveedor del contexto)
// El proveedor maneja donde se obtiene la información y como se comparte.
// El proveedor es un COMPONENTE que envuelve a los componentes que van a usar el contexto.

function SongProvider ({ children }) {
  const [list, setList] = useState([]) // lista de canciones
  const [loading, setLoading] = useState(true) // ¿esta cargando?
  // Siempre se llama value el prop del provider que contiene la data que se va a compartir.
  const [selectedSong, setSelectedSong] = useState({}) // canción seleccionada

  useEffect(() => {
    // Simulo la llamada a API añadiendo un pequeño retraso
    setTimeout(() => {
      setList(canciones)
      setLoading(false)
    }, 2000)
  }, [])

  // Tenemos que indicar al provider que información va a compartir.
  const dataContext = {
    list,
    loading,
    selectedSong,
    setSelectedSong
  }

  // El prop que contiene la información que se va a compartir se llama value (obligatorio).
  return (
    <SongContext.Provider value={dataContext}>
      {children}
    </SongContext.Provider>
  )
}

export { SongContext, SongProvider }

/* USO DE CONTEXT */

// 4. Ir a un componente superior y envolver los componentes que van a usar el contexto con el provider <SongProvider>

// 5. Usar el contexto donde lo necesitemos usando el custom hook useSongContext
