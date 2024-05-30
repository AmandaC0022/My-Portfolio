import { NavLink, useLocation } from "react-router-dom";
import './Navbar.css'; 

const Navbar = () => {
    const location = useLocation(); 
    const { pathname } = location; 
    const splitLocation = pathname.split('/'); 

    console.log(pathname, splitLocation); 

    return ( 
        <div>
            <div className="navbar-container">
                <NavLink activeClassName="active" className={splitLocation[1] === "" ? "active" : ""} to="/ "><h5 className="nav-link">Home</h5></NavLink>
                <span className="circle"></span>
                <NavLink activeClassName="active" className={splitLocation[1] === "" ? "active" : ""} to="/about"><h5 className="nav-link">About Me</h5></NavLink> 
                <span className="circle"></span>
                <NavLink activeClassName="active" className={splitLocation[1] === "" ? "active" : ""} to="/projects"><h5 className="nav-link">Projects</h5></NavLink> 
                <span className="circle"></span>
                <NavLink activeClassName="active" className={splitLocation[1] === "" ? "active" : ""} to="/resume"><h5 className="nav-link">Resume</h5></NavLink> 
                <span className="circle"></span>
                <NavLink activeClassName="active" className={splitLocation[1] === "" ? "active" : ""} to="/contact"><h5 className="nav-link">Contact Me</h5></NavLink> 
            </div>
        </div>
     );
}
 
export default Navbar;