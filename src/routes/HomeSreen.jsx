import { useContext } from "react"
import { UsuarioContext } from "../context/Usuariocontext"

export const HomeSreen = () => {
  const {usuario} = useContext(UsuarioContext)
  const {nombre, email, ciudad, edad} = usuario

  if(!usuario || Object.keys(usuario).length === 0){
    return <div className="container"><p>No hay usuarios registrados</p></div>
  }

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Email</th>
            <th scope="col">Ciudad</th>
            <th scope="col">Edad</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">{nombre}</th>
            <td>{email}</td>
            <td>{ciudad}</td>
            <td>{edad}</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}