import { Routes, Route } from 'react-router-dom';
import { Home, Dashboard, Secret, Login, Signup } from '@/pages';

const RoutesIndex = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/secret' element={<Secret />} />
      <Route path='/signup' element={<Signup />} />
    </Routes>
  );
};

export default RoutesIndex;
