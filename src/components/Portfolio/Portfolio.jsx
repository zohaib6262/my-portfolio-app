import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import styles from "./Portfolio.module.css";
import gymImage from "../../assets/images/gymImage.jpg";
import photographyImage from "../../assets/images/photographyImage.jpg";
import travellingImage from "../../assets/images/travellingImage.jpg";
import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <Container
      className={`${styles.mainPortfolio} d-flex justify-content-center pt-5`}
    >
      <Row className="justify-content-center">
        <Col md={6} xxl={4} xl={4} lg={4} sm={12} className="py-5 px-5">
          <Card className={styles.card}>
            <Card.Img variant="top" src={gymImage} />
            <Card.Body>
              <Card.Title tag="h4">Gym Project</Card.Title>
              <Card.Text>
                “The body achieves what the mind believes.” – Napoleon Hill
              </Card.Text>
              <Link
                to="/portfolio/gym-project-details"
                className={styles.anchorTag}
              >
                Project Details
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} xxl={4} xl={4} lg={4} sm={12} className="py-5 px-5">
          <Card className={styles.card}>
            <Card.Img variant="top" src={travellingImage} />
            <Card.Body>
              <Card.Title tag="h4">Travelling Project</Card.Title>
              <Card.Text>
                “Travel far enough, you meet yourself.” ― David Mitchell
              </Card.Text>
              <Link
                to="/portfolio/travelling-project-details"
                className={styles.anchorTag}
              >
                Project Details
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} xxl={4} xl={4} lg={4} sm={12} className="py-5 px-5">
          <Card className={styles.card}>
            <Card.Img variant="top" src={photographyImage} />
            <Card.Body>
              <Card.Title tag="h4">Photography Project</Card.Title>
              <Card.Text>
                “Photography is the story I fail to put into words.” — Destin
                Sparks
              </Card.Text>
              <Link
                to="/portfolio/photography-project-details"
                className={styles.anchorTag}
              >
                Project Details
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Portfolio;
