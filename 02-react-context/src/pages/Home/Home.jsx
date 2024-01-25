import SongList from '@/components/SongList'
import SongDetails from '@/components/SongDetails'
import './home.css'

const Home = () => {
  return (
    <div className='home-container'>
      <div className='izquierdo'>
        <h2>SongList</h2>
        <SongList />
      </div>

      <div className='derecho'>
        <h2>SongDetail</h2>
        <SongDetails />
      </div>
    </div>
  )
}
export default Home