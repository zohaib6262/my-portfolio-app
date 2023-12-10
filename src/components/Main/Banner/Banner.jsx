import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import myImage from "../../../assests/images/zaibiImgae.png";
import styles from "./Banner.module.scss";
import * as Icon from "react-bootstrap-icons";
const Banner = () => {
  return (
    <div className={`${styles.mainBanner} `}>
      <Container fluid as={Row}>
        <Row className="my-5">
          <Col xl={6} lg={6} md={6} className="my-auto">
            <h3 className=" text-uppercase fw-bolder">
              Hi,I am <span className="text-warning">Zohaib Ashraf</span>
            </h3>
            <p className=" m-3">
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
              technologies and other "JAVASCRIPT" and learnt JS library
              "React".If you can get more details about me then see my projects
              in portfolio section and download my CV.
            </p>
            <h5 className=" m-4">
              <a
                href="../../../assests/myCV/CV.pdf"
                download="zaibi-pdf-file.pdf"
              >
                Download CV
              </a>
            </h5>
            <h2 className=" m-4">
              <a href="https://github.com/zohaib6262" target="_blank">
                <Icon.Github
                  size={30}
                  className={`${styles.gitHubColor} ${"me-3"}`}
                />
              </a>
              <a
                href="https://www.linkedin.com/in/zohaib-ashraf-b31366240/"
                target="_blank"
              >
                <Icon.Linkedin
                  size={30}
                  className={` ${styles.linkedinColor} ${"me-3"}`}
                />
              </a>
              <a
                href="https://www.facebook.com/zohaib.gujjar.31337?mibextid=ZbWKwL"
                target="_blank"
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
            <Image src={myImage} className="bg-dark w-50 h-5 " roundedCircle />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
