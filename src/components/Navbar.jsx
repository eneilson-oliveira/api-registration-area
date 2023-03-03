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
          <Link to={`/`}>Area de cadastro</Link>
        </li>
        <li>
          <Link to={`/new`} className="new-btn">New Student</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar