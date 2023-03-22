// import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../assets/lakhey logo.png';
import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const activePage = ({isActive}) => {
    if(isActive) {
      return "active-page";
    }
  }

  return (
    <div className="lakhey-navbar">
      <div className="lakhey-navbar-links">
        <div className="lakhey-navbar-links-logo">
          <img src={logo} alt="logo" width={20} height={20} />
        </div>
        <div className="lakhey-navbar-links-container">
          <p><NavLink to="/" className={activePage} >Home</NavLink></p>
          <p><NavLink to="/about" className={activePage} >About</NavLink></p>
          <p><NavLink to="/shop" className={activePage} >Shop</NavLink></p>
          <p><NavLink to="/contact" className={activePage} >Contact</NavLink></p>
        </div>
      </div>
      <div className="lakhey-navbar-sign">
        <button className="sign-btn"><Link to="/login">Sign In</Link></button>
        <button className="sign-btn"><Link to="/signup">Sign Up</Link></button>
      </div>
    </div>
  );
};

export default Navbar;