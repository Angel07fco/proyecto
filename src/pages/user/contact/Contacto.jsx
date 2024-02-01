import LocationOnIcon from '@mui/icons-material/LocationOn';
import Footer from "../../../components/Footer/Footer";
import Navbar from "../../../components/Navbar/Navbar";
import PhoneIcon from '@mui/icons-material/Phone';
import { TextField, Button } from "@mui/material";
import ChatIcon from '@mui/icons-material/Chat';
import { useForm } from "react-hook-form";
import "./Contact.css";

function Contacto() {

  const { register, handleSubmit, formState: {errors} } = useForm();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
});

  return (
    <div>
      <Navbar />
      <h1>Emergenias las 24 horas</h1>
      <div className="section-contact">
        <h2>¡Queremos conocer tu opinión!</h2>
        <h5>Nuestra misión es brindarte una atención de calidad a ti y a tus mascotas, fomentando su salud y bienestar. Es por ello que deseamos saber cual es tu experiencia con la clinica. Comparte tu opinión, comentarios, quejas y sugerencias en los siguientes contactos.</h5>
        <div className="form-info">
          <div className="info">
            <div className='divi'>
              <div className='info-cont'>
                <ChatIcon fontSize="large" />
                <h5>Escribenos</h5>
                <h6>7711620008</h6>
              </div>
              <div className='info-cont'>
                <PhoneIcon fontSize="large" />
                <h5>Lllamadas</h5>
                <h6>77 1162 0008</h6>
              </div>
            </div>
            <div className='info-cont'>
              <LocationOnIcon fontSize="large" />
              <h5>Visitanos</h5>
              <h6>Bulevar Adolfo Lopez S/N Colonia Aviación Civil</h6>
            </div>
          </div>
          <div className="form">
            <form className="form-contact" onSubmit={onSubmit}>
              <TextField
                fullWidth style={{marginTop: "20px"}} label="Nombre(s) *" variant="outlined"
                {...register("name", {
                    required: {value: true, message: "Nombre es requerido"},
                    minLength: {value: 2, message: "Nombre debe tener al menos 2 caracteres"},
                    maxLength: {value: 50, message: "Nombre debe tener maximo 50 caracteres"},
                    pattern: {value: /^[A-ZÁÉÍÓÚÑ][a-záéíóúñ]*(?: [A-ZÁÉÍÓÚÑ][a-záéíóúñ]*)*$/, message: "Nombre no valido"}
                })}
              />
              {errors.name && <span className="error">{errors.name.message}</span>}
              <TextField
                fullWidth style={{marginTop: "20px"}} label="Apellidos *" variant="outlined"
                {...register("lastname", {
                    required: {value: true, message: "Apellidos es requerido"},
                    minLength: {value: 2, message: "Apellidos debe tener al menos 2 caracteres"},
                    maxLength: {value: 50, message: "Apellidos debe tener maximo 50 caracteres"},
                    pattern: {value: /^[A-ZÁÉÍÓÚÑ][a-záéíóúñ]*(?: [A-ZÁÉÍÓÚÑ][a-záéíóúñ]*)*$/, message: "Apellidos no tiene un formato valido"}
                })}
              />
              {errors.lastname && <span className="error">{errors.lastname.message}</span>}
              <TextField
                fullWidth style={{marginTop: "20px"}} label="Correo electrónico" variant="outlined"
                {...register("email", {
                    required: { value: true, message: "Correo es requerido" },
                    pattern: {
                      value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                      message: "Formato de correo no válido",
                    }
                })}
              />
              {errors.email && <span className="error">{errors.email.message}</span>}
              <TextField
                fullWidth style={{marginTop: "20px"}} label="Asunto *" variant="outlined"
                {...register("asunto", {
                  required: {value: true, message: "Asunto es requerido"},
                  minLength: {value: 2, message: "Asunto debe tener al menos 2 caracteres"},
                })}
              />
              {errors.asunto && <span className="error">{errors.asunto.message}</span>}
              <div className="button">
                <Button variant="contained" size="large" type='onSubmit'>Enviar</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Contacto



