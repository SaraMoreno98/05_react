import { useState } from "react"
import { UsuarioContext } from "./Usuariocontext"

// const usuarioFake = {
//     nombre: 'Pepillo',
//     email: 'pepillo@mail.com',
//     ciudad: 'Granada',
//     edad: 32
// }

export const UsuarioProvider = ({children}) => {
    const [usuario, setUsuario] = useState({})

    return (
        <UsuarioContext.Provider value={{usuario, setUsuario}}>
            {children}
        </UsuarioContext.Provider>
    )
}