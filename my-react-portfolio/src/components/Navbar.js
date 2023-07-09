import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
    const location = useLocation(); 
    const { pathname } = location; 
    const splitLocation = pathname.split('/'); 

    return ( 
        <div>
            <div className="navbar-container">
                <NavLink activeClassName="active" className={splitLocation[1] === "" ? "active" : ""} to="/"><h4 className="nav-link hover-underline-animation">Home</h4></NavLink>
                <NavLink activeClassName="active" to="/about"><h4 className="nav-link hover-underline-animation">About Me</h4></NavLink> 
                <NavLink activeClassName="active" to="/"><h4 className="nav-link hover-underline-animation">Projects</h4></NavLink> 
                <NavLink activeClassName="active" to="/"><h4 className="nav-link hover-underline-animation">Resume</h4></NavLink> 
            </div>
        </div>
     );
}
 
export default Navbar;