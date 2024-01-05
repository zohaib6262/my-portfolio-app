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
    <section className={`${styles.mainBanner}`}>
      <Container fluid>
        <Row>
          <Col xxl={7} xl={7} lg={7} md={12} sm={12} className="mt-5">
            <h3 className="mx-3 text-uppercase fw-bolder">
              Hi,I am <span className="text-warning">Frontend Developer</span>
            </h3>
            <p className="m-3 lh-lg">
              My name is
              <span className="text-warning fs-5 fw-bold">
                {" "}
                Zohaib Ashraf.{" "}
              </span>
              I'm a Web Developer specializing in front-end development and
              UI/UX design. With over 5 years of experience in the industry,
              I've had the opportunity to work on award-winning websites and
              innovative applications that have transformed user experiences.
              I'm deeply passionate about creating innovative solutions and
              delivering exceptional user experiences. I believe in
              collaboration, continuous learning, and user-centered design, and
              I strive to make a positive impact in everything I do.
            </p>

            <p className="m-3 lh-lg">
              Throughout my career, I've had the privilege to work on a diverse
              range of projects, from building interactive websites and
              applications for startups to collaborating on large-scale projects
              for established organizations. I take pride in my ability to
              translate complex requirements into elegant and intuitive designs,
              and my work has been recognized for its creativity, innovation,
              and impact. I'm always excited to take on new challenges and
              explore innovative solutions that push the boundaries of what's
              possible in web development.
            </p>
            <p className="m-3 lh-lg">
              I invite you to explore my portfolio to see examples of my work
              and learn more about my skills, experience, and achievements.
              Whether you're interested in web development, UI/UX design, or
              project collaborations, I'm excited to connect and discuss how we
              can create something amazing together. If you have any questions,
              or if you're interested in working together, I'd love to hear from
              you. Feel free to send me a message or view my services to stay
              updated on my latest projects and insights.
            </p>
            <div className="mx-3">
              <Card.Title className="pt-3">
                <h4 className="text-warning text-uppercase fw-bolder">
                  Programming Languages
                </h4>
              </Card.Title>
              <Card.Body>
                <ul className="">
                  <h5 className="fw-bolder">Frontend Languages</h5>
                  <ul>
                    <li>HTML,CSS</li>
                  </ul>
                  <h5 className="fw-bolder">Frontend CSS Preprosessor</h5>
                  <ul>
                    <li>SASS</li>
                  </ul>
                  <h5 className="fw-bolder">Frontend CSS Framework</h5>
                  <ul>
                    <li>BOOTSTRAP</li>
                  </ul>
                  <h5 className="fw-bolder">Frontend Framework</h5>
                  <ul>
                    <li>React JS</li>
                  </ul>
                  <h5>Version Control</h5>
                  <ul>
                    <li>Git Hub</li>
                    <li>Vercel</li>
                  </ul>
                </ul>
              </Card.Body>
            </div>
            <div className="mx-3">
              <a href={myCV} target="_blank">
                <h5 className="d-inline-block me-3 text-warning">
                  Curriculum Vitae
                </h5>
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
            xxl={5}
            xl={5}
            lg={5}
            md={12}
            sm={12}
          >
            <Image
              src={myImage}
              className="bg-dark mt-5"
              roundedCircle
              width={350}
              height={350}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
