import React from "react";
import {
  Button,
  Card,
  CardGroup,
  CardBody,
  CardImg,
  CardTitle,
  CardText,
} from "react-bootstrap";
import styles from "./Portfolio.module.scss";
import gymImage from "../../assests/images/gymImage.jpg";
import photographyImage from "../../assests/images/photographyImage.jpg";
import travellyImage from "../../assests/images/travellingImage.jpg";

const Portfolio = () => {
  return (
    <div className={styles.mainPortfolio}>
      <div className="d-inline-block w-100 h-40vh bg-white">
        <CardGroup className="m-5">
          <Card className="w-75 h-50 mx-5">
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
              <Button variant="warning ">
                <a
                  href="/portfolio/gym-project-details"
                  className={styles.anchorTag}
                >
                  Project Details
                </a>
              </Button>
            </CardBody>
          </Card>
          <Card className="w-75 h-50 mx-5">
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
              <Button variant="warning ">
                <a
                  href="/portfolio/travelling-project-details"
                  className={styles.anchorTag}
                >
                  Project Details
                </a>
              </Button>
            </CardBody>
          </Card>
          <Card className="w-75 h-50 mx-5">
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
              <Button variant="warning ">
                <a
                  href="/portfolio/photography-project-details"
                  className={styles.anchorTag}
                >
                  Project Details
                </a>
              </Button>
            </CardBody>
          </Card>
        </CardGroup>
      </div>
    </div>
  );
};

export default Portfolio;
