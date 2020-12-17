import { Link } from "gatsby";
import React from "react";
import classes from "./Steps.module.less";

export default () => (
  <div className={classes.container}>
    <h2>¿Empezamos?</h2>
    <div className={classes.scroll}>
      <div className={classes.steps}>
        <div>
          <h3>¿Qué necesitas?</h3>
          <ol>
            <li>
              Un <b>diseño</b>.
            </li>
            <li>
              Conocer el <Link to="/materiales">material y espesor</Link>.
            </li>
            <li>
              El <Link to="/servicios">servicio</Link> que requires.
            </li>
          </ol>
          <p>
            Si requieres asesoría haz click <Link to="/contacto">aquí</Link>.
          </p>
        </div>
        <div>
          <h3>Sube tus archivos</h3>
          <p>
            Cargue su archivo en formato <b>.cad .dwg .dxf</b>
          </p>
          <p>
            Para conocer las especificaciones haz click{" "}
            <Link to="/cotizar">aquí</Link>.
          </p>
        </div>
        <div>
          <h3>Cotización en 24 hrs</h3>
          <p>
            En caso de que tu proyecto sea mas complejo, nuestro equipo te
            informará el tiempo de entrega.
          </p>
        </div>
      </div>
    </div>
  </div>
);
