import { Link } from "react-router-dom"
import "./Navbar.css"
const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>
        <Link to={`/`} >School</Link>
      </h2>
      <ul> 
        <li>
          <Link to={`/`} className="new-btn">Dashboard</Link>
        </li>
        <li>
          <Link to={`/new`} className="new-btn">Cursos</Link>
        </li>
        <li>
          <Link to={`/cadastro`} className="new-btn">Alunos </Link>
        </li>
       
      </ul>
    </nav>
  )
}

export default Navbar