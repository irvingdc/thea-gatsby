import React from "react";
import classes from "./CTA.module.less";
import { Link } from "gatsby";

export default ({ hideQuote }) => {
  return (
    <div className={classes.container}>
      <div>
        <h5>¿Listo para comenzar?</h5>
        <ul>
          {hideQuote ? null : (
            <li>
              <Link to="/cotizar/">Cotizar</Link>
            </li>
          )}
          <li>
            <Link to="/contacto/">Contacto</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
