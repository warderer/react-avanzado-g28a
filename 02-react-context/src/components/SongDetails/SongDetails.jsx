import { useSongContext } from '@/hooks/useSongContext'

const SongDetails = () => {
  const { selectedSong } = useSongContext()
  return (
    <>
      {
        selectedSong.title
          ? (
            <div className='song-detail'>
              <img src={selectedSong.img_url} alt={selectedSong.title} />
              <h2>{selectedSong.title}</h2>
              <h4>{selectedSong.artist}</h4>
              <h6>{selectedSong.year}</h6>
            </div>
            )
          : <h3>No hay canción seleccionada</h3>
    }
    </>
  )
}
export default SongDetails
