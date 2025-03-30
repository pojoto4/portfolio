import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <Nav className="justify-content-end">
      <Nav.Item>
        <Nav.Link
          as={NavLink}
          to="/about"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          About Me
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          as={NavLink}
          to="/portfolio"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Portfolio
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          as={NavLink}
          to="/contact"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Contact
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          as={NavLink}
          to="/resume"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Resume
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Navigation;
