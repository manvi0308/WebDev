import React from "react";

// react-router-dom
import Layout from "./Components/Layout";
import Home from "./Components/Home";
import Blogs from "./Components/Blogs";
import NoPage from "./Components/NoPage";
import {
  BrowserRouter,
  Route,
  Routes,
} from "../node_modules/react-router-dom/dist/index";
import ReactDOM from "react-dom/client";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<Home />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="NoPage" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
