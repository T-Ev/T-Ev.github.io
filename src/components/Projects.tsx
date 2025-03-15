import React from "react";
import { Card, Row, Col, Button } from "react-bootstrap";

const Projects: React.FC = () => {
  return (
    <div>
      <h1 className="text-center mb-4">My Projects</h1>
      <Row xs={1} md={2} lg={3} className="g-4">
        {/* Example project card */}
        <Col>
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <Card.Title>Project Title</Card.Title>
              <Card.Text>Project description goes here. This is a brief overview of what the project is about.</Card.Text>
              <div className="d-flex justify-content-around mt-auto">
                <Button variant="primary" href="#" className="me-2">
                  View Project
                </Button>
                <Button variant="outline-secondary" href="#">
                  GitHub
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Projects;
