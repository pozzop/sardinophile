import React from "react";
import CtaSection from "./../components/CtaSection";
import FeaturesSection from "./../components/FeaturesSection";
import { useRouter } from "./../util/router.js";

<script type="application/ld+json”>
    "type" :"application/ld+json”,
    {
   "@context":"https://schema.org/",
   "@type":"Product",
   "name":"Pack Sardinophile",
   "image":"https://www.sardinophile.com/img/degustation.jpg",
   "description":"Une sélection de boites de sardines remarquables approuvées par le Club des Sardinophiles",
   "brand":"Comptoir du Portugal",
   "offers":{
      "@type":"Offer",
      "url":"https://www.sardinophile.com/pack-sardinophile",
      "priceCurrency":"EUR",
      "price":"78",
      "priceValidUntil":"2020-12-31",
      "availability":"https://schema.org/InStock",
      "itemCondition":"https://schema.org/NewCondition"
   },
   "sameAs":[
         "https://www.lecomptoirduportugal.com/boutique/produits-de-la-mer/pack-galice-sardinophile-conserves-poisson-exeption-galice-espagne/"
      ]
}   

</script>


function PackSardinophilePage(props) {
  const router = useRouter();

  return (
    <>
      <CtaSection
        color="light"
        size="normal"
        backgroundImage=""
        backgroundImageOpacity={0.1}
        title="Pack Sardinophile - Voyage en Galice"
        subtitle="Une sélection de boites de sardines remarquables avec le Bordeaux Sardines Club et le Comptoir du Portugal"
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
        subtitle="Une sélection de boites de sardines remarquables avec le Comptoir du Portugal à Bordeaux"
      ></FeaturesSection>
    </>
  );
}

export default PackSardinophilePage;
