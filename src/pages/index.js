import React from "react";
import HeroSection2 from "./../components/HeroSection2";
import ContentCardsSection from "./../components/ContentCardsSection";

function IndexPage(props) {
  return (
    <>
      <HeroSection2
        color="light"
        size="normal"
        backgroundImage=""
        backgroundImageOpacity={1}
        title="SARDINOPHILE"
        subtitle="la passion de la sardine en boite"
      ></HeroSection2>
      <ContentCardsSection
        color="light"
        size="normal"
        backgroundImage=""
        backgroundImageOpacity={1}
        title="sardinophile"
        subtitle=""
      ></ContentCardsSection>
    </>
  );
}

export default IndexPage;
