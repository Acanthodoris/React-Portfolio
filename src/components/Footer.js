import React from "react";
import "../styles/Footer.css";


function Footer() {
  return (
    <section className="footer">
      <div className="d-flex justify-content-space-evenly flex-direction-row">
          <div>
            <a class="footer" href="https://www.linkedin.com/in/rebeccah-may/" target="_blank">
              <p>LinkedIn</p>
            </a>
          </div>
          <div>
            <a href="https://github.com/Acanthodoris" target="_blank">
              <p>GitHub</p>
            </a>
          </div>
      </div>
    </section>
  );
}

export default Footer;