import { Container, Row, Col, Button } from "react-bootstrap";

function Resume() {
  return (
    <Container className="my-5">
      <Row className="mb-5">
        <Col>
          <h1>My Resume</h1>
          <Button
            variant="primary"
            href="/path-to-your-resume.pdf"
            target="_blank"
            download
          >
            Download Full Resume
          </Button>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col>
          <h2>Skills</h2>
          <ul>
            <li>JavaScript (React, Node.js)</li>
            <li>HTML5 & CSS3</li>
            <li>Python</li>
            <li>SQL</li>
            <li>Git</li>
          </ul>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col>
          <h2>Experience</h2>
          <h3>Software Developer - XYZ Company</h3>
          <p>June 2020 - Present</p>
          <ul>
            <li>
              Developed and maintained web applications using React and Node.js
            </li>
            <li>
              Collaborated with design team to implement responsive UI designs
            </li>
            <li>
              Optimized application performance, reducing load times by 30%
            </li>
          </ul>
        </Col>
      </Row>

      <Row>
        <Col>
          <h2>Education</h2>
          <h3>Bachelor of Science in Computer Science</h3>
          <p>University of Technology, Graduated May 2020</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Resume;
