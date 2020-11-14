import React from "react";
import Section from "./Section";
import Features from "./Features";
import CtaSection from "./CtaSection";
import { useRouter } from "./../util/router.js";

function FeaturesSection(props) {
  const router = useRouter();

  return (
    <>
      <Section
        color={props.color}
        size={props.size}
        backgroundImage={props.backgroundImage}
        backgroundImageOpacity={props.backgroundImageOpacity}
      >
        <div className="container">
          <Features
            items={[
              {
                title: "Dégustation",
                description:
                  "Toutes les boites du Pack ont passé l'épreuve des connaisseurs du Club des Sardinophiles. ",
                image: "/img/degustation.jpg",
              },
              {
                title: "Nouvelle Vague",
                description:
                  "L'épicerie de la pêche à Bordeaux qui soutient les artisans de qualité.",
                image: "/img/NouvelleVague.jpg",
              },
              {
                title: "Découverte",
                description:
                  "Des marques réputées: La Quiberonnaise, Compagnie Bretonne, Paco Lafuente, Los Peperetes, Porthos, Berthe, Rios, Real Conservera Espagnola, etc.",
                image: "/img/marques.jpg",
              },
              {
                title: "Pack Coupe d'Europe",
                description:
                  "Des sardinettes, des millésimées, des fumées, une sélection variée du meilleur de l'Europe !",
                image: "/img/pack-europe.jpg",
              },
            ]}
          ></Features>
        </div>
      </Section>
      <CtaSection
        color="light"
        size="normal"
        backgroundImage=""
        backgroundImageOpacity={1}
        title=""
        subtitle="Pack de 13 boites d&#39;exception pour 75€ port compris + une boite offerte"
        buttonText="Commander le Pack Sardinophile"
        buttonOnClick={() => {
          // Navigate to pricing page
          router.push("");
        }}
      ></CtaSection>
    </>
  );
}

export default FeaturesSection;
