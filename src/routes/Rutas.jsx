import '../App.css';
import { Route, Routes } from "react-router-dom";

import Home from '../pages/user/Home';
import Citas from '../pages/user/Citas';
import Servicios from '../pages/user/Servicios';
import Tienda from '../pages/user/Tienda';
import Nosotros from '../pages/user/Nosotros';
import Contacto from '../pages/user/contact/Contacto';
import Login from '../pages/user/modelUser/Login';
import Register from '../pages/user/modelUser/Register';
import RecuperarContraseña from '../pages/user/modelUser/RecuperarContraseña';
import NotFound from '../pages/user/NotFound';

function Rutas() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/citas' element={<Citas />} />
      <Route path='/servicios' element={<Servicios />} />
      <Route path='/tienda' element={<Tienda />} />
      <Route path='/nosotros' element={<Nosotros />} />
      <Route path='/contacto' element={<Contacto />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/recuperar' element={<RecuperarContraseña />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default Rutas
