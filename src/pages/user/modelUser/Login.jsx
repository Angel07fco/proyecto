import { TextField, IconButton, InputAdornment, Button } from "@mui/material";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import { useAuth } from "../../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from "react-hook-form";
import { useEffect, useRef, useState } from "react";
import "./Register.css";

function Login() {

    const { register, handleSubmit, formState: {errors} } = useForm();
    const {singin, isAuthenticated, errors: singinErrors} = useAuth();
    const onSubmit = handleSubmit((data) => {
        if (isCaptchaCompleted) {
            console.log(data);
            singin(data);
            setMsjErrorC("");
        } else {
            setMsjErrorC("Por favor, introduce un captcha correcto.");
        }
    });
    const navigate = useNavigate();
    const [found, setFound] = useState(false);
    const [messageTrue, setMessageTrue] = useState("");
    useEffect(() => {
        if (isAuthenticated) {
            setFound(true);
            setMessageTrue("Has iniciado sesión correctamente")
            const timeoutId = setTimeout(() => {
                navigate('/');
            }, 3000);
          // Limpia el temporizador cuando el componente se desmonta o cuando isAuthenticated cambia
            return () => clearTimeout(timeoutId);
        }
    }, [isAuthenticated]);

    const [showPassword1, setShowPassword1] = useState(false);
    const togglePasswordVisibility1 = () => {
        setShowPassword1((prevShowPassword) => !prevShowPassword);
    };

    const [isCaptchaCompleted, setIsCaptchaCompleted] = useState(false);
    const [msjErrorC, setMsjErrorC] = useState("");
    const captcha = useRef(null);
    const onChange = () => {
        if (captcha.current.getValue()) {
            setIsCaptchaCompleted(true);
            setMsjErrorC("");
        }
    };

    return (
        <div>
            <Navbar />
                <div className="section-login">
                    <h2>¡Bienvenido a la Comunidad de JIREH!</h2>
                    <h5>¡Gracias por elegirnos! inicia sesión para conectarte, compartir y disfrutar de los servicios y productos que ofrecemos para ti.</h5>
                    {
                        singinErrors.map((error, i) => (
                            <div className="msjError" key={i}>
                            <span>Error 400: </span>{error}
                            </div>
                        ))
                    }
                    {
                        found && <div className="msjSuccess">
                            <span>200: </span>{messageTrue}
                        </div>
                    }
                    <form onSubmit={onSubmit}>
                        <TextField
                            fullWidth
                            className="input"
                            label="Teléfono *"
                            variant="outlined"
                            {...register("phone", {
                                required: { value: true, message: "Teléfono es requerido" },
                                pattern: { value: /^[0-9]{10}$/, message: "Teléfono no válido" },
                            })}
                        />
                        {errors.phone && <span className="error">{errors.phone.message}</span>}

                        <TextField
                            fullWidth className="input" label="Contraseña *" variant="outlined" type={showPassword1 ? 'text' : 'password'}
                            {...register("password", {
                                required: { value: true, message: "Contraseña es requerido" },
                                pattern: { value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#%$])[A-Za-z\d@#%$]{8,20}$/, message: "Contraseña no valida, debe contener al menos 1 caracter especial, 1 número y 1 letra mayuscula." },
                            })}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton onClick={togglePasswordVisibility1} edge="end">
                                            {showPassword1 ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                        {errors.password && <span className="error">{errors.password.message}</span>}

                        <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: "20px", marginBottom: "20px"}}>
                            <ReCAPTCHA
                                ref={captcha}
                                sitekey="6LdmJVQpAAAAAC9oV3K9_U3NXeO3h-fHFbPUTWvJ"
                                onChange={onChange}
                            />
                            <span className="error">{msjErrorC}</span>
                        </div>

                        <div className="button">
                            {found
                                ?
                                    <Button variant="contained" size="large" disabled>Iniciando Sesión</Button>
                                :
                                    <Button variant="contained" size="large" type='onSubmit'>Iniciar Sesión</Button>
                            }
                        </div>
                        <div className="button">
                            <span>
                                ¿Aun no tienes una cuenta en JIREH?
                                <Link to="/register" style={{color: "#1b2430", marginLeft: "5px"}}>Registrate</Link>
                            </span>
                        </div>
                        <div className="button">
                            <span>
                                ¿No puedes acceder?
                                <Link to="/recuperar" style={{color: "#1b2430", marginLeft: "5px"}}>Recuperar ahora</Link>
                            </span>
                        </div>
                    </form>
                </div>
            <Footer />
        </div>
    )
}

export default Login;