import React from "react";
import HeroSection from "./../components/HeroSection";
import { useRouter } from "./../util/router.js";

function ComparatifPage(props) {
  const router = useRouter();

  return (
    <HeroSection
      color="light"
      size="normal"
      backgroundImage=""
      backgroundImageOpacity={1}
      title="Panorama France 2020"
      subtitle="Tour d'horizon des conserveries françaises"
      buttonText=""
      image=""
      buttonOnClick={() => {
        // Navigate to pricing page
        router.push("/pricing");
      }}
    ></HeroSection>
  );
}

export default ComparatifPage;
