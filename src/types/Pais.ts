interface Pais {
  nombre: string,
  bandera: {
    emoji: string,
    imagen: string,
  },
  continente: string,
  coord: {
    lat: string,
    lng: string,
  },
  visitado: boolean,
  video: string,
}

export default Pais