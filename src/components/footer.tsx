import React from "react";
import "font-awesome/css/font-awesome.min.css";

export const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-light text-dark pt-4">
      <div className="container">
        <div className="row">
          {/* Contactos */}
          <div className="col-xs-6 col-md-4">
            <h4>Contactos</h4>
            <p>
              📞 +54 341 5420271 <br />
              📞 +54 341 5480104 <br />
              📧 gabriellopez200@hotmail.com
            </p>
            <ul className="footer-links list-unstyled">
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
                <a href="mailto:gabriellopez200@hotmail.com">
                  Enviar correo
                </a>
              </li>
            </ul>
          </div>
        <hr />
      </div>
      </div>
    </footer>
  );
};