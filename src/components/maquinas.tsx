import { useEffect, useState } from "react";
import { Card } from "./card";
import { maquinasService } from "../services/maquinaServices";
import type {Maquina} from '../types/maquina'
import  '../styles/cards.css';
import '../styles/pg.css';
export const Maquinas = () => {
  const [maquinas, setMaquinas] = useState<Maquina[]>([]); 

  useEffect(() => {
    maquinasService.getData()
  .then(data => setMaquinas(data as Maquina[]))
  .catch(console.error);
  }, []);

  return (
    <div>
      <h1>Maquinas</h1>
      <div className='cards-container'>
         {maquinas.map((maquina, index) => (
          
        <Card num={index} maquina={maquina} />
      ))}
      </div>  
    </div>
  );
};