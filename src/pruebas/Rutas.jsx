import '../App.css';
import { Route, Routes } from "react-router-dom";

/* Pantallas de comandos */
import Home from '../pages/user/Home';
import Citas from '../pages/user/Citas';
import Servicios from '../pages/user/Servicios';
import Tienda from '../pages/user/Tienda';
import Nosotros from '../pages/user/Nosotros';
import Contacto from '../pages/user/Contacto';
/* const tacos = [
  'pastor',
  'chorizo',
  'chili',
  'quesadilla'
]

const Home = () => <h1>Home</h1>

const Search = () => {
  return (
    <div>
      <h1>Search</h1>
      <ul>
        {tacos.map(taco => (
          <li key={taco} style={{textAlign: 'center'}}><Link to={`/tacos/${taco}`}>{taco}</Link></li>
        ))}
      </ul>
    </div>
  );
};


const Tacos = () => {
  const { taco } = useParams()
  return (
    <div>
      <h1 style={{textAlign: 'center'}}>Tacos</h1>
      {taco}
      <Link to='details'>Ir a los detalles</Link>
      <Outlet />
    </div>
  )
}

const TacoDetails = () => {
  const { taco } = useParams()
  return (
    <h1>Taco Details {taco}</h1>
  )
}
 */
function Rutas() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/citas' element={<Citas />} />
      <Route path='/servicios' element={<Servicios />} />
      <Route path='/tienda' element={<Tienda />} />
      <Route path='/nosotros' element={<Nosotros />} />
      <Route path='/contacto' element={<Contacto />} />
      {/* <Route path='/search' element={<Search/>} />
      <Route path='/tacos/:taco' element={<Tacos />}>
        <Route path='details' element={<TacoDetails />} />
      </Route> */}
      <Route path='*' element={<h1>Not found</h1>} />
    </Routes>
  )
}

export default Rutas
