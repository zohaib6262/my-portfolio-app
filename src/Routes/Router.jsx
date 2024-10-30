import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../components/Main/Main";
import NavBar from "../components/NavBar/Navbar"; // You might want to include this in RootLayout
import Portfolio from "../components/Portfolio/Portfolio";
import GymProjectDetails from "../components/Portfolio/GymProjectDetails/GymProjectDetails";
import PhotoGraphyProjectDetails from "../components/Portfolio/PhotoGraphyProjectDetails/PhotoGraphyProjectDetails";
import TravellingProjectDetails from "../components/Portfolio/TravellingProjectDetails/TravellingProjectDetails";
import RootLayout from "../components/RootLayout/RootLayout";
import PortfolioRootLayout from "../components/Portfolio/PortfolioRootLayout/PortfolioRootLayout";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Main />,
        },
        {
          path: "portfolio",
          element: <PortfolioRootLayout />,
          children: [
            {
              index: true,
              element: <Portfolio />,
            },
            { path: "gym-project-details", element: <GymProjectDetails /> },
            {
              path: "photography-project-details",
              element: <PhotoGraphyProjectDetails />,
            },
            {
              path: "travelling-project-details",
              element: <TravellingProjectDetails />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
