import React from "react";
import Section from "./Section";
import ContentCards from "./ContentCards";

function ContentCardsSection(props) {
  return (
    <Section
      color={props.color}
      size={props.size}
      backgroundImage={props.backgroundImage}
      backgroundImageOpacity={props.backgroundImageOpacity}
    >
      <div className="container">
        <ContentCards
          people={[
            {
              image: "/img/pinhais.jpg",
              title: "Boutique",
              body: "Nouvelle Vague",
              url: "/pack-sardinophile",
            },
            {
              image: "/img/chat.jpg",
              title: "Dégustation",
              body: "4 fiches pratiques pour sardinophile",
              url: "/degustation",
            },
            {
              image: "/img/panorama.jpg",
              title: "Panorama France",
              body: "Comparatif des marques françaises",
              url: "/comparatif",
            },
            {
              image: "/img/lasardine.jpg",
              title: "La sardine",
              body: "Une pour toutes, toutes pour une",
              url: "/sardine",
            },
          ]}
        ></ContentCards>
      </div>
    </Section>
  );
}

export default ContentCardsSection;
