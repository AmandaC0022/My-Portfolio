import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <div>
            <div className="navbar-container">
                <Link className="nav-link hover-underline-animation" to="/about"><h4>About Me</h4></Link> 
                <Link className="nav-link hover-underline-animation" to="/"><h4>Projects</h4></Link> 
                <Link className="nav-link hover-underline-animation" to="/"><h4>Resume</h4></Link> 
            </div>
        </div>
     );
}
 
export default Navbar;