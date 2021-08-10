import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faLinkedin,
    faGithub,
    faInstagram
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
        classNAme= "github">
        <FontAwesomeIcon icon = {faGithub} size="2x" />
        </a> 
        <a href="https://www.instagram.com/etteniv/"
        classNAme= "instagram">
        <FontAwesomeIcon icon = {faInstagram} size="2x" />
        </a></h5> </div>
    );
    }