import React from "react";
import "font-awesome/css/font-awesome.min.css";

export const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-light text-dark pt-4 w-100">
      
      {/* Sin padding lateral para que toque los bordes */}
      <div className="container-fluid px-0">

        {/* Fondo gris para toda la sección de contenido */}
        <div className="py-4" style={{ backgroundColor: "#f8f9fa" }}>
          <div className="row m-0 p-0 text-center text-md-start">
            
            {/* Columna izquierda: teléfonos */}
            <div className="col-12 col-md-6 mb-3 px-4">
              <h4>Contactos</h4>
              <p className="mb-1">📞 +54 341 5420271</p>
              <p className="mb-1">📞 +54 341 5480104</p>
              <p className="mb-0">📧 gabriellopez200@hotmail.com</p>
            </div>

            {/* Columna derecha: enlaces */}
            <div className="col-12 col-md-6 mb-3 px-4">
              <h4>Enlaces</h4>
              <ul className="list-unstyled">
                <li>
                  <a
                    href={`https://wa.me/543415420271?text=${encodeURIComponent(
                      "Hola, estoy interesado en sus máquinas. Muchas gracias."
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp +54 341 5420271
                  </a>
                </li>
                <li>
                  <a
                    href={`https://wa.me/543415480104?text=${encodeURIComponent(
                      "Hola, estoy interesado en sus máquinas. Muchas gracias."
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp +54 341 5480104
                  </a>
                </li>
                <li>
                  <a href="mailto:gabriellopez200@hotmail.com">Enviar correo</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
