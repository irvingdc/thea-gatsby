import React from "react";
import "stylesheets/main.module.less";
import classes from "stylesheets/servicios.module.less";
import Nav from "components/Nav/Nav";
import CTA from "components/CTA/CTA";
import Footer from "components/Footer/Footer";
import corteLaser from "images/icons/corte-laser.png";
import corteAgua from "images/icons/corte-agua.png";
import corteSierra from "images/icons/corte-sierra.png";
import cortePlasma from "images/icons/corte-plasma.png";
import punzonado from "images/icons/punzonado.png";
import cizalla from "images/icons/corte-cizalla.png";
import doblado from "images/icons/doblado.png";
import router from "images/icons/router.png";

export default () => {
  return (
    <>
      <Nav
        title="Servicio Angelopolitano | Reparación y mantenimiento de línea blanca."
        description="Reparación y mantenimiento profesional de línea blanca, refrigeración y aire acondicionado."
        canonical=""
      />
      <div className={classes.container}>
        <div>
          <div>
            <div className={classes.yellowSolid}>
              <div>
                <span>S</span>
                <span>E</span>
                <span>R</span>
              </div>
              <div>
                <span>V</span>
                <span>I</span>
                <span>C</span>
              </div>
              <div>
                <span>I</span>
                <span>O</span>
                <span>S</span>
              </div>
            </div>
          </div>
          <div className={classes.flex}>
            <ul>
              <li id="corteLaser">
                <img src={corteLaser} />
                <div className={classes.serviceDetails}>
                  <h2>Corte láser</h2>
                  <h3>Tipos de Materiales</h3>
                  <p>
                    Acero al carbón, Aluminio, Inoxidable, Cobre, Latón, Acero
                    Galvanizado
                  </p>
                  <h3>Especificaciones de Corte</h3>
                  <p>
                    Dimensiones de corte:{" "}
                    <span className={classes.number}>1.5</span> x{" "}
                    <span className={classes.number}>3</span> m (Lámina)
                    <br />
                    Espesor máximo: <span className={classes.number}>
                      15.8
                    </span>{" "}
                    mm
                    <br />
                    Precisión: +/- <span className={classes.number}>
                      0.1
                    </span>{" "}
                    mm
                    <br />
                    Distancia entre piezas:{" "}
                    <span className={classes.number}>2</span> mm
                    <br />
                  </p>
                  <h3>Ventajas</h3>
                  <p>
                    Nuestros equipos de corte por láser permiten abarcar
                    producción y fabricación de piezas pequeñas de complejos
                    diseños hasta grandes componentes de carácter estructural.
                  </p>
                </div>
              </li>
              <li id="corteAgua">
                <img src={corteAgua} />
                <div className={classes.serviceDetails}>
                  <h2>Corte con agua</h2>
                  <h3>Tipos de Materiales</h3>
                  <p>
                    Acero al carbón, Acero Inoxidable, Aluminio, Mármol, Madera,
                    entre otros
                  </p>
                  <h3>Especificaciones de Corte</h3>
                  <p>
                    Dimensiones de corte:{" "}
                    <span className={classes.number}>3</span> x{" "}
                    <span className={classes.number}>6</span> m (Placa)
                    <br />
                    Espesor máximo: <span className={classes.number}>6</span>" (
                    <span className={classes.number}>152.4</span>) mm
                    <br />
                    Precisión: +/- <span className={classes.number}>
                      1/32
                    </span>{" "}
                    pulgadas
                    <br />
                    Distancia entre piezas cortadas:{" "}
                    <span className={classes.number}>3/16</span> pulgadas
                    <br />
                  </p>
                  <h3>Ventajas</h3>
                  <p>
                    Corte limpio sin modificación de propiedades químicas y
                    mecánicas de los materiales. Corta una amplia variedad de
                    materiales.
                  </p>
                </div>
              </li>
              <li id="corteSierra">
                <img src={corteSierra} />
                <div className={classes.serviceDetails}>
                  <h2>Corte con sierra cinta</h2>
                  <h3>Tipos de Materiales</h3>
                  <p>
                    Aluminio, Aceros Inoxidables, Aceros al carbón, Aceros
                    Aleados, Aceros Herramienta, Bronce
                  </p>
                  <h3>Especificaciones de Corte</h3>
                  <p>
                    Formas a cortas: Redondo, Solera, Cuadrado, Hexagonal,
                    Placa, entre otras.
                    <br />
                    Dimensiones de corte:
                    <br />
                    Min: <span className={classes.number}>1/8</span> en Redondo
                    y Cuadrado
                    <br />
                    Max: <span className={classes.number}>550</span> mm en
                    Redondo y <span className={classes.number}>600</span> x{" "}
                    <span className={classes.number}>800</span> en Rectángulo.
                    Precisión: <span className={classes.number}>1</span> a{" "}
                    <span className={classes.number}>5</span> mm según pieza
                    <br />
                  </p>
                  <h3>Ventajas</h3>
                  <p>
                    La sierra cinta o serrucho de banda es una sierra eléctrica,
                    que tiene una tira metálica dentada, larga, estrecha y
                    flexible. Esta se desplaza sobre dos poleas que se
                    encuentran en el mismo plano con un espacio entre ellas, con
                    la finalidad de cortar en frio.
                  </p>
                </div>
              </li>
              <li id="cortePlasma">
                <img src={cortePlasma} />
                <div className={classes.serviceDetails}>
                  <h2>Corte plasma</h2>
                  <h3>Tipos de Materiales</h3>
                  <p>Acero al carbón y Acero Inoxidable</p>
                  <h3>Especificaciones de Corte</h3>
                  <p>
                    Capacidad de corte:{" "}
                    <span className={classes.number}>8</span>" x{" "}
                    <span className={classes.number}>20</span>"<br />
                    Espesor máximo: <span className={classes.number}>
                      1
                    </span> - <span className={classes.number}>1/4</span> y en
                    Oxicorte <span className={classes.number}>12</span>"<br />
                    Tolerancia: <span className={classes.number}>1</span> mm
                    <br />
                  </p>
                  <h3>Ventajas</h3>
                  <p>
                    El corte con plasma da velocidad y eficiencia en corte al
                    carbón y acero inoxidable
                  </p>
                </div>
              </li>
              <li id="corteCizalla">
                <img src={cizalla} />
                <div className={classes.serviceDetails}>
                  <h2>Corte con cizalla</h2>
                  <h3>Tipos de Materiales</h3>
                  <p>
                    Acero, Acero Inoxidable, Acero Galvanizado, Aluminio, Latón,
                    Bronce
                  </p>
                  <h3>Especificaciones de Corte</h3>
                  <p>
                    Dimensiones de corte:{" "}
                    <span className={classes.number}>3050</span> mm (Lámina)
                    <br />
                    Espesor máximo: <span className={classes.number}>6</span> mm
                    <br />
                  </p>
                  <h3>Ventajas</h3>
                  <p>
                    Los filos de ambas cuchillas de la cizalla se enfrentan
                    presionando sobre la superficie a cortar, hasta que vencen
                    la resistencia de la superficie dividiéndola en dos.
                  </p>
                </div>
              </li>
              <li id="doblado">
                <img src={doblado} />
                <div className={classes.serviceDetails}>
                  <h2>Doblado</h2>
                  <h3>Tipos de Materiales</h3>
                  <p>
                    Acero, Acero Inoxidable, Acero Galvanizado, Aluminio, Latón
                  </p>
                  <h3>Especificaciones de Corte</h3>
                  <p>
                    Longitud de doblado:{" "}
                    <span className={classes.number}>3050</span> mm
                    <br />
                    Espesor máximo: <span className={classes.number}>6</span> mm
                    <br />
                    Máximo angulo de doblez:{" "}
                    <span className={classes.number}>85º</span>
                    <br />
                  </p>
                  <h3>Ventajas</h3>
                  <p>
                    Un proceso efectivo para dar ángulos en lamina con rapidéz y
                    precisión.
                  </p>
                </div>
              </li>
              <li id="punzonado">
                <img src={punzonado} />
                <div className={classes.serviceDetails}>
                  <h2>Punzonado</h2>
                  <h3>Tipos de Materiales</h3>
                  <p>
                    Acero al carbón, Acero Inoxidable, Lámina galvanizada,
                    Aluminio, Fleje recosido
                  </p>
                  <h3>Especificaciones de Corte</h3>
                  <p>
                    Dimensiones de corte:{" "}
                    <span className={classes.number}>1</span> x{" "}
                    <span className={classes.number}>2</span> m (Lámina)
                    <br />
                    Espesor máximo: <span className={classes.number}>2</span> mm
                    <br />
                    Cabezal: <span className={classes.number}>8</span>{" "}
                    posiciones
                    <br />
                    Punzones: Redondos, cuadrados, rectangulares, entre otros.
                    <br />
                  </p>
                  <h3>Ventajas</h3>
                  <p>
                    Corte de lámina a través del uso de punzones con formas.
                    Gracias a la presión de la prensa se crea un efecto de
                    perforación dejando la forma buscada. Menor tiempo y menor
                    costo.
                  </p>
                </div>
              </li>
              <li id="router">
                <img src={router} />
                <div className={classes.serviceDetails}>
                  <h2>Router</h2>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <CTA />
      <Footer />
    </>
  );
};
