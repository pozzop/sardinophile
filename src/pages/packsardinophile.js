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
        title="Pack Sardinophile - Coupe d'Europe"
        subtitle="Une sélection de boites de sardines remarquables avec l'épicerie de la pêche Nouvelle Vague à Bordeaux"
        buttonText="Commander le Pack"
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
        title="Pack Sardinophile"
        subtitle="Une sélection de boites de sardines remarquables avec Nouvelle Vague à Bordeaux"
      ></FeaturesSection>
    </>
  );
}

export default PackSardinophilePage;
