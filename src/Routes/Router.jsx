import React from "react";
import Main from "../components/Main/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "../components/NavBar/Navbar";
import Portfolio from "../components/Portfolio/Portfolio";
import GymProjectDetails from "../components/Portfolio/GymProjectDetails/GymProjectDetails";
import PhotoGraphyProjectDetails from "../components/Portfolio/PhotoGraphyProjectDetails/PhotoGraphyProjectDetails";
import TravellingProjectDetails from "../components/Portfolio/TravellingProjectDetails/TravellingProjectDetails";
import "../assets/globalStyles/globalStyles.css";
const Router = () => {
  return (
    <div>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route
            path="/portfolio/gym-project-details"
            element={<GymProjectDetails />}
          />
          <Route
            path="/portfolio/photography-project-details"
            element={<PhotoGraphyProjectDetails />}
          />
          <Route
            path="/portfolio/travelling-project-details"
            element={<TravellingProjectDetails />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
