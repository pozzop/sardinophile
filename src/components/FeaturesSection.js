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
                title: "Tradition",
                description:
                  "Nous soutenons les conserveries qui perpétuent une tradition artisanale de qualité.",
                image: "/img/tradition.jpg",
              },
              {
                title: "Découverte",
                description:
                  "Voyage en Galice pour des vraies boites artisanales: Paco Lafuente, Sotavento, Los Peperetes, Laterio, Cambados et Real Conservera Espagnola",
                image: "/img/galice.jpg",
              },
              {
                title: "Pack Galice",
                description:
                  "Des sardinettes, des millésimées, des verrines, une sélection variée et remarquable du meilleur de Galice !",
                image: "/img/pack-galice.jpg",
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
        subtitle="Pack de 11 boites d&#39;exception pour 78€ avec le code GALICE10SUR10, port compris + une Pinhais offerte"
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
