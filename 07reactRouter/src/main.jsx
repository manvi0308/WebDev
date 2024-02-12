import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import React from "react";
import Layout from "./Layout.jsx";
import Home from "./components/Home/Home.jsx";
import Header from "./components/Header/Header";
import "./index.css";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Profile from "./components/Profiles/Profile";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "home",
        element: <Layout />,
      },

      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "Skills",
        element: <Skills />,
      },
      {
        path: "Profiles",
        element: <Profile />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
