import React from "react";
import {
  Container,
  Row,
  Col,
  Image,
  Button,
  CardTitle,
  CardBody,
  Card,
} from "react-bootstrap";
import myImage from "../../../assets/images/zaibiImgae.png";
import styles from "./Banner.module.css";
import * as Icon from "react-bootstrap-icons";
import myCV from "../../../assets/myCV/ZOHAIB_ASHRAF_CV.pdf";
const Banner = () => {
  return (
    <Container fluid className={`${styles.mainBanner}`}>
      <Row>
        <Col xxl={8} xl={8} lg={8} md={8} sm={12} className="mt-5">
          <h3 className="mx-3 text-uppercase fw-bolder">
            Hi,I am <span className="text-warning">Frontend Developer</span>
          </h3>
          <p className="m-3">
            I'm
            <span className="text-warning fs-5 fw-bold"> Zohaib Ashraf. </span>
            I'm a passionate Web Developer with one and half years of experience
            in crafting responsive and user-friendly web solutions. My expertise
            lies in front-end development, and collaborating with
            cross-functional teams to deliver exceptional projects. I'm deeply
            passionate about leveraging technology to create innovative
            solutions that address real-world challenges. Throughout my career,
            I've had the privilege to work on award-winning websites and
            high-impact applications, enriching my skills and reinforcing my
            commitment to excellence.
          </p>
          <div className="mx-3">
            <Card.Title className="pt-3">
              <h4 className="text-warning">Key Skills</h4>
            </Card.Title>
            <Card.Body>
              <ul>
                <li>HTML,CSS</li>
                <li>SASS,BOOTSTRAP</li>
                <li>REACT</li>
                <li>GitHub</li>
              </ul>
            </Card.Body>
          </div>
          <div className="mx-3">
            <a href={myCV} target="_blank">
              <h5 className="d-inline-block me-3">Download CV</h5>
            </a>
            <a
              href="https://github.com/zohaib6262"
              target="_blank"
              className={styles.anchorTag}
            >
              <Icon.Github
                size={30}
                className={`${styles.gitHubColor} ${"me-3"}`}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/zohaib-ashraf-b31366240/"
              target="_blank"
              className={styles.anchorTag}
            >
              <Icon.Linkedin
                size={30}
                className={` ${styles.linkedinColor} ${"me-3"}`}
              />
            </a>
            <a
              href="https://www.facebook.com/zohaib.gujjar.31337?mibextid=ZbWKwL"
              target="_blank"
              className={styles.anchorTag}
            >
              <Icon.Facebook
                size={30}
                className={`${styles.facebookColor}
                  ${"me-3"}`}
              />
            </a>
          </div>
        </Col>
        <Col
          className="my-auto text-center"
          xxl={4}
          xl={4}
          lg={4}
          md={4}
          sm={12}
        >
          <Image
            src={myImage}
            className="bg-dark mt-5"
            roundedCircle
            width={300}
            height={300}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Banner;
