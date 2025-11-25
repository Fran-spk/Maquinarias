import maquinas from '../data/maquinas.json';

export const maquinasService = {
  async getData() {
    return maquinas;
  }
};