import React from "react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";

function NewsletterSection(props) {
  return (
    <Section
      color={props.color}
      size={props.size}
      backgroundImage={props.backgroundImage}
      backgroundImageOpacity={props.backgroundImageOpacity}
    >
      <a href="https://mailchi.mp/f600def6ebf6/sardinophile">
        <div className="container has-text-centered is-family-monospace has-text-link">
          <SectionHeader
            title={props.title}
            subtitle={props.subtitle}
            size={3}
            spaced={false}
          ></SectionHeader>
        </div>
      </a>
    </Section>
  );
}

export default NewsletterSection;
