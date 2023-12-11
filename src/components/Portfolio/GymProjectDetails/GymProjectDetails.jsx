import React from "react";
import gym1 from "../../../assets/images/GymImages/GYM-1.jpeg";
import gym2 from "../../../assets/images/GymImages/GYM-2.jpeg";
import gym3 from "../../../assets/images/GymImages/GYM-3.jpeg";
import gym4 from "../../../assets/images/GymImages/GYM-4.jpg";
import gym5 from "../../../assets/images/GymImages/GYM-5.webp";
import gym6 from "../../../assets/images/GymImages/GYM-6.jpeg";
import styles from "./GymProjectDetails.module.scss";
import gym7 from "../../../assets/images/GymImages/gymImage.jpg";

import { Container, Row, Col } from "react-bootstrap";
import { CardImage } from "react-bootstrap-icons";

const GymProjectDetails = () => {
  return (
    <div>
      <section class="container">
        <div class="back">
          <a class="btn" href="">
            Back To Movies
          </a>
        </div>
        <div id="movie-details">
          <div className={styles.overlayDiv}></div>
        </div>
        <div>
          <div className={styles.detailsTop}>
            <div>
              <img src={gym7} className={styles.CardImageTop} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default GymProjectDetails;
