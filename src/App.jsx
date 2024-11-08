import { Navigate, Routes, Route } from "react-router-dom"
import { NavBar } from "./components/NavBar"
import { HomeSreen } from "./routes/HomeSreen"
import { AboutScreen } from "./routes/AboutScreen"
import { Contact } from "./routes/Contact"
import { LoginScreen } from "./routes/LoginScreen"
import { UsuarioProvider } from "./context/UsuarioProvider"

export function App() {
  return (
    <>
      <UsuarioProvider>
        <NavBar/>

          <Routes>
            <Route path="/" element={<HomeSreen></HomeSreen>}></Route>
            <Route path="/about" element={<AboutScreen></AboutScreen>}></Route>
            <Route path="/contact" element={<Contact></Contact>}></Route>
            <Route path="/login" element={<LoginScreen></LoginScreen>}></Route>
            <Route path="/*" element={<Navigate to={'/'}></Navigate>}></Route>
          </Routes>
      </UsuarioProvider>
    </>
  )
}