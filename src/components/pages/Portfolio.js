import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/Cardgroup";
import WhatShould from "../../images/whatshould.png";
import TakeHike from "../../images/TakeAHike1.png";
import PassGen from "../../images/PassGen.png";
import ReadMe from "../../images/readme.png";
import NoteTaker from "../../images/notetaker.png";
import Employee from "../../images/employee.png";

export default function Portfolio() {
  return (
    <div>
      <h1>Projects</h1>
      <CardGroup>
        <Card>
          <Card.Img variant="top" src={WhatShould} />
          <Card.Body>
            <Card.Title>What Should I Eat? Team Project</Card.Title>
            <Card.Text>
              What Should I Eat? is a random recipe generator. A user will
              select one of the four main ingredient buttons and a random
              recipe, including the chosen main ingredient will appear. What
              Should I Eat? was created with the idea that a user has a main
              ingredient in mind, but is in search of a few recipe options.
              <br />
              Deployed Application:{" "}
              <a
                href=" https://vinetteg.github.io/WhatShouldIEat_Project1/"
                rel="noreferrer"
              >
                {" "}
                https://vinetteg.github.io/WhatShouldIEat_Project1/
              </a>
              <br />
              Github Repository:{" "}
              <a href="https://github.com/vinetteg/WhatShouldIEat_Project1">
                https://github.com/vinetteg/WhatShouldIEat_Project1{" "}
              </a>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              Languages and Skills: JavaScript, HTML, CSS, team work
            </small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={TakeHike} />
          <Card.Body>
            <Card.Title>Take A Hike Team Project</Card.Title>
            <Card.Text>
              Take a Hike is an application that hikers can use create post of
              hikes they have taken and hikes they want to take in the future.
              Users will also be able to see other users hikes and comment on
              them.
              <br />
              Deployed Application:{" "}
              <a href=" https://lit-tor-33671.herokuapp.com" rel="noreferrer">
                {" "}
                https://lit-tor-33671.herokuapp.com
              </a>
              <br />
              Github Repository:{" "}
              <a href="https://github.com/vinetteg/TakeAHike_TeamProject2">
                https://github.com/vinetteg/TakeAHike_TeamProject2{" "}
              </a>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              Laguages and Skills: Javascript, HTML, CSS, Bootsrap, MySQL,Heroku{" "}
            </small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={PassGen} />
          <Card.Body>
            <Card.Title>Password Generator</Card.Title>
            <Card.Text>
              This is a fully functioning password generator. It can produce
              passwords that include uppercase letters, lower case letters,
              numbers and special characters that can be anywhere from 8-128
              characters long. Push the "Generate Passwoord," button to try it
              out!
              <br />
              Deployed Application:{" "}
              <a
                href="https://vinetteg.github.io/VGUTIERREZ_Password_Genorator/"
                rel="noreferrer"
              >
                {" "}
                https://vinetteg.github.io/VGUTIERREZ_Password_Genorator/
              </a>
              <br />
              Github Repository:{" "}
              <a href="https://github.com/vinetteg/VGUTIERREZ_Password_Genorator">
                https://github.com/vinetteg/VGUTIERREZ_Password_Genorator{" "}
              </a>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              Languages: Javascript, HTML, CSS
            </small>
          </Card.Footer>
        </Card>
      </CardGroup>
      <CardGroup>
        <Card>
          <Card.Img variant="top" src={ReadMe} />
          <Card.Body>
            <Card.Title>README Generator</Card.Title>
            <Card.Text>
              This README generator is a command line application that will help
              build a basic readme file for any project using node.js. This will
              allow a creator to spend more time working on their project.
              <br />
              Video Demo:{" "}
              <a
                href="https://www.youtube.com/watch?v=dV2_mTiKYO4&t=39s"
                rel="noreferrer"
              >
                {" "}
                https://www.youtube.com/watch?v=dV2_mTiKYO4&t=39s
              </a>
              <br />
              Github Repository:{" "}
              <a href="https://github.com/vinetteg/VGUTIERREZ_README_GENERATOR">
                https://github.com/vinetteg/VGUTIERREZ_README_GENERATOR{" "}
              </a>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Languages: Javascript</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={NoteTaker} />
          <Card.Body>
            <Card.Title>Notetaker</Card.Title>
            <Card.Text>
              This notetaker was made for a small business owner who wanted to
              keep track of tasks that were needed to make sure the business
              stayed up to date. It can also be used by anyone looking to
              organize their thoughts and keep track of any tasks.
              <br />
              Video Demo:{" "}
              <a
                href="https://www.youtube.com/watch?v=_kb5rKS2s0k"
                rel="noreferrer"
              >
                {" "}
                https://www.youtube.com/watch?v=_kb5rKS2s0k
              </a>
              <br />
              Github Repository:{" "}
              <a href="https://github.com/vinetteg/mySQL_employeeTracker_VGUTIERREZ">
                https://github.com/vinetteg/mySQL_employeeTracker_VGUTIERREZ{" "}
              </a>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              Languages and Skills: Javascript, HTML, CSS, Npm packages
            </small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={Employee} />
          <Card.Body>
            <Card.Title>Employee Tracker</Card.Title>
            <Card.Text>
              This employee tracker is meant to help a business keep track of
              departments, roles and employees.
              <br />
              Video Demo:{" "}
              <a
                href="https://www.youtube.com/watch?v=rg2Db83Oc_s"
                rel="noreferrer"
              >
                {" "}
                https://www.youtube.com/watch?v=rg2Db83Oc_s
              </a>
              <br />
              Github Repository:{" "}
              <a
                href="https://github.com/vinetteg/mySQL_employeeTracker_VGUTIERREZ"
                rel="noreferrer"
              >
                https://github.com/vinetteg/mySQL_employeeTracker_VGUTIERREZ{" "}
              </a>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              Languages and Skills: Javascript{" "}
            </small>
          </Card.Footer>
        </Card>
      </CardGroup>
    </div>
  );
}
