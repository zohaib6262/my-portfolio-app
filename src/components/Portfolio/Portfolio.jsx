import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardText,
  CardTitle,
  CardBody,
  CardImg,
} from "react-bootstrap";
import styles from "./Portfolio.module.css";
import gymImage from "../../assets/images/gymImage.jpg";
import photographyImage from "../../assets/images/photographyImage.jpg";
import travellyImage from "../../assets/images/travellingImage.jpg";
const Portfolio = () => {
  return (
    <Container
      fluid
      className={`${"d-flex justify-content-around py-5"}  ${
        styles.mainPortfolio
      }`}
    >
      <Row className="m-auto">
        <Col md={4} xxl={4} xl={4} lg={4} sm={6} className="px-5 py-4">
          <Card className={styles.card}>
            <Card.Img variant="top" src={gymImage} />
            <Card.Body>
              <Card.Title tag="h4">Gym Project</Card.Title>
              <Card.Text>
                “The body achieves what the mind believes.” – Napoleon Hill
              </Card.Text>
              <a
                href="/portfolio/gym-project-details"
                className={styles.anchorTag}
              >
                Project Details
              </a>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="px-5 py-4">
          <Card className={styles.card}>
            <Card.Img variant="top" src={travellyImage} />
            <Card.Body>
              <CardTitle tag="h4">Travelling Project</CardTitle>
              <CardText>
                “Travel far enough, you meet yourself.” ― David Mitchell
              </CardText>
              <a
                href="/portfolio/travelling-project-details"
                className={styles.anchorTag}
              >
                Project Details
              </a>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="px-5 py-4">
          <Card className={styles.card}>
            <Card.Img variant="top" src={photographyImage} />
            <Card.Body>
              <Card.Title tag="h4">Photography Project</Card.Title>
              <Card.Text>
                “Photography is the story I fail to put into words.” — Destin
                Sparks
              </Card.Text>
              <a
                href="/portfolio/photography-project-details"
                className={styles.anchorTag}
              >
                Project Details
              </a>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Portfolio;
