import { TextField, Button, FormControl, Input } from "@mui/material";
import Footer from "../../../components/Footer/Footer";
import Navbar from "../../../components/Navbar/Navbar";
import { useAuth } from "../../../context/AuthContext";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function RecuperarContraseña() {

  const { register, handleSubmit, formState: {errors} } = useForm();
  const { getUserByPhone, user, isUserValidate, errors: singinErrors} = useAuth();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    getUserByPhone(data);
  });

  const onSubmit2 = handleSubmit((data) => {
    console.log(data);
    getUserByPhone(data);
  });

  const [found, setFound] = useState(false);
  useEffect(() => {
      if (isUserValidate) {
        setFound(true);
      }
  }, [isUserValidate]);

  return (
      <div>
        <Navbar />
        <div className="section-login">
          <h2>¡Recuperar mi Contraseña!</h2>
          <h5>Si desea recuperar su contraseña solo debe ingresar su número de telefono y responder a la pregunta secreta que selecciono el crear su cuenta.</h5>
          {
              singinErrors.map((error, i) => (
                  <div className="msjError" key={i}>
                  <span>Error 400: </span>{error}
                  </div>
              ))
          }
          
            {found === false
              ?
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
                  <div className="button">
                    <Button variant="contained" size="large" type='onSubmit'>Validar teléfono</Button>
                  </div>
                </form>
              :
                <form onSubmit={onSubmit2}>
                  <FormControl fullWidth disabled variant="standard">
                    <Input id="component-disabled" defaultValue={user.question} />
                  </FormControl>
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
                  <div className="button">
                    <Button variant="contained" size="large" type='onSubmit'>Comprobar respuesta</Button>
                  </div>
                </form>
            }
          <div className="button">
            <span>
                <Link to="/login" style={{color: "#1b2430", marginLeft: "5px"}}>Iniciar sesión</Link>
            </span>
          </div>
      </div>
        <Footer />
      </div>
  )
}

export default RecuperarContraseña;