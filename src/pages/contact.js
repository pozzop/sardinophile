import React from "react";
import NewsletterSection2 from "./../components/NewsletterSection2";
import ContactSection from "./../components/ContactSection";

function ContactPage(props) {
  return (
    <>
      <NewsletterSection2
        color="light"
        size="normal"
        backgroundImage=""
        backgroundImageOpacity={1}
        title="Contacter le sardinophile"
        subtitle=""
        buttonText="Subscribe"
        inputPlaceholder="Enter your email"
        subscribedMessage="You are now subscribed 🙌"
        image="/img/contact.jpg"
        imageSuccess=""
      ></NewsletterSection2>
      <ContactSection
        color="light"
        size="normal"
        backgroundImage=""
        backgroundImageOpacity={1}
        title=""
        subtitle=""
        buttonText="Envoyer le message"
        showNameField={true}
      ></ContactSection>
    </>
  );
}

export default ContactPage;
