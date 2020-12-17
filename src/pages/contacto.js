import React from "react";
import "stylesheets/main.module.less";
import Nav from "components/Nav/Nav";
import ContactForm from "components/ContactForm/ContactForm";
import Footer from "components/Footer/Footer";

export default () => {
  return (
    <>
      <Nav
        title="Servicio Angelopolitano | Reparación y mantenimiento de línea blanca."
        description="Reparación y mantenimiento profesional de línea blanca, refrigeración y aire acondicionado."
        canonical=""
      />
      <ContactForm />
      <Footer />
    </>
  );
};
