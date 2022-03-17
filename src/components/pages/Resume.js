import React from "react";
import "../../styles/Resume.css";
import PDF from "../../assets/Resume.pdf";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
// import { useNavigate } from "react-router-dom";

function Resume() {

  return (
    <section class="Resume">
      <div className="container">
        <div className="row">
          <div class="ResumeHome">
            <div className="col-lg-10 mx-auto text-white mb-4 row">
              <Document onLoadError={(err) => {console.log(err)}} file={PDF}>
              <Page pageNumber={1} />
              </Document>
              <p className="text-center">
                Download my{" "}
                <a href={PDF} className="text-faded white-link" download>
                  resume
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;