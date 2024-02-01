import "./Footer.css";
import { Button } from "@mui/material";
import Logo from '../../assets/images/logo.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function Footer() {
    return (
        <div className="footer">
            <div className="f1">
                <div className="divisiones">
                    <img src={Logo} alt="Logo" style={{width: '180px', height: '70px'}} />
                    <h2 style={{color: "#1b2430"}}>Redes sociales</h2>
                    <div>
                        <WhatsAppIcon fontSize="large" />
                        <FacebookIcon fontSize="large" style={{margin: "0px 30px"}} />
                        <InstagramIcon fontSize="large" />
                    </div>
                </div>
                <div className="divisiones">
                    <h2 style={{color: "#1b2430", margin: "0px", marginBottom: "20px"}}>Contacto</h2>
                    <div className="grupIcon">
                        <PhoneIcon fontSize="large" />
                        <h6>77 1162 0008</h6>
                    </div>
                    <div className="grupIcon">
                        <LocationOnIcon fontSize="large" />
                        <h6>Bulevar Adolfo Lopez S/N Colonia Aviación Civil</h6>
                    </div>
                </div>
                <div className="divisiones">
                    <div className="mas">
                        <Button variant="contained" size="large" type='onSubmit'>Agendar una cita</Button>
                        <h6>Blog</h6>
                        <h6>Faq (Preguntas Frecuentes)</h6>
                        <h6>Testimonios y Comentarios</h6>
                    </div>
                </div>
            </div>
            <div className="f2">
                <div className="derechos">
                    <h6>Todos los derechos reservados 2023 ©JIREH</h6>
                </div>
                <div className="info">
                    <h6>Aviso de Privacidad</h6>
                    <h6>Terminos y Condiciones</h6>
                    <h6>Politicas de Cookies</h6>
                </div>
            </div>
        </div>
    )
}

export default Footer