import React from "react";
import classes from "./ServicesIntro.module.less";
import { Link } from "gatsby";

export default () => (
  <div className={classes.container}>
    <div className={classes.content}>
      <div className={classes.list}>
        <ul>
          <li>
            <Link to="/servicios#corteLaser">Corte láser</Link>
          </li>
          <li>
            <Link to="/servicios#corteAgua">Corte con agua</Link>
          </li>
          <li>
            <Link to="/servicios#corteSierra">Corte con sierra cinta</Link>
          </li>
          <li>
            <Link to="/servicios#corteCizalla">Corte con cizalla</Link>
          </li>
          <li>
            <Link to="/servicios#cortePlasma">Corte plasma</Link>
          </li>
          <li>
            <Link to="/servicios#doblado">Doblado</Link>
          </li>
          <li>
            <Link to="/servicios#punzonado">Punzonado</Link>
          </li>
          <li>
            <Link to="/servicios#router">Router</Link>
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
