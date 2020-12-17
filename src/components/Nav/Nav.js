import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import classes from "./Nav.module.less";
import NavContent from "../NavContent/NavContent";

const NETLIFY_URL = "https://servicioangelopolitano.netlify.app";
const REAL_URL = "https://www.servicioangelopolitano.com";

export default ({ title, canonical, description }) => {

  return (
    <>
      <Helmet>
        <html lang="es" />
        <meta charSet="utf-8" />
        <title>{title}</title>
        <link
          rel="canonical"
          href={"https://theatechsolution.com" + canonical}
        />
        <meta name="description" content={description} />
      </Helmet>
      <div className={[classes.container].join(" ")}>
        <div className={classes.content}>
          <NavContent />
        </div>
      </div>
    </>
  );
};
