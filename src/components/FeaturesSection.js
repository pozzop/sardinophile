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
                  "10 classiques à l'huile d'olive de la maison Pinhais et 10 boites de marques et saveurs variées: à la tomate, au piment, fumées.",
                image: "/img/pinhais.jpg",
              },
              {
                title: "Confites à point",
                description:
                  "Boites datées d'au moins 6 mois avec 5 millésimées d'au moins 3 ans d'âge. Boites standard de 120-125g.",
                image: "/img/vintage.jpg",
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
        subtitle="Pack de 20 boites d&#39;exception pour 80€ port compris chez nos amis du Comptoir du Portugal à Bordeaux."
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
