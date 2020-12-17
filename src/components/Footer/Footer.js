import React from "react";
import classes from "./Footer.module.less";
import { Link } from "gatsby";

export default () => {
  return (
    <p className={classes.container}>
      <Link to="/privacidad">Aviso de Privacidad</Link>
    </p>
    
  );
};
