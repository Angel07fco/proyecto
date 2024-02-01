import Logo from '../../assets/images/notfound.jpg';
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

function NotFound() {
  return (
    <div>
        <Navbar />
        <div style={{
          marginTop: "100px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center"}}
        >
          <div>
            <img src={Logo} alt="NOT FOUND" style={{width: '300px', height: '350px'}} />
          </div>
          <div style={{marginLeft: "50px"}}>
            <h1 style={{fontSize: "50px", textAlign: "left"}}>Oops.</h1>
            <h2 style={{textAlign: "left"}}>No podemos encontrar la página que estás buscando</h2>
            <h3 style={{textAlign: "left"}}>Es posible que haya caducado o que haya ocurrido un error tipográfico.</h3>
            <h3 style={{textAlign: "left"}}>Quizas puedas encontrar lo que necesitas en nuestra página de inicio.</h3>
            <Link to="/">
              <Button variant="outlined" size="large" color="error">Ir a Inicio</Button>
            </Link>
          </div>
        </div>
        <Footer />
    </div>
  )
}

export default NotFound