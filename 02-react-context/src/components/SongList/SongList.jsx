import { useSongContext } from '@/hooks/useSongContext'
import './songlist.css'

const SongList = () => {
  const { list, loading } = useSongContext()

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
