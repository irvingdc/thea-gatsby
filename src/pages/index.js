import React from "react";
import "stylesheets/main.module.less";
import Nav from "components/Nav/Nav";
import CTA from "components/CTA/CTA";
import Experience from "components/Experience/Experience";
import Ally from "components/Ally/Ally";
import Home from "components/Home/Home";
import ServicesIntro from "components/ServicesIntro/ServicesIntro";
import Examples from "components/Examples/Examples";
import Steps from "components/Steps/Steps";
import Footer from "components/Footer/Footer";

export default () => {
  return (
    <>
      <Nav
        title="THEA - Soluciones en Lámina de Metal"
        description="No importa el tamaño de tu proyecto, nosotros te ofrecemos diseño, ingeniería y tecnología aplicados en soluciones prácticas."
        canonical=""
      />
      <Home />
      <ServicesIntro />
      <Examples />
      <Steps />
      <Experience />
      <Ally />
      <CTA />
      <Footer />
    </>
  );
};
