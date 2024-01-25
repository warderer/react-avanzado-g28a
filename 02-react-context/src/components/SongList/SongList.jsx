import { useSongContext } from '@/hooks/useSongContext'
import './songlist.css'

const SongList = () => {
  const { list, loading, setSelectedSong, search } = useSongContext()

  // Comparo el título de la canción con el texto que pongo en el buscador
  const filteredSongList = list.filter((song) => {
    return song.title.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <>
      <section className='row-container'>
        {loading
          ? <h1>Cargando...</h1>
          : filteredSongList.map((song) => (
            <div
              className='row-song'
              key={song.id}
              onClick={() => setSelectedSong(song)}
            >
              <h3>{song.title}</h3>
              <p>{song.artist}</p>
            </div>
          ))}
      </section>
    </>
  )
}
export default SongList
