import { Card, Button } from "react-bootstrap";

function Project({ title, description, image, demoLink, githubLink }) {
  return (
    <Card className="h-100 shadow-sm">
      <Card.Img variant="top" src={image} alt={title} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
      <Card.Footer className="bg-white border-0">
        <Button
          variant="primary"
          href={demoLink}
          target="_blank"
          className="me-2"
        >
          Demo
        </Button>
        <Button variant="dark" href={githubLink} target="_blank">
          GitHub
        </Button>
      </Card.Footer>
    </Card>
  );
}

export default Project;
