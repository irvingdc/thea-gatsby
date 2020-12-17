import React from "react";
import classes from "./Ally.module.less";
import mdl from "images/other/mdl.png";

export default () => {
  return (
    <div className={classes.container}>
      <p>
        Aliado estratégico desde el<span>2014</span>
      </p>
      <a href="http://mdlmexico.com.mx/" target="_blank">
        <img src={mdl} />
      </a>
    </div>
  );
};
