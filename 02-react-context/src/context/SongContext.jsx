import { createContext } from 'react'
// CONTEXT tiene que ver con el manejo de estados globales en React.
// Es decir, poder compartir LA MISMA información entre diferentes NIVELES de componentes.

// Para usar Context necesitamos seguir una serie de pasos

// 1. Crear el contexto
const SongContext = createContext()

// 2. Crear el componente Provider (proveedor del contexto)
// El proveedor maneja donde se obtiene la información y como se comparte.
// El proveedor es un COMPONENTE que envuelve a los componentes que van a usar el contexto.

function SongProvider ({ children }) {
  // Siempre se llama value el prop del provider que contiene la data que se va a compartir.
  return (
    <SongContext.Provider value={{}}>
      {children}
    </SongContext.Provider>
  )
}

export { SongContext, SongProvider }
