export interface Maquina {
  nombre: string;
  precio: number;
  descripcion: string;
  moneda: string;
  marca?: string;
  Imagenes: {
    [key: string]: string;
  };
}