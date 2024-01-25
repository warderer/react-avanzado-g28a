import { useState, useEffect } from 'react'
// Alias: Usamos @ para no tener que poner toda la ruta desde src
import canciones from '@/assets/listaCanciones.json'
// import canciones from '../../assets/listaCanciones.json'
import './songlist.css'

const SongList = () => {
  const [list, setList] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulo la llamada a API añadiendo un pequeño retraso
    setTimeout(() => {
      setList(canciones)
      setLoading(false)
    }, 2000)
  }, [])

  return (
    <>
      <section className='row-container'>
        {loading
          ? <h1>Cargando...</h1>
          : list.map((song) => (
            <div className='row-song' key={song.id}>
              <h3>{song.title}</h3>
              <p>{song.artist}</p>
            </div>
          ))}
      </section>
    </>
  )
}
export default SongList
