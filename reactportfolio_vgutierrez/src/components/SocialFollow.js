import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faLinkedin,
    faGithub
} from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow(){
    return(
        <div className="social-container"> 
        <h5> Follow Me: {"\n"}
        <a href="https://www.linkedin.com/in/vinettegutierrez/"
        classNAme= "linkedin">
        <FontAwesomeIcon icon = {faLinkedin} size="2x" />
        </a>  
        <a href="https://github.com/vinetteg"
        classNAme= "linkedin">
        <FontAwesomeIcon icon = {faGithub} size="2x" />
        </a> </h5> </div>
    );
    }