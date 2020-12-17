import React from "react";
import classes from "./ContactForm.module.less";
import orgulloMexico from "images/other/orgullomexico.png";
import imagotipo from "images/other/imagotipo.png";
import plane from "images/icons/paper-plane.png";

export default () => {
  let sendForm = () => {};
  return (
    <div className={classes.container}>
      <div>
        <h1>Contáctanos</h1>
        <input type="text" name="name" placeholder="Nombre" />
        <input type="email" name="email" placeholder="Correo" />
        <textarea name="message" placeholder="Mensaje"></textarea>
        <button onclick={sendForm}>
          <span>Enviar</span>
          <img src={plane} />
        </button>
      </div>
      <div>
        <p className={classes.arial}>
          +52 (<span>222</span>) <span>1 22 88 57</span>
        </p>
        <a
          href="mailto:direccion@theatechsolution.com"
          rel="noopener noreferrer"
        >
          direccion<span className={classes.arial}>@</span>theatechsolution.com
        </a>
        <div className={classes.flex}>
          <img src={imagotipo} />
          <div className={classes.flex}>
            <img src={orgulloMexico} />
          </div>
        </div>
      </div>
    </div>
  );
};
