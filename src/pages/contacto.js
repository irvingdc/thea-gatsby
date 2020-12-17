import React from "react";
import "stylesheets/main.module.less";
import Nav from "components/Nav/Nav";
import ContactForm from "components/ContactForm/ContactForm";
import Footer from "components/Footer/Footer";

export default () => {
  return (
    <>
      <Nav title="THEA | Contacto" description="" canonical="/contacto" />
      <ContactForm />
      <Footer />
    </>
  );
};
