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
                title: "Passion Sardine",
                description:
                  "Le Sardinophile y déguste toutes ses marques favorites: Compagnie Bretonne, Paco Lafuente, Pinhais, La Brújula, La Curiosa, Real Conservera Espagnola, etc. \n Profitez du coupon exclusif -10% sur toute la boutique activé en cliquant sur ce bouton:",
                image: "/img/PassionSardine.jpg",
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
        subtitle=""
        buttonText="Coupon -10% Passion Sardine "
        buttonOnClick={() => {
          // Navigate to pricing page
          router.push("");
        }}
      ></CtaSection>
    </>
  );
}

export default FeaturesSection;
