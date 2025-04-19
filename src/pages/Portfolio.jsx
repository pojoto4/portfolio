import { useState, useEffect } from "react";
import Project from "../components/Project";
import { Container, Row, Col } from "react-bootstrap";

function Portfolio() {
  const [isLoading, setIsLoading] = useState(true);

  const projects = [
    {
      title: "README Generator",
      description: "A command-line application that generates a README file",
      image:
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1737504143275/d8e518ff-3f72-4147-9923-53588bfcf839.png",
      githubLink: "https://github.com/pojoto4/READMEGenerator",
    },
    {
      title: "Mindless Lounge",
      description: "A fake social media website where you can post thoughts",
      image:
        "https://cdn4.iconfinder.com/data/icons/car-accident-2/512/distracted-brain-mind-head-person-512.png",
      githubLink: "https://github.com/pojoto4/mindlessLounge",
    },
    {
      title: "Employee Tracker",
      description:
        "This is a command-line application that helps keep track of employees and their roles, salaries, departments and managers",
      image:
        "https://tivazo.com/wp-content/uploads/2024/07/employee-monitoring-software-1.png",
      githubLink: "https://github.com/pojoto4/employeetracker",
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="projects" className="py-5">
      <Container>
        <h2 className="text-center mb-4">My GitHub Projects</h2>

        {isLoading ? (
          <p className="text-center">Loading projects...</p>
        ) : (
          <Row xs={1} md={2} lg={3} className="g-4">
            {projects.map((project, index) => (
              <Col key={index}>
                <Project {...project} />
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </section>
  );
}

export default Portfolio;
