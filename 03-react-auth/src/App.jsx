import "./App.css";
import Header from "./components/Header";
import {Home, Dashboard, Secret, Login, Signup} from '@/pages'

function App() {
  return (
    <>
      <Header />
      <Home />
      <Dashboard />
      <Secret />
      <Login />
      <Signup />
    </>
  );
}

export default App;
