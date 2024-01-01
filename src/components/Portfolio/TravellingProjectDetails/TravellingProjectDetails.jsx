import photo1 from "../../../assets/images/TravellyImages/contact-mountain.png";
import photo2 from "../../../assets/images/TravellyImages/landing-page.jpg";
import styles from "./TravellingProjectDetails.module.css";
import { Container, Card, Row, Col, Button } from "react-bootstrap";
const TravellingProjectDetails = () => {
  return (
    <Card className={`${styles.card} ${"text-white"}`}>
      <Card.Body className={`${styles.bgDark}`}>
        <Card.Title>
          Project Name:
          <span>
            <h3 className="d-inline">ZAIBI GYM</h3>
          </span>
        </Card.Title>
        <Row>
          <Col lg={5} md={5} sm={6}>
            <Container className={`${"mt-5 text-white text-center"} `}>
              <h2>Project Images</h2>
              <Container className="mt-4">
                <Card.Img src={photo1} className="w-50" />
                <Card.Img src={photo2} className="w-50" />
              </Container>
            </Container>
          </Col>
          <Col lg={7} md={7} sm={6}>
            <Card.Title className="mt-5">
              <h2>Project Description</h2>
            </Card.Title>
            <Card.Body>
              <p className="m-2">
                I make this project for my strong portfolio.I gained much
                experience on Bootstrap(Basic-Advance).In,this project, I make 5
                landing pages with bootstrap."Zaibi Gym" project is
                responsivness.This was my first project in Bootstrap.
              </p>
              <a href="https://github.com/zohaib6262" target="_blank">
                <Button>See On GitHub</Button>
              </a>
            </Card.Body>
            <Card.Title className="mt-5">
              <h2>Key Highlights</h2>
            </Card.Title>
            <Card.Body>
              <ul className="list-unstyled">
                <li>
                  <i className="fa fa-check text-success"></i>Sturdy structure
                </li>
                <li>
                  <i className="fa fa-check text-success"></i>Designed to foster
                  easy portability
                </li>
              </ul>
            </Card.Body>
          </Col>
        </Row>{" "}
      </Card.Body>
    </Card>
  );
};

export default TravellingProjectDetails;
