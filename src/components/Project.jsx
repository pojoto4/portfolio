import PropTypes from "prop-types";
import { Card, Button } from "react-bootstrap";

function Project({ title, description, image, githubLink }) {
  return (
    <Card className="h-100 shadow-sm">
      <div
        className="card-image-top"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "300px",
        }}
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
      <Card.Footer className="bg-white border-0">
        <Button variant="dark" href={githubLink} target="_blank">
          Check it out on GitHub
        </Button>
      </Card.Footer>
    </Card>
  );
}

Project.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  githubLink: PropTypes.string.isRequired,
};

export default Project;
