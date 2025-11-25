import React from 'react';
import type { Maquina } from '../types/maquina';
import  '../styles/cards.css';
import { Carousel } from './carousel';

// Si usas TypeScript
interface CardProps {
    maquina: Maquina; 
    num: number;
}



export const Card = ({ maquina,num }: CardProps) => {
  const { nombre, descripcion, precio, moneda, marca,Imagenes } = maquina;
  const imagenes = Imagenes ? Object.values(Imagenes) : [];
  return (
        <div className='card'>
            <h2>{nombre}</h2>
            {imagenes.length > 0 && (
              <div className="mt-3">
                <Carousel id={`carousel-${num}`} images={imagenes} />
              </div>
            )}
            <p>{descripcion}</p>
            <h2>{precio} {moneda}</h2>
            {marca && <p>Marca: {marca}</p>}
            <div className="d-grid gap-2 col-6 mx-auto">
           <a
              className="btn btn-primary"
              href={`https://wa.me/5493415420271?text=${encodeURIComponent(
                `Hola, estoy interesado en la máquina ${nombre}, muchas gracias.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Consultar
            </a>
         </div>
            </div>
  );
};


