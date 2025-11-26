import { Routes, Route } from 'react-router-dom'
import { Maquinas } from '../components/maquinas'
import { Formulario } from '../components/formulario'
 
export const AppRouter=()=> {
  return (
    <Routes>
      <Route index element={<Maquinas />} />
      <Route path="/maquinas" element={<Maquinas/>} />
      <Route path="/formulario" element={<Formulario/>} />
    </Routes>
  );
}


