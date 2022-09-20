import React from "react";
import CtaSection from "./../components/CtaSection";
import FeaturesSection from "./../components/FeaturesSection";
import { useRouter } from "./../util/router.js";


function PackSardinophilePage(props) {
  const router = useRouter();

  return (
    <>
      <CtaSection
        color="light"
        size="normal"
        backgroundImage=""
        backgroundImageOpacity={0.1}
        title="Nouvelle Vague"
        subtitle="La bonne adresse pour une sélection des meilleures sardines du Portugal, d'Espagne et de France"
        buttonText="Voir la boutique en ligne de Nouvelle Vague"
        buttonOnClick={() => {
          // Navigate to pricing page
          router.push("");
        }}
      ></CtaSection>
      <FeaturesSection
        color="light"
        size="normal"
        backgroundImage=""
        backgroundImageOpacity={1}
        title="Nouvelle Vague"
        subtitle="Une sélection de boites de sardines remarquables avec Nouvelle Vague à Bordeaux"
      ></FeaturesSection>
    </>
  );
}

export default PackSardinophilePage;
