import { BrowserRouter } from 'react-router-dom'
import Header from '@/components/Header'
import RoutesIndex from '@/routes'
import { AuthProvider } from '@/context/AuthContext'
import './App.css'

function App () {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <RoutesIndex />
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
