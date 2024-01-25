import { useSongContext } from '@/hooks/useSongContext'

const Header = () => {
  const { setSearch, selectedSong } = useSongContext()

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  return (
    selectedSong.title
      ? (
        <div>
          Now playing: {selectedSong.title} - {selectedSong.artist}
          <input type='search' onChange={handleSearch} />
          <button>Prev</button>
          <button>Next</button>
        </div>
        )
      : <div>Seleccione una canción</div>
  )
}
export default Header
