import React from "react";
import classes from "./ServicesIntro.module.less";
import { Link } from "gatsby";

export default () => (
  <div className={classes.container}>
    <div className={classes.content}>
      <div className={classes.list}>
        <ul>
          <li>
            <Link to="/servicios">Corte láser</Link>
          </li>
          <li>
            <Link to="/servicios">Corte con agua</Link>
          </li>
          <li>
            <Link to="/servicios">Corte con sierra cinta</Link>
          </li>
          <li>
            <Link to="/servicios">Corte con cizalla</Link>
          </li>
          <li>
            <Link to="/servicios">Corte plasma</Link>
          </li>
          <li>
            <Link to="/servicios">Doblado</Link>
          </li>
          <li>
            <Link to="/servicios">Punzonado</Link>
          </li>
          <li>
            <Link to="/servicios">Router</Link>
          </li>
        </ul>
      </div>
      <div className={classes.explanation}>
        <h2>
          Alcanzamos la más <span>alta precisión</span> y calidad utilizando{" "}
          <span>tecnología</span> de primer nivel.
        </h2>
        <p>
          También ofrecemos asistencia por teléfono, correo electronico y chat
          para cualquier inquietud o pregunta que pueda tener.
        </p>
      </div>
    </div>
  </div>
);
