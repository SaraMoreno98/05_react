import { Link, NavLink } from "react-router-dom"

export const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="#">Menú</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="/">Inicio</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink className="nav-link" to="/about">Info</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">Contacto</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink className="nav-link" to="/login">Inicio Sesión</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                </nav>
        </>
    )
}