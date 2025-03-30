import { Container, Row, Col } from "react-bootstrap";
import Project from "../components/Project";

function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Project One",
      description: "A brief description of your first project",
      image: "/images/project1.jpg",
      demoLink: "https://demo-link-1.com",
      githubLink: "https://github.com/pojoto4/employeeTracker",
    },
    {
      id: 2,
      title: "Project Two",
      description: "A brief description of your second project",
      image: "/images/project2.jpg",
      demoLink: "https://demo-link-2.com",
      githubLink: "https://github.com/pojoto4/mindlessLounge",
    },
  ];

  return (
    <section className="portfolio-section py-5">
      <Container>
        <h2 className="text-center mb-5">My Projects</h2>
        <Row xs={1} md={2} lg={3} className="g-4">
          {projects.map((project) => (
            <Col key={project.id}>
              <Project
                title={project.title}
                description={project.description}
                image={project.image}
                demoLink={project.demoLink}
                githubLink={project.githubLink}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Portfolio;
