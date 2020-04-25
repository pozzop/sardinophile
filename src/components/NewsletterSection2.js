import React, { useState } from "react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import "./NewsletterSection2.scss";

function NewsletterSection2(props) {
  const [subscribed, setSubscribed] = useState(false);
  const image =
    subscribed && props.imageSuccess ? props.imageSuccess : props.image;

  return (
    <Section
      color={props.color}
      size={props.size}
      backgroundImage={props.backgroundImage}
      backgroundImageOpacity={props.backgroundImageOpacity}
    >
      <div className="container">
        <div className="columns is-vcentered">
          <div className="column">
            <SectionHeader
              title={props.title}
              subtitle={props.subtitle}
              size={3}
              spaced={false}
            ></SectionHeader>
          </div>
          <div className="column is-1"></div>
          <div className="column is-two-fifths">
            <figure className="NewsletterSection2__image image">
              <img src={image} alt="Illustration"></img>
            </figure>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default NewsletterSection2;
