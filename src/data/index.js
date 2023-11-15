import Floodings from '../news/Floodings'
import Murder from '../news/Murder'
import WomenWhoInspire from '../news/WomenWhoInspire'
import arroyo from '../assets/arroyo.jpeg'
import murder from '../assets/murder.jpeg'
import women from '../assets/women.png'

export const news = [
  {
    component: WomenWhoInspire,
    id: 'mujeres-que-inspiran',
    title: 'Mujeres que inspiran',
    author: 'Cristian Alvarez',
    previewImage: women,
  },
  {
    component: Murder,
    title: 'Reportan asesinato en el centro de Barranquilla',
    id: 'asesinato-en-el-centro',
    author: 'Yerika Hernández',
    previewImage: murder,
  },
  {
    component: Floodings,
    title: 'Motociclista fue arrastrado por fuerte arroyo en Barranquilla',
    id: 'arroyo-en-barranquilla',
    author: 'Melany Cortés Padilla',
    previewImage: arroyo,
  },
]
