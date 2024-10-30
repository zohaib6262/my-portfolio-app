import React from "react";
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import myImage from "../../../assets/images/zaibiImgae.png";
import styles from "./Banner.module.css";
import * as Icon from "react-bootstrap-icons";
import myCV from "../../../assets/myCV/ZOHAIB_ASHRAF_CV.pdf";

const Banner = () => {
  return (
    <Container fluid className={`${styles.mainBanner} p-0 pt-5 `}>
      <Row className="m-0">
        <Col xxl={8} xl={8} lg={8} md={12} sm={12} className="py-2 pb-5">
          <section className="mx-3">
            <h3 className="text-uppercase fw-bolder">
              Hi, I am <span className="text-warning">Frontend Developer</span>
            </h3>
            <p className="lh-md">
              My name is{" "}
              <span className="text-warning fs-5 fw-bold">Zohaib Ashraf</span>.
              I'm a Web Developer specializing in front-end development and
              UI/UX design. With over 2 years of experience, I've worked on
              award-winning websites and applications that enhance user
              experiences.
            </p>
            <p className="lh-md">
              I pride myself on translating complex requirements into elegant,
              intuitive designs. I'm always eager to take on new challenges and
              explore innovative solutions.
            </p>
            <p className="lh-md">
              I invite you to explore my portfolio to see my work and skills. If
              you're interested in collaboration, I'd love to connect!
            </p>
            {/* <h3 className="mx-3 text-uppercase fw-bolder">
              Hi, I am <span className="text-warning">Frontend Developer</span>
            </h3>
            <p className="m-3 lh-md">
              My name is{" "}
              <span className="text-warning fs-5 fw-bold">Zohaib Ashraf</span>.
              I'm a Web Developer specializing in front-end development and
              UI/UX design. With over 2 years of experience in the industry,
              I've had the opportunity to work on award-winning websites and
              innovative applications that have transformed user experiences.
              I'm deeply passionate about creating innovative solutions and
              delivering exceptional user experiences. I believe in
              collaboration, continuous learning, and user-centered design, and
              I strive to make a positive impact in everything I do.
            </p>

            <p className="m-3 lh-md">
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

            <p className="m-3 lh-md">
              I invite you to explore my portfolio to see examples of my work
              and learn more about my skills, experience, and achievements.
              Whether you're interested in web development, UI/UX design, or
              project collaborations, I'm excited to connect and discuss how we
              can create something amazing together. If you have any questions
              or if you're interested in working together, I'd love to hear from
              you. Feel free to send me a message or view my services to stay
              updated on my latest projects and insights.
            </p> */}
          </section>

          <Card.Title className="mx-3 pt-3">
            <h5 className="text-warning text-uppercase fw-bolder">
              Programming Languages
            </h5>
          </Card.Title>
          <Card.Body className="mx-3 pt-3">
            <ul className={`list-unstyled ${styles.languageList}`}>
              <li className={`${styles.languageItem} mb-4`}>
                <h6 className="fw-bolder text-lg">Frontend Languages</h6>
                <ul>
                  <li className="flex items-center">
                    <Icon.FiletypeHtml size={20} color="red" className="m-2" />
                    <span className="text-gray-700">HTML</span>
                  </li>
                  <li className="flex items-center">
                    <Icon.FiletypeCss size={20} color="blue" className="m-2" />
                    <span className="text-gray-700">CSS</span>
                  </li>
                  <li className="flex items-center">
                    <Icon.FiletypeSass size={20} color="pink" className="m-2" />
                    <span className="text-gray-700">SASS</span>
                  </li>
                  <li className="flex items-center">
                    <Icon.FiletypeJsx size={20} color="blue" className="m-2" />
                    <span className="text-gray-700">React JS</span>
                  </li>
                  <li className="flex items-center">
                    <Icon.FiletypeCss
                      size={20}
                      color="purple"
                      className="m-2"
                    />
                    <span className="text-gray-700">Bootstrap</span>
                  </li>
                  <li className="flex items-center">
                    <Icon.FiletypeCss size={20} color="teal" className="m-2" />
                    <span className="text-gray-700">Tailwind CSS</span>
                  </li>
                </ul>
              </li>
              <li className={`${styles.languageItem} mb-4`}>
                <h6 className="fw-bolder text-lg">Version Control</h6>
                <ul>
                  <li className="flex items-center">
                    <Icon.Github size={20} color="black" className="m-2" />
                    <span className="text-gray-700">GitHub</span>
                  </li>
                  <li className="flex items-center">
                    <Icon.Upload size={20} color="blue" className="m-2" />
                    <span className="text-gray-700">Vercel</span>
                  </li>
                </ul>
              </li>
            </ul>
          </Card.Body>

          <div className="mx-3">
            <a href={myCV} target="_blank" rel="noopener noreferrer">
              <h5 className="d-inline-block me-3 text-warning">
                Curriculum Vitae
              </h5>
            </a>
            <a
              href="https://github.com/zohaib6262"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.anchorTag}
            >
              <Icon.Github size={30} className={`${styles.gitHubColor} me-3`} />
            </a>
            <a
              href="https://www.linkedin.com/in/zohaib-ashraf-b31366240/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.anchorTag}
            >
              <Icon.Linkedin
                size={30}
                className={`${styles.linkedinColor} me-3`}
              />
            </a>
            <a
              href="https://www.facebook.com/zohaib.gujjar.31337?mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.anchorTag}
            >
              <Icon.Facebook
                size={30}
                className={`${styles.facebookColor} me-3`}
              />
            </a>
          </div>
        </Col>

        <Col
          className="d-flex justify-content-center align-items-center my-auto"
          xxl={4}
          xl={4}
          lg={4}
          md={12}
          sm={12}
        >
          <Image
            src={myImage}
            className="bg-dark"
            roundedCircle
            width={350}
            height={350}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Banner;
