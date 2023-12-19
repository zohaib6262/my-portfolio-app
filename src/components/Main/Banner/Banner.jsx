import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import myImage from "../../../assets/images/zaibiImgae.png";
import styles from "./Banner.module.css";
import * as Icon from "react-bootstrap-icons";
import myCV from "../../../assets/myCV/CV.pdf";
const Banner = () => {
  return (
    <Container className={`${styles.mainBanner} ${"fluid"}`}>
      <Row
        className=" justify-content-xxl-around justify-content-xl-around justify-content-lg-around
        justify-content-md-around align-items-xxl-around"
      >
        <Col xl={6} lg={6} md={6} className="mt-5">
          <h3 className="mx-3 text-uppercase fw-bolder">
            Hi,I am <span className="text-warning">Zohaib Ashraf</span>
          </h3>
          <p className="m-3">
            Hi,My name is Zohaib Ashraf.Since,2021 I am studying at{" "}
            <span className="fw-bolder">
              PIR MEHER ALI SHAH ARID AGRICULTURE UNIVERSITY
            </span>
            (PMAS).I am studying at PMAS in Computer Science department. Now I
            am in 5th Semester of Computer Science degree.Basically,I am
            intrested in Web Development so, I create own my this Portfolio.I
            have 1.5 years of experience in Web Development.I can create Web
            Applications in such a good way.I have hands of practice with
            projects in basic's like "HTML5","CSS3","SASS","BOOTSTRAP"
            technologies and other "JAVASCRIPT" and learnt JS library "React".If
            you can get more details about me then see my projects in portfolio
            section and download my CV.
          </p>
          <h5 className="mx-3">
            <a href={myCV} target="_blank">
              Download CV
            </a>
          </h5>
          <h2 className="mx-3">
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
          </h2>
        </Col>
        <Col className="my-auto text-center" xl={6} lg={6} md={6}>
          <Image
            src={myImage}
            className="bg-dark "
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
