import React, { useState } from "react";
import classes from "./NavContent.module.less";
import logo from "images/logo.png";
import menu from "images/menu-button.png";
import closeIcon from "images/close.svg";
import { Link } from "gatsby";

export default () => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={[classes.container, open ? classes.menuOpen : ""].join(" ")}
    >
      <Link to="/" className={classes.logo}>
        <img src={logo} alt="logo" />
      </Link>
      <ul onClick={() => setOpen(false)}>
        <li>
          <Link to="/servicios/">Servicios</Link>
        </li>
        <li>
          <Link to="/materiales/">Materiales</Link>
        </li>
        <li>
          <Link to="/troqueles/">Troqueles</Link>
        </li>
        <li>
          <Link to="/cotizar/">Cotizar</Link>
        </li>
        <li>
          <Link to="/contacto/">Contacto</Link>
        </li>
      </ul>
      <img
        onClick={() => setOpen(false)}
        src={closeIcon}
        className={classes.closeButton}
      />
      <img
        onClick={() => setOpen(true)}
        src={menu}
        className={classes.menuButton}
      />
    </div>
  );
};
