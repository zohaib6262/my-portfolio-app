import React from "react";
import {
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardText,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import styles from "./Portfolio.module.css";
import gymImage from "../../assets/images/gymImage.jpg";
import photographyImage from "../../assets/images/photographyImage.jpg";
import travellyImage from "../../assets/images/travellingImage.jpg";

const Portfolio = () => {
  return (
    <Container fluid className={styles.mainPortfolio}>
      <Row className={`${styles.row}`}>
        <Col xxl={4} xl={4} lg={4} md={4} sm={6}>
          <Card className={`${"w-75 h-55 my-5 "}`}>
            <CardImg
              alt="Card image cap"
              src={gymImage}
              top
              width="100%"
              height="35%"
            />
            <CardBody>
              <CardTitle tag="h4">Gym Project</CardTitle>
              <CardText>
                “The body achieves what the mind believes.” – Napoleon Hill
              </CardText>
              {/* <Button variant="warning "> */}
              <a
                href="/portfolio/gym-project-details"
                className={styles.anchorTag}
              >
                Project Details
              </a>
              {/* </Button> */}
            </CardBody>
          </Card>
        </Col>
        <Col xxl={4} xl={4} lg={4} md={4} sm={6}>
          <Card className="w-75 h-55 my-5">
            <CardImg
              alt="Card image cap"
              src={travellyImage}
              top
              width="100%"
              height="35%"
            />
            <CardBody>
              <CardTitle tag="h4">Travelling Project</CardTitle>
              <CardText>
                “Travel far enough, you meet yourself.” ― David Mitchell
              </CardText>
              {/* <Button variant="warning "> */}
              <a
                href="/portfolio/travelling-project-details"
                className={styles.anchorTag}
              >
                Project Details
              </a>
              {/* </Button> */}
            </CardBody>
          </Card>
        </Col>
        <Col xxl={4} xl={4} lg={4} md={4} sm={6}>
          <Card className="w-75 h-55 my-5">
            <CardImg
              alt="Card image cap"
              src={photographyImage}
              top
              width="100%"
              height="35%"
            />
            <CardBody className="h-40">
              <CardTitle tag="h4">Photography Project</CardTitle>
              <CardText>
                “Photography is the story I fail to put into words.” — Destin
                Sparks
              </CardText>
              {/* <Button variant="warning "> */}
              <a
                href="/portfolio/photography-project-details"
                className={styles.anchorTag}
              >
                Project Details
              </a>
              {/* </Button> */}
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Portfolio;
