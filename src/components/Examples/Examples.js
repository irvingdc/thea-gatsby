import React from "react";
import classes from "./Examples.module.less";
import ejemplo1 from "images/examples/Ejemplo1.jpg";
import ejemplo2 from "images/examples/Ejemplo2.jpg";
import ejemplo3 from "images/examples/Ejemplo3.jpg";

export default () => (
  <div className={classes.container}>
    <div className={classes.black}>
      <h2>Nuestras capacidades de fabricación</h2>
      <p>Ejemplos</p>
    </div>
    <div className={classes.white}>
      <ul>
        <li>
          <img src={ejemplo1} alt="ejemplo 1" />
          <p>Una breve descripción del producto debería ir aquí.</p>
        </li>
        <li>
          <img src={ejemplo2} alt="ejemplo 2" />
          <p>Una breve descripción del producto debería ir aquí.</p>
        </li>
        <li>
          <img src={ejemplo3} alt="ejemplo 3" />
          <p>Una breve descripción del producto debería ir aquí.</p>
        </li>
      </ul>
    </div>
  </div>
);
