import '../index.css';

import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";
import pokelogo from "./pokelogo.png";

const Navbars = () => {
    return (
    <Navbar className="d-flex justify-content-between px-5" bg="primary" variant="ligth">
        
          <Navbar.Brand><img src={pokelogo} width="150px"alt=""/></Navbar.Brand>

          <div className="d-flex links">
            <NavLink className = { ({ isActive }) => (isActive ? "active" : undefined)} to="/">Home</NavLink> 
            <NavLink className = { ({ isActive }) => (isActive ? "active" : undefined)} to="/Pokemon">{"   "}Pokemon{"   "}</NavLink>
          </div>
       
      </Navbar>
    );
}
export default Navbars;


