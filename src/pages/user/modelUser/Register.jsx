import { TextField, Button, FormControlLabel, Checkbox, IconButton, InputAdornment, FormControl, InputLabel, Select, MenuItem} from "@mui/material";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Footer from "../../../components/Footer/Footer";
import Navbar from "../../../components/Navbar/Navbar";
import { useAuth } from "../../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from "react-hook-form";
import { useEffect, useRef, useState } from 'react';
import "./Register.css";

function App() {
    const { register, handleSubmit, watch, formState: {errors} } = useForm();
    const {signup, isRegister, errors: singinErrors} = useAuth();
    const onSubmit = handleSubmit((data) => {
        if (!selectedQuestion) {
            return;
        }
        const formData = { ...data, question: selectedQuestion };
        if (isCaptchaCompleted) {
            console.log(formData);
            signup(formData);
            setMsjErrorC("");
        } else {
            setMsjErrorC("Por favor, introduce un captcha correcto.");
        }
    });
    const navigate = useNavigate();
    const [found, setFound] = useState(false);
    const [messageTrue, setMessageTrue] = useState("");
    useEffect(() => {
        if (isRegister) {
            setFound(true);
            setMessageTrue("El registro ha sido exitoso")
            const timeoutId = setTimeout(() => {
                navigate('/login');
            }, 3000);
          // Limpia el temporizador cuando el componente se desmonta o cuando isRegister cambia
            return () => clearTimeout(timeoutId);
        }
    }, [isRegister]);

    const [isCaptchaCompleted, setIsCaptchaCompleted] = useState(false);
    const [msjErrorC, setMsjErrorC] = useState("");
    const captcha = useRef(null);
    const onChange = () => {
        if (captcha.current.getValue()) {
            setIsCaptchaCompleted(true);
            setMsjErrorC("");
        }
    };

    const [showPassword1, setShowPassword1] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);
    const togglePasswordVisibility1 = () => {
        setShowPassword1((prevShowPassword) => !prevShowPassword);
    };
    const togglePasswordVisibility2 = () => {
        setShowPassword2((prevShowPassword) => !prevShowPassword);
    };

    const [sortBy, setSortBy] = useState('');
    const [selectedQuestion, setSelectedQuestion] = useState('');
    const handleSortChange = (event) => {
        const selectedSortBy = event.target.value;
        setSelectedQuestion(selectedSortBy);
        setSortBy(selectedSortBy);
    };

    return (
        <div>
            <Navbar />
            <div className='section'>
                <h2>¡Únete a la Comunidad de JIREH!</h2>
                <h5>En JIREH, valoramos a nuestros miembros y su compromiso con el bienestar de sus queridas mascotas. Nuestro formulario de Registro es el primer paso para unirte a nuestra creciente comunidad de amantes de los animales y obtener acceso a una variedad de ventajas personalizadas.</h5>
                {
                    singinErrors.map((error, i) => (
                        <div className="msjError" key={i} style={{marginTop: "10px", marginBottom: "20px"}}>
                        {error}
                        </div>
                    ))
                }
                {
                    found && <div className="msjSuccess">
                        {messageTrue}
                    </div>
                }
                <form onSubmit={onSubmit} style={{marginTop: "20px"}}>
                    <div className="groupInput">
                        <div className="inputContainer">
                            <TextField
                                fullWidth className="input" label="Nombre(s) *" variant="outlined"
                                {...register("name", {
                                    required: {value: true, message: "Nombre es requerido"},
                                    minLength: {value: 2, message: "Nombre debe tener al menos 2 caracteres"},
                                    maxLength: {value: 50, message: "Nombre debe tener maximo 50 caracteres"},
                                    pattern: {value: /^[A-ZÁÉÍÓÚÑ][a-záéíóúñ]*(?: [A-ZÁÉÍÓÚÑ][a-záéíóúñ]*)*$/, message: "Nombre no valido"}
                                })}
                            />
                            {errors.name && <span className="error">{errors.name.message}</span>}
                        </div>

                        <div className="inputContainer">
                            <TextField
                                fullWidth className="input" label="Apellidos *" variant="outlined"
                                {...register("lastname", {
                                    required: {value: true, message: "Apellidos es requerido"},
                                    minLength: {value: 2, message: "Apellidos debe tener al menos 2 caracteres"},
                                    maxLength: {value: 50, message: "Apellidos debe tener maximo 50 caracteres"},
                                    pattern: {value: /^[A-ZÁÉÍÓÚÑ][a-záéíóúñ]*(?: [A-ZÁÉÍÓÚÑ][a-záéíóúñ]*)*$/, message: "Apellidos no tiene un formato valido"}
                                })}
                            />
                            {errors.lastname && <span className="error">{errors.lastname.message}</span>}
                        </div>
                    </div>

                    <div className="groupInput">
                        <div className="inputContainer">
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
                        </div>

                        <div className="inputContainer">
                            <TextField
                                fullWidth
                                className="input"
                                label="Correo electrónico"
                                variant="outlined"
                                {...register("email", {
                                    required: { value: true, message: "Correo es requerido" },
                                    pattern: {
                                        value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                                        message: "Formato de correo no válido",
                                    },
                                })}
                            />
                            {errors.email && <span className="error">{errors.email.message}</span>}
                        </div>
                    </div>

                    <div className="groupInput">
                        <div className="inputContainer">
                        <TextField
                            fullWidth
                            className="input"
                            label="Contraseña *"
                            variant="outlined"
                            type={showPassword1 ? 'text' : 'password'}
                            {...register("password", {
                                required: { value: true, message: "Contraseña es requerida" },
                                pattern: { value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#%$])[A-Za-z\d@#%$]{8,20}$/, message: "Contraseña no cumple con el formato válido" },
                                validate: {matchesPassword: value => value === watch('confirmPassword') || 'Las contraseñas no coinciden'}
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
                        </div>

                        <div className="inputContainer">
                        <TextField
                            fullWidth
                            className="input"
                            label="Confirmar contraseña *"
                            variant="outlined"
                            type={showPassword2 ? 'text' : 'password'}
                            {...register("confirmPassword", {
                                required: { value: true, message: "Confirmar contraseña es requerida" },
                                pattern: { value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#%$])[A-Za-z\d@#%$]{8,20}$/, message: "Contraseña no cumple con el formato válido" },
                                validate: {matchesPassword: value => value === watch('password') || 'Las contraseñas no coinciden'}
                            })}
                            InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                <IconButton onClick={togglePasswordVisibility2} edge="end">
                                    {showPassword2 ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                </IconButton>
                                </InputAdornment>
                            ),
                            }}
                        />
                        {errors.confirmPassword && <span className="error">{errors.confirmPassword.message}</span>}
                        </div>
                    </div>

                    <div className="groupInput">
                        <div className="inputContainer">
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Seleccione una pregunta secreta</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={sortBy}
                                    label="Ordenar por"
                                    onChange={handleSortChange}
                                    required
                                >
                                    <MenuItem value="¿Cuál es el nombre de tu mascota actual?">¿Cuál es el nombre de tu mascota actual?</MenuItem>
                                    <MenuItem value="¿Cuál es la raza de tu mascota?">¿Cuál es la raza de tu mascota?</MenuItem>
                                    <MenuItem value="¿Cuál es tu tipo de animal favorito?">¿Cuál es tu tipo de animal favorito?</MenuItem>
                                    <MenuItem value="¿De qué color son los ojos de tu mascota?">¿De qué color son los ojos de tu mascota?</MenuItem>
                                    <MenuItem value="¿Cuál es el nombre del primer juguete que le diste a tu mascota?">¿Cuál es el nombre del primer juguete que le diste a tu mascota?</MenuItem>
                                </Select>
                            </FormControl>
                        </div>

                        <div className="inputContainer">
                            <TextField
                                fullWidth className="input" label="Respuesta *" variant="outlined"
                                {...register("reply", {
                                    required: {value: true, message: "Respuesta es requerido"},
                                    minLength: {value: 2, message: "Usuario debe tener al menos 2 caracteres"},
                                    maxLength: {value: 50, message: "Usuario debe tener maximo 50 caracteres"},
                                    pattern: {value: /^[a-zA-Z0-9]+$/, message: "Respuesta no tiene un formato valido"}
                                })}
                            />
                            {errors.reply && <span className="error">{errors.reply.message}</span>}
                        </div>
                    </div>

                    <FormControlLabel control={<Checkbox required />} label="Terminos y condiciones" style={{marginBottom: "20px"}} />
                    <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginBottom: "30px"}}>
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
                                <Button variant="contained" size="large" disabled>Registrando</Button>
                            :
                                <Button variant="contained" size="large" type='onSubmit'>Registrarme</Button>
                        }
                    </div>
                    <div className="button">
                        <span>
                            ¿Ya tienes una cuenta?
                            <Link to="/login" style={{color: "#1b2430", marginLeft: "5px"}}>Inicia sesión</Link>
                        </span>
                    </div>
                </form>
            </div>
            <Footer/>
        </div>
    );
}

export default App;