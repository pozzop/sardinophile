import React from "react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import FeaturesSection3 from "./FeaturesSection3";

function HeroSection(props) {
  return (
    <Section
      color={props.color}
      size={props.size}
      backgroundImage={props.backgroundImage}
      backgroundImageOpacity={props.backgroundImageOpacity}
    >
      <div className="container">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={1}
          spaced={true}
        ></SectionHeader>

        <FeaturesSection3
          color="light"
          size="normal"
          backgroundImage=""
          backgroundImageOpacity={1}
        ></FeaturesSection3>
      </div>
    </Section>
  );
}

export default HeroSection;
