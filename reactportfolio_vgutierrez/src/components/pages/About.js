import React from "react";
import Photo from "./../../images/IMG_5790.jpeg";

export default function About() {
  return (
    <div>
      <h1>About Me</h1>
      <img src={Photo} alt="Vinette G." />
      <br />
      <p>
        My name is Vinette Gutierrez. I'm an aspiring keyboard magician and web
        developer. I'm learning full stack web developement at the University of
        Washington. I'm interested in turning coding into a career.
        <br />
        <br />
        Outside of coding and web development, I currently work in Customer
        Success. I am a certified yoga instructor, sound designer, advanced
        Google searcher and black coffee enthusiast.
      </p>
    </div>
  );
}
