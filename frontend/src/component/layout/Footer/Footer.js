import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
      
        <p>Download Our App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>SUBHAM-KART</h1>
        <p>High Quality is our first priority</p>

        <p>Copyrights 2021 &copy; SUBHAM-KART</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="http://www.instagram.com/shubham_here._/">Instagram</a>
        <a href="https://www.linkedin.com/in/subham-kumar-066258201/">LinkdIn</a>
        <a href="https://twitter.com/Shubham_here__">Twitter</a>
      </div>
    </footer>
  );
};

export default Footer;
