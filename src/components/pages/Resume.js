import React from "react";
import "../../styles/Resume.css";
import PDF from "../../assets/Resume.pdf";
// import { useNavigate } from "react-router-dom";

function Resume() {

  return (
    <section className="bg-dark">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 mx-auto text-white mb-4">
            <h1 className="text-center">Resume</h1>
            <hr className="light my-4" />
            <h3>Front-end Proficiencies</h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>jQuery</li>
              <li>Git</li>
              <li>React</li>
              <li>Bootstrap</li>
              <li>Foundation</li>
              <li>MUI</li>
            </ul>
            <h3>Back-end Proficiencies</h3>
            <ul>
              <li>APIs</li>
              <li>Node</li>
              <li>Express</li>
              <li>MySQL, Sequelize</li>
              <li>MongoDB, Mongoose</li>
              <li>REST</li>
              <li>MERN Stack</li>
            </ul>
            <p className="text-center">
              Download my{" "}
              <a href={PDF} className="text-faded white-link" download>
                resume here.
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;