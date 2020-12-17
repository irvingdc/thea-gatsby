import React, { useEffect, useState } from "react";
import classes from "./Experience.module.less";
import flight from "images/icons/flight.png";
import steering from "images/icons/steering.png";
import hammer from "images/icons/hammer.png";
import palette from "images/icons/palette.png";

export default () => {
  return (
    <div className={classes.container}>
      <div className={classes.dividerLine}></div>
      <div>
        <div>
          <p className={classes.noMargin}>
            <i>Un orgullo</i>
            poblano con
          </p>
          <p className={classes.number}>
            <span>+</span>
            <b>20</b>
            <span>de</span>
          </p>
        </div>
        <div>
          <p className={classes.yellowYears}>
            años<span>de experiencia</span>
          </p>
        </div>
        <div>
          <p className={classes.noMargin}>
            Como proveedores de las industrias aeroespacial, automotriz, de la
            construcción y del diseño.
          </p>
          <img src={palette} className={classes.goldenIcon} />
          <img src={hammer} className={classes.goldenIcon} />
          <img src={steering} className={classes.goldenIcon} />
          <img
            src={flight}
            className={[classes.goldenIcon, classes.rotates].join(" ")}
          />
        </div>
      </div>
      <div className={classes.grayInfo}>
        <div className={classes.topText}>
          <p>
            <b>THEA</b> es una empresa{" "}
            <b>
              <span
                style={{
                  fontFamily:
                    "Helvetica, Arial, Helvetica, sans-serif !important",
                }}
              >
                100
              </span>
              % poblana
            </b>{" "}
            dedicada a ofrecer soluciones para el trabajo en lámina de metal,
            fundada en el año{" "}
            <span
              style={{
                fontFamily:
                  "Helvetica, Arial, Helvetica, sans-serif !important",
              }}
            >
              2013
            </span>
            . A través de servicios como corte, punzonado y doblado logra
            conformar un <b>servicio integral</b> a la medida de sus clientes. A
            su vez <b>distribuye componentes de troquel</b> para las industrias
            automotriz, aeroespacial y de la construcción que buscan trasformar
            la lámina en producto semi-terminado o terminado.
          </p>
        </div>
        <div>
          <h3>SERVICIO</h3>
          <h3>CALIDAD</h3>
        </div>
        <div>
          <p className={classes.whiteBox}>
            <b>
              Atención personalizada, asesoría técnica, y eficiencia en tiempos
              de entrega
            </b>{" "}
            para cumplir con las necesidades de nuestros clientes.
          </p>
          <p className={classes.whiteBox}>
            Alcanzamos <b>la más alta precisión</b> y calidad mediante el empleo
            de <b>tecnología de primer nivel.</b>
          </p>
        </div>
      </div>

      <div>
        <div>
          <p id="movingText1">
            La mejor calidad
            <span>en el servicio</span>
          </p>
        </div>
      </div>
      <div className={[classes.flex, classes.yellowSolid].join(" ")}>
        <p>
          En Thea estamos listos para cumplir con
          <span>las mas complejas necesidades</span>
          de nuestros clientes
        </p>
        <p>
          Nuestra exigencia se alinea a los objetivos del cliente. Aprovechamos
          nuestra amplia capacidad para ofrecer y cumplir con una
          <span>
            atención personalizada, asesoría técnica y de diseño y tiempos de
            entrega
          </span>
        </p>
      </div>
    </div>
  );
};
