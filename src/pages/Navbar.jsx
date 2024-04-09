import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="md" className="bg-body-tertiary mb-5">
      <Container>
        <Nav className="w-75 d-flex justify-content-evenly flex-wrap m-auto p-5 fw-bolder">
        <NavLink to="/" className="text-decoration-none text-warning">ClarusWay</NavLink>
        <NavLink to="/home" className="text-decoration-none text-warning">Home</NavLink>
        <Link to="/about" className="text-decoration-none text-warning">About</Link>
        <Link to="/contact" className="text-decoration-none text-warning">Contact</Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
