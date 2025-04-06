import Navigation from "./Navbar";
import { Container, Row, Col } from "react-bootstrap";

function Header() {
  return (
    <header className="bg-warning text-white py-3 mb-4">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={4}>
            <h1>Shauna Deleon</h1>
          </Col>
          <Col xs={12} md={8}>
            <Navigation />
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
