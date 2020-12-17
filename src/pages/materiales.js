import React from "react";
import "stylesheets/main.module.less"
import classes from "stylesheets/privacy.module.less";
import Nav from "components/Nav/Nav";

export default () => {
  return (
    <>
      <Nav
        title="Servicio Angelopolitano | Reparación y mantenimiento de línea blanca."
        description="Reparación y mantenimiento profesional de línea blanca, refrigeración y aire acondicionado."
        canonical=""
      />
      <div className={classes.container}>
        <h1>mater</h1>
      </div>
    </>
  );
};
