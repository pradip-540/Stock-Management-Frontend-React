import { Link } from "react-router-dom";
 import "./Navbar.css"// Import CSS file for Navbar styling
 
const logo = {
  src: "https://th.bing.com/th/id/OIP.tMHR6LMDGRzKQ-382IoefAHaEK?rs=1&pid=ImgDetMain",
  alt: "Logo",
};

const Navbar = () => {
  return (
    <nav>
      <div className="left bg-gray" >
      <ul className="nav-list">
        <li>
        <img src={logo.src} alt={logo.alt} className="logo" />
        </li>
        <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
        <li className="nav-item">
            <Link to="/about" className="nav-link">
              AboutUs
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/pricing" className="nav-link">
              Pricing
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/customers" className="nav-link">
              Customers
            </Link>
          </li>
          
          <li className="nav-item">
            <Link to="/contact" className="nav-link">
              Contact Us
            </Link>
          </li>
         
        </ul>
      </div>
      <div className="right">
      <Link to="login">  <button className="action-button">Login</button></Link>
        <Link to="get now"><button className="action-button">Get Now</button></Link>
      </div>
    </nav>
  );
};

export default Navbar;
