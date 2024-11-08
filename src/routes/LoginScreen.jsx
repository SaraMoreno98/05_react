import { useContext } from "react"
import { UsuarioContext } from "../context/Usuariocontext"
import { useForm } from "../hooks/useForm";
import { useNavigate } from "react-router-dom";

export const LoginScreen = () => {
  const navigate = useNavigate()
  const initialForm = {
      nombre: '',
      email: '',
      ciudad: '',
      edad: ''
  }
  
  const {setUsuario} = useContext(UsuarioContext)
  const {formstate, nombre, email, ciudad, edad, onInputChange} = useForm(initialForm)

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(formstate)
    setUsuario(formstate)
    navigate('/')
  }

  return (
    <>
      <form className="container" onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">Nombre</label>
          <input
            type="text"
            className="form-control"
            name="nombre"
            value={nombre}
            onChange={onInputChange}
          />
          <label htmlFor="nombre" className="form-label">Correo Electrónico</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={email}
            onChange={onInputChange}
          />
          <label htmlFor="nombre" className="form-label">Ciudad</label>
          <input
            type="text"
            className="form-control"
            name="ciudad"
            value={ciudad}
            onChange={onInputChange}
          />
          <label htmlFor="nombre" className="form-label">Edad</label>
          <input
            type="text"
            className="form-control"
            name="edad"
            value={edad}
            onChange={onInputChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">Registrar Usuario</button>
      </form>
    </>
  )
}