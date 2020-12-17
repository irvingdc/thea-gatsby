import React from "react";
import "stylesheets/main.module.less";
import classes from "stylesheets/cotizar.module.less";
import Nav from "components/Nav/Nav";
import CTA from "components/CTA/CTA";
import Footer from "components/Footer/Footer";
import curved from "images/icons/curved-arrow.svg";
import write from "images/icons/write.svg";
import size from "images/icons/size.svg";
import calculator from "images/icons/calculator.svg";
import paper from "images/icons/paper.svg";
import mail from "images/icons/mail-b.svg";
import hours from "images/icons/24-hours.svg";


export default () => {
  return (
    <>
      <Nav
        title="Servicio Angelopolitano | Reparación y mantenimiento de línea blanca."
        description="Reparación y mantenimiento profesional de línea blanca, refrigeración y aire acondicionado."
        canonical=""
      />
      <div className={classes.container}>
        <h1>Guía para una cotización Exitosa</h1>
        <ul>
          <li>
            <div>
              <img src={curved} alt="icono" />
            </div>
            <p>
              Los archivos deben ser enviados indispensablemente en curvas o
              vectores
            </p>
          </li>
          <li>
            <div>
              <img src={write} alt="icono" />
            </div>
            <p>
              Evita empalmar trazos e intenta hacer las líneas con el menor
              grosor posible.
            </p>
          </li>
          <li>
            <div>
              <img src={size} alt="icono" />
            </div>
            <p>
              Tus planos deberán estar en escala real, es decir 1:1, siendo las
              medidas del diseño en el archivo las mismas que las de la pieza
              final. En caso de que la escala sea diferente, ¡Infórmanos!
            </p>
          </li>
          <li>
            <div>
              <img src={calculator} alt="icono" />
            </div>
            <p>
              Una vez que recibamos tus archivos calcularemos el tiempo y la
              complejodad de tu diseño para finalmente entregarte una
              cotización.
            </p>
          </li>
          <li>
            <div>
              <img src={paper} alt="icono" />
            </div>
            <p>
              Tus archivos deberán estar en cualquiera de estos formados: .dwh
              .dxf .cad
            </p>
          </li>
          <li>
            <div>
              <img src={mail} alt="icono" />
            </div>
            <p>
              Antes de enviar tu solicitud de cotización a{" "}
              <a
                href="mailto:ventas@teatechsolution.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                ventas@teatechsolution.com
              </a>{" "}
              recuerda que es muy importante especificar:
              <ol>
                <li>El material a cortar</li>
                <li>El espesor del material</li>
                <li>
                  El servicio requerido (corte láser, corte con agua, etc)
                </li>
              </ol>
            </p>
          </li>
          <li>
            <div>
              <img src={hours} alt="icono" />
            </div>
            <p>
              Siguiendo estas indicaciones podemos garantizar una pronta
              respuesta (1día hábil aprox.) y un costo preciso por el servicio
              que desea realizar.
            </p>
          </li>
        </ul>
      </div>
      <CTA hideQuote />
      <Footer />
    </>
  );
};
