import React from "react";
import gym1 from "../../../assets/images/GymImages/GYM-1.jpeg";
import gym2 from "../../../assets/images/GymImages/GYM-2.jpeg";
import gym3 from "../../../assets/images/GymImages/GYM-3.jpeg";
import gym4 from "../../../assets/images/GymImages/GYM-4.jpg";
import gym5 from "../../../assets/images/GymImages/GYM-5.webp";
import gym6 from "../../../assets/images/GymImages/GYM-6.jpeg";
import styles from "./GymProjectDetails.module.css";
import gym7 from "../../../assets/images/GymImages/gymImage.jpg";

import { CardImage } from "react-bootstrap-icons";

import { Container, Card, Row, Col, Button, Table } from "react-bootstrap";

const GymProjectDetails = () => {
  return (
    <Container className={styles.body}>
      <Card className={`${styles.card} ${"mb-3"}`}>
        <Card.Body>
          <Card.Title>Material Kit by Sherry</Card.Title>
          <Card.Subtitle
            className={`${styles.cardSubtitle} ${"mb-2 text-muted"}`}
          >
            HTML, CSS, Bootstrap
          </Card.Subtitle>
          <Row>
            <Col lg={5} md={5} sm={6}>
              <div className="white-box text-center">
                <Card.Img src={gym1} className="img-fluid" />
              </div>
            </Col>
            <Col lg={7} md={7} sm={6}>
              <Card.Title className="mt-5">Product description</Card.Title>
              <p>
                Lorem Ipsum available, but the majority have suffered alteration
                in some form, by injected humour, or randomised words which
                don't look even slightly believable. but the majority have
                suffered alteration in some form, by injected humour
              </p>

              <Button
                variant="dark"
                className="btn-rounded mr-1"
                title="Add to cart"
              >
                <i className="fa fa-shopping-cart"></i>
              </Button>
              <Button variant="primary" className="btn-rounded">
                Buy Now
              </Button>
              <Card.Title className="mt-5">Key Highlights</Card.Title>
              <ul className="list-unstyled">
                <li>
                  <i className="fa fa-check text-success"></i>Sturdy structure
                </li>
                <li>
                  <i className="fa fa-check text-success"></i>Designed to foster
                  easy portability
                </li>
                <li>
                  <i className="fa fa-check text-success"></i>Perfect furniture
                  to flaunt your wonderful collectibles
                </li>
              </ul>
            </Col>
            <Col lg={12} md={12} sm={12}>
              <Card.Title className="mt-5">General Info</Card.Title>
              <Table striped bordered hover responsive>
                <tbody>
                  <tr>
                    <td width="390">Brand</td>
                    <td>Stellar</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>{" "}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default GymProjectDetails;
