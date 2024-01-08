import gym1 from "../../../assets/images/GymImages/GYM-1.jpeg";
import gym3 from "../../../assets/images/GymImages/GYM-3.jpeg";
import gym4 from "../../../assets/images/GymImages/GYM-4.jpg";
import gym6 from "../../../assets/images/GymImages/GYM-6.jpeg";
import styles from "./GymProjectDetails.module.css";
import { Container, Card, Row, Col } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
const GymProjectDetails = () => {
  return (
    <Card className={`${styles.card} ${"text-white"}`}>
      <Card.Body className={`${styles.bgDark}`}>
        <Row>
          <Col lg={5} md={5} sm={6}>
            <Container fluid className={`${"pt-5 text-white"} `}>
              <Row>
                <h4>Project Images</h4>
              </Row>
              <Row className="mt-4">
                <Card.Img src={gym1} className="w-50" />
                <Card.Img src={gym3} className="w-50" />
                <Card.Img src={gym4} className="w-50" />
                <Card.Img src={gym6} className="w-50" />
              </Row>
            </Container>
          </Col>
          <Col lg={7} md={7} sm={6}>
            <Card.Title className="pt-5">
              <h4>Project Description</h4>
            </Card.Title>
            <Card.Body>
              <p className="my-2">
                I make this project for my strong portfolio.I gained much
                experience on Bootstrap(Basic-Advance).In,this project, I make 5
                landing pages with bootstrap."Zaibi Gym" project is
                responsivness.This was my first project in Bootstrap.
              </p>
              <h5 className="d-inline-block me-1">See on GitHub</h5>
              <Icon.ArrowRight size={20} className="me-2" />

              <a href="https://github.com/zohaib6262" target="_blank">
                <Icon.Github size={25} />
              </a>
            </Card.Body>
            <Card.Title className="pt-4">
              <h4>Technologies</h4>
            </Card.Title>
            <Card.Body>
              <ul className="list-unstyled">
                <li>HTML,CSS</li>
                <li>BOOTSTRAP</li>
                <li>RESPONSIVE LANDING PAGES</li>
              </ul>
            </Card.Body>
          </Col>
        </Row>{" "}
      </Card.Body>
    </Card>
  );
};

export default GymProjectDetails;
