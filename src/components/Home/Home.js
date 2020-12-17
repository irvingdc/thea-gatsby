import React from "react";
import classes from "./Home.module.less";
import { Link } from "gatsby";
import phone from "images/icons/phone.svg";
import email from "images/icons/email.svg";

export default () => (
  <div className={classes.container}>
    <div className={classes.content}>
      <div className={classes.text}>
        <p className={classes.topLabel}>
          SIEMPRE <b>CUMPLIMOS</b>
          <br /> LOS <span>PLAZOS DE ENTREGA</span>
        </p>
        <h1>Soluciones en lámina de metal</h1>
        <p className={classes.description}>
          No importa el tamaño de tu proyecto, nosotros te ofrecemos diseño,
          ingeniería y tecnología aplicados en soluciones prácticas.
        </p>
        <ul>
          <li>
            <Link to="/servicios/">Servicios</Link>
          </li>
          <li>
            <Link to="/contacto/">Contacto</Link>
          </li>
        </ul>
        <div className={classes.contact}>
          <img src={phone} alt="icon" />{" "}
          <a href="tel:+522221228857" rel="noopener noreferrer" target="_blank">
            +52 (222) 1 22 88 57
          </a>
        </div>
        <div className={classes.contact}>
          <img src={email} alt="icon" />{" "}
          <a
            href="mailto:direccion@theatechsolution.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            direccion@theatechsolution.com
          </a>
        </div>
      </div>
    </div>
  </div>
);
