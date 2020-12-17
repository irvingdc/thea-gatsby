import React from "react";
import "stylesheets/main.module.less";
import classes from "stylesheets/index.module.less";
import Nav from "components/Nav/Nav";
import CTA from "components/CTA/CTA";

export default () => {
  return (
    <>
      <Nav
        title="Servicio Angelopolitano | Reparación y mantenimiento de línea blanca."
        description="Reparación y mantenimiento profesional de línea blanca, refrigeración y aire acondicionado."
        canonical=""
      />
      <div className={classes.container}>
        <h1>hola</h1>
      </div>
      <CTA />
    </>
  );
};
