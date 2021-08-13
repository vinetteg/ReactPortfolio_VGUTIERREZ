import React from "react";
import MyResume from "../../images/resume.png";
import Button from "react-bootstrap/Button";
import "../../styles/App.css";
import ResumeDownload from "../../images/VGUTIERREZ_RESUME_5_26.docx (2).pdf";

export default function Resume() {
  return (
    <div>
      <h1>Resume Page</h1>
      <p>
        {" "}
        <img src={MyResume} alt="Resume" />
        <br />
        <a
          href={ResumeDownload}
          download="MyExampleDoc"
          target="_blank"
          rel="noreferrer"
        >
          <Button>Download a copy of my resume</Button>
        </a>
      </p>
    </div>
  );
}
