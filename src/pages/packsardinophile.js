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
        title="Passion Sardine"
        subtitle="La bonne adresse pour une sélection de sardines premium du Portugal, d'Espagne et de France"
        buttonText="Coupon -10% Passion Sardine"
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
        title="Passion Sardine"
        subtitle="Une sélection de boites de sardines remarquables avec Passion Sardine"
      ></FeaturesSection>
    </>
  );
}

export default PackSardinophilePage;
