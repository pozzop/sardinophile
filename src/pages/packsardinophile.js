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
        title="Pack Sardinophile"
        subtitle="Une sélection de 20 boites de sardines remarquables avec le Bordeaux Sardines Club et le Comptoir du Portugal"
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
        subtitle="Une sélection de 20 boites de sardines remarquables avec le Comptoir du Portugal à Bordeaux"
      ></FeaturesSection>
    </>
  );
}

export default PackSardinophilePage;
