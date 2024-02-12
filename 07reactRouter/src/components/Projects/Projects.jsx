import React, { useState, useRef } from "react";
import "./Projects.css";
function Projects() {
  const [projectData, setprojectData] = useState([
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png",
      title: "Data Structures and Algorithms",
      desc: "This Repository contains all the Data Structures and Algorithms implemented in Python",
      button: "View Code",
    },
    {
      url: "data:image/png;base64,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",
      title: "Web Development",
      desc: "This repo contains the code for the demo websites I made using HTML, CSS and JavaScript",
      button: "View Code",
    },
    {
      url: "data:image/png;base64,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",
      title: "Striver Tree Series",
      desc: "This Repository contains all the Tree Questions implemented in Java",
      button: "View Code",
    },
    {
      url: "https://i0.wp.com/theicom.org/wp-content/uploads/2016/03/js-logo.png?fit=500%2C500&ssl=1&w=640",
      title: "GitHub Bot",
      desc: "This repository contains code for the GitHub Bot I made using Node.js and JavaScript",
      button: "View Code",
    },
    {
      url: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
      title: "React Projects",
      desc: "This repository contains all the React Projects I made using React.js and JavaScript",
      button: "View Code",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png",
      title: "Leetcode Solutions",
      desc: "This repository contains solutions to all the Leetcode Questions implemented in Java ",
      button: "View Code",
    },
  ]);
  return (
    <>
      <div className="projectData">
        <h1>My Projects</h1>
        <div className="projectInfo">
          {projectData &&
            projectData.map((project, index) => {
              const projectRef = useRef("");
              return (
                <div className="project" key={index}>
                  <img src={project.url} alt="" />
                  <h2 ref={projectRef}>{project.title}</h2>
                  <p>{project.desc}</p>
                  <button
                    onClick={() => {
                      const projectName = projectRef.current.innerText;
                      if (projectName === "Data Structures and Algorithms") {
                        window.open(
                          "https://github.com/manvi0308/100DaysOfAlgo",
                          "_blank"
                        );
                      } else if (projectName === "Web Development") {
                        window.open(
                          "https://github.com/manvi0308/Web-development-Practice",
                          "_blank"
                        );
                      } else if (projectName === "Striver Tree Series") {
                        window.open(
                          "https://github.com/manvi0308/100DaysOfAlgo",
                          "_blank"
                        );
                      } else if (projectName === "GitHub Bot") {
                        window.open(
                          "https://github.com/manvi0308/100DaysOfAlgo",
                          "_blank"
                        );
                      } else if (projectName === "React Projects") {
                        window.open(
                          "https://github.com/manvi0308/100DaysOfAlgo",
                          "_blank"
                        );
                      } else {
                        window.open(
                          "https://github.com/manvi0308/100DaysOfAlgo",
                          "_blank"
                        );
                      }
                    }}
                  >
                    View Code
                  </button>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default Projects;
