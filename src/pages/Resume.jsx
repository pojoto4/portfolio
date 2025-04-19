import { Container, Row, Col, Button } from "react-bootstrap";

function Resume() {
  return (
    <Container className="my-5">
      <Row className="mb-5">
        <Col>
          <h1>My Resume</h1>
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
          <h4>Project Manager</h4>
          <p>June 2020 - Present</p>
          <ul>
            <li>
              Created and maintained efficient project workflows and
              communication processes, ensuring clarity on project milestones
              and next steps among internal and external teams
            </li>
            <li>
              Collaborated consistently with major departments including Legal,
              IT, HR, Finance, Marketing, Communications, Corporate Social
              Responsibility, Talent Acquisition, and Information Security
            </li>
            <li>
              Organized feedback from stakeholders and incorporated them into
              project revisions, tracking versioning with designated software
              platforms (Wrike and MediaSilo)
            </li>
          </ul>
        </Col>
      </Row>

      <Row>
        <Col>
          <h2>Education</h2>
          <h4>Bachelor of Arts in Psychology</h4>
          <p>Simmons College, Graduated May 2014</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Resume;
