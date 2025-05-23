import { Link } from 'react-router-dom';
import logo from '../assets/Ruva.jpeg';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-sm">
      <div className="container">
        {/* Left Side Company Name */}
        <Link className="navbar-brand fw-bold title-text" to="/">
          <img
            src={logo}
            alt="Company Logo"
            className="img-fluid"
            style={{ width: '120px', height: 'auto' }}
          />
        </Link>

        {/* Navbar Toggle for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Right Side Nav Items */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link title-text" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link title-text" to="/about">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link title-text" to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
