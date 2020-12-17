import React from "react";
import "stylesheets/main.module.less";
import classes from "stylesheets/materiales.module.less";
import Nav from "components/Nav/Nav";
import Footer from "components/Footer/Footer";
import CTA from "components/CTA/CTA";
import materiales from "images/other/materiales.png";

export default () => {
  return (
    <>
      <Nav
        title="Servicio Angelopolitano | Reparación y mantenimiento de línea blanca."
        description="Reparación y mantenimiento profesional de línea blanca, refrigeración y aire acondicionado."
        canonical=""
      />
      <div className={classes.container}>
        <div>
          <img src={materiales} />
          <ul>
            <li>Acero al carbón</li>
            <li>Acero inoxidable</li>
            <li>Aluminio</li>
            <li>Latón</li>
            <li>Cobre</li>
            <li>Galvanizado</li>
            <li>Marmol</li>
            <li>Y Más</li>
          </ul>
        </div>
        <div>
          <div className={classes.yellowSolid}>
            <div>
              <span>M</span>
              <span>A</span>
              <span>T</span>
              <span>E</span>
            </div>
            <div>
              <span>R</span>
              <span>I</span>
              <span>A</span>
            </div>
            <div>
              <span>L</span>
              <span>E</span>
              <span>S</span>
            </div>
          </div>
        </div>
      </div>
      <CTA />
      <Footer />
    </>
  );
};
