import React from "react";
// Here we are importing a CSS file as a dependency
import "../styles/Footer.css";
import SocialFollow from "./SocialFollow"



function Footer() {
  return (
    <footer className="footer">
      <SocialFollow />
    </footer>
  );
}

export default Footer;

