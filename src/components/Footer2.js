import React from "react";
import Section from "./Section";
import { Link } from "./../util/router.js";
import "./Footer2.scss";

function Footer2(props) {
  return (
    <Section
      color={props.color}
      size={props.size}
      backgroundImage={props.backgroundImage}
      backgroundImageOpacity={props.backgroundImageOpacity}
    >
      <div className="Footer2__container container">
        <div className="links right">
          <a href="https://creativecommons.org/licenses/by/4.0/deed.fr">
            © Sardinophile
          </a>
          <Link to="/contact">Contact</Link>
          <a href="https://www.facebook.com/sardinophiles/">
            <span className="icon">
              <i className="fab fa-facebook"></i>
            </span>
            Sardinophile
          </a>
        </div>
      </div>
    </Section>
  );
}

export default Footer2;
