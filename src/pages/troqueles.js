import React from "react";
import "stylesheets/main.module.less";
import classes from "stylesheets/troqueles.module.less";
import Nav from "components/Nav/Nav";
import CTA from "components/CTA/CTA";
import Footer from "components/Footer/Footer";
import troqueles1 from "images/photos/troqueles-1.jpg";
import troqueles2 from "images/photos/troqueles-2.jpg";
import troqueles3 from "images/photos/troqueles-3.jpg";
import troqueles4 from "images/photos/troqueles-4.jpg";
import troqueles5 from "images/photos/troqueles-5.jpg";
import troqueles7 from "images/photos/troqueles-7.png";
import troqueles6 from "images/photos/troqueles-6.jpg";

export default () => {
  return (
    <>
      <Nav title="THEA | Troqueles" description="" canonical="/troqueles" />
      <div className={classes.container}>
        <div>
          <ul>
            <li className={[classes.doubleWidth].join(" ")}>
              <img src={troqueles1} />
              <div>
                <p>Componentes Sistema Simple</p>
              </div>
              <a
                href="http://mdlmexico.com.mx/catalogos/DVE.023.002-PLAIN-BEARING-COMPONENTS.pdf"
                target="_blank"
              >
                Ver Manual
              </a>
            </li>
            <li>
              <img src={troqueles2} />
              <div>
                <p>Bujes Grafitados</p>
              </div>
              <a
                href="http://mdlmexico.com.mx/catalogos/Graphite-Bushings-metric-tab.pdf"
                target="_blank"
              >
                Ver Manual
              </a>
            </li>
            <li>
              <img src={troqueles3} />
              <div>
                <p>Porta Troqueles</p>
              </div>
              <a
                href="http://mdlmexico.com.mx/catalogos/Catalogo-porta-troqueles-MDL.pdf"
                target="_blank"
              >
                Ver Manual
              </a>
            </li>
            <li>
              <img src={troqueles4} />
              <div>
                <p>Punzones y Matrices</p>
              </div>
              <a
                href="http://mdlmexico.com.mx/catalogos/mdl-punzones-matrices.pdf"
                target="_blank"
              >
                Ver Manual
              </a>
            </li>
            <li>
              <img src={troqueles5} />
              <div>
                <p>Resortes</p>
              </div>
              <a
                href="http://mdlmexico.com.mx/wp-content/uploads/2014/04/Resortes-para-troquel-MDL-Mexico.pdf"
                target="_blank"
              >
                Ver Manual
              </a>
            </li>
            <li>
              <img src={troqueles7} />
              <div>
                <p>Servicio de Placa Rectificada</p>
              </div>
              <a href="http://mdlmexico.com.mx/maquinados/" target="_blank">
                Ver Manual
              </a>
            </li>
            <li className={[classes.doubleWidth].join(" ")}>
              <img src={troqueles6} />
              <div>
                <p>Componentes Sistema Embalado</p>
              </div>
              <a
                href="http://mdlmexico.com.mx/catalogos/DVE.023.001-BALL-BEARING-COMPONENTS.pdf"
                target="_blank"
              >
                Ver Manual
              </a>
            </li>
          </ul>
        </div>
        <div>
          <div className={classes.yellowSolig}>
            <div>
              <span>T</span>
              <span>R</span>
              <span>O</span>
            </div>
            <div>
              <span>Q</span>
              <span>U</span>
              <span>E</span>
            </div>
            <div>
              <span>L</span>
              <span>E</span>
              <span>S</span>
            </div>
          </div>
        </div>
      </div>
      <CTA />
      <Footer />
    </>
  );
};
