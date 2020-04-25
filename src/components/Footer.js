import React from "react";
import Section from "./Section";
import { Link } from "./../util/router.js";
import "./Footer.scss";

function Footer(props) {
  return (
    <Section
      color={props.color}
      size={props.size}
      backgroundImage={props.backgroundImage}
      backgroundImageOpacity={props.backgroundImageOpacity}
    >
      <div className="FooterComponent__container container">
        <div className="columns">
          <div className="column is-4-widescreen is-6">
            <a
              className="brand"
              href="https://creativecommons.org/licenses/by/4.0/deed.fr"
            >
              <div className="brand-icon">
                <img
                  className="FooterComponent__logo"
                  src={props.logo}
                  alt="Logo"
                ></img>
              </div>
            </a>

            {props.description && (
              <p className="FooterComponent__description">
                {props.description}
              </p>
            )}

            {props.copyright && (
              <p className="FooterComponent__copywrite">{props.copyright}</p>
            )}
          </div>
          <div className="column is-7 is-6-widescreen is-offset-2-widescreen">
            <div className="columns">
              <div className="column is-4">
                <div className="menu">
                  <p className="menu-label"></p>
                </div>
              </div>
              <div className="column is-4">
                <div className="menu">
                  <p className="menu-label">Sardinophile</p>
                  <ul className="menu-list">
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="column is-7">
                <div className="menu">
                  <p className="menu-label">Social</p>
                  <ul className="menu-list">
                    <li>
                      <a
                        href="https://www.facebook.com/Sardinophile-226434511026790/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src="https://uploads.divjoy.com/icon-facebook.svg"
                          alt="Facebook"
                        ></img>
                        Sardinophile
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.facebook.com/bordeaux.sardine.club/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src="https://uploads.divjoy.com/icon-facebook.svg"
                          alt="Facebook"
                        ></img>
                        Bordeaux Sardines Club
                      </a>
                    </li>
                    <li></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Footer;
