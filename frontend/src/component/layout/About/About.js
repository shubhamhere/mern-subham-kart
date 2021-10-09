import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from "@material-ui/icons/Instagram";
const About = () => {
  const visitInstagram = () => {
    window.location = "http://www.instagram.com/shubham_here._/";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/subham123hzb/image/upload/v1633766316/samples/dp_kdd92g.jpg"
              alt="Founder"
            />
            <Typography>Subham Kumar</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
              This is a sample wesbite made by Subham Kumar. Only with the
              purpose to lear MERN Stack 
            </span>
          </div> 
          <div className="aboutSectionContainer2">
            <Typography component="h2">My Links</Typography>
            <a
              href="https://www.linkedin.com/in/subham-kumar-066258201/"
              target="blank"
            >
              <LinkedInIcon className="linkedSvgIcon" />
            </a>

            <a href="http://www.instagram.com/shubham_here._/" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
