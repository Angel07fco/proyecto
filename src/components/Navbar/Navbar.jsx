import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Nav } from './Nav';
import './NavbarStyle.css';
import Logo from '../../assets/images/logo.png';
import { TextField } from  '@mui/material'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { useAuth } from "../../context/AuthContext";

function Navbar() {
    const {user} = useAuth();
    const [click, setClick] = useState(false);

    const [isLogout, setIsLogout] = useState(false);
    const [message, setMessage] = useState("")
    useEffect(() => {
        if (user !== null) {
            setIsLogout(true);
            setMessage(user.email);
        }
    }, [user]);


    const toggleClick = () => {
        setClick(!click);
    };

    return (
        <>
            <motion.header
                id='navS'
                initial={{ opacity: 0, translateY: -100 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ type: 'spring', stiffness: 120, damping: 15 }}
            >
                <div id='navS-1'>
                    <Nav to='/'>
                        <img src={Logo} alt="Logo" style={{width: '180px', height: '70px'}} />
                    </Nav>
                </div>
                <div id='navS-2'>
                    <TextField
                        className='search'
                        type='search'
                        placeholder='Busca un servicio o producto'
                    />
                </div>
                <div id='navS-3'>
                    {isLogout === false
                        ?
                            <div className='one'>
                                <Nav to='/register'>Crear cuenta</Nav>
                                <Nav to='/login'>Iniciar Sesión</Nav>
                            </div>
                        :
                            <div className='one'>
                                <h5>Bienvenido {message}</h5>
                            </div>
                    }
                    <div className='two'>
                        <Nav to='/' style={{display: 'flex', alignItems: 'center'}}>
                            <AddShoppingCartIcon />
                            Mi Carrito
                        </Nav>
                        <Nav to='/' style={{display: 'flex', alignItems: 'center'}}>
                            <AccountCircleOutlinedIcon />
                            Mi Cuenta
                        </Nav>
                    </div>
                </div>
            </motion.header>
            <motion.nav
                initial={{ opacity: 0, translateX: -100 }}
                animate={{ opacity: 1, translateX: 0 }}
                transition={{ type: 'spring', stiffness: 120, damping: 15 }}
                className='nav'
            >
                <ul id='navbar' >*-
                    <Nav to='/'>Inicio</Nav>
                    <Nav to='/citas'>Citas</Nav>
                    <Nav to='/servicios'>Servicios</Nav>
                    <Nav to='/tienda'>Tienda</Nav>
                    <Nav to='/nosotros'>¿Quienes Somos?</Nav>
                    <Nav to='/contacto'>Contacto</Nav>
                </ul>
                <div id='mobile'>
                    <i
                        id='bar'
                        onClick={toggleClick}
                        className={click ? 'fas fa-times' : 'fas fa-bars'}
                    ></i>
                    <Nav to='/contacto'>Contacto</Nav>
                </div>
            </motion.nav>
        </>
    );
}

export default Navbar;