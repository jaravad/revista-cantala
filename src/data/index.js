import Floodings from '../news/Floodings'
import Murder from '../news/Murder'
import WomenWhoInspire from '../news/WomenWhoInspire'
import arroyo from '../assets/arroyo.jpeg'
import murder from '../assets/murder.jpeg'
import women from '../assets/women.png'
import junior from '../assets/junior.png'
import Junior from '../news/Junior'
import Entrepreneurship from '../opinion/Entrepreneurship'
import Char from '../opinion/Char'
import char from '../assets/char.jpeg'

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
  {
    component: Junior,
    title: "Junior, con el apoyo de 'Cariaco', vuela a los cuadrangulares",
    id: 'junior-gana-en-barranquilla',
    author: 'Valentina Uribe',
    previewImage: junior,
  },
]

export const opinion = [
  {
    component: Entrepreneurship,
    id: 'emprendiendo-desde-el-saber',
    title: 'Emprendiendo desde el Saber',
    author: 'Valentina Uribe',
    previewImage: women,
  },
  {
    component: Char,
    title: 'Primer secretario nombrado por Alejandro Char',
    id: 'char-anuncia-nuevo-secretario',
    author: 'Valentina Uribe',
    previewImage: char,
  },
  // {
  //   component: Floodings,
  //   title: 'Motociclista fue arrastrado por fuerte arroyo en Barranquilla',
  //   id: 'arroyo-en-barranquilla',
  //   author: 'Melany Cortés Padilla',
  //   previewImage: arroyo,
  // },
  // {
  //   component: Junior,
  //   title: "Junior, con el apoyo de 'Cariaco', vuela a los cuadrangulares",
  //   id: 'junior-gana-en-barranquilla',
  //   author: 'Valentina Uribe',
  //   previewImage: junior,
  // },
]
