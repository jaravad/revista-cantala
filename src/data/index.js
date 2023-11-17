import Floodings from '../news/Floodings'
import Murder from '../news/Murder'
import WomenWhoInspire from '../interviews/WomenWhoInspire'
import arroyo from '../assets/arroyo.jpeg'
import murder from '../assets/murder.jpeg'
import women from '../assets/women.png'
import junior from '../assets/junior.png'
import Junior from '../news/Junior'
import CrisFair from '../entrepeneurship/CrisFair'
import Char from '../opinion/Char'
import char from '../assets/char.jpeg'
import Fair from '../entrepeneurship/Fair'
import bag from '../assets/entrepeneurship/vale/2.jpeg'
import crisFair from '../assets/entrepeneurship/cris/3.jpeg'
import Elections from '../news/Elections'
import FabianOpinion from '../opinion/FabianOpinion'
import fabianOpinion from '../assets/opinion/fabian/1.jpeg'
import orlandoNews from '../assets/news/orlando/1.jpeg'
import Melany from '../entrepeneurship/Melany'
import melanyImg from '../assets/opinion/melany/1.jpeg'
import Fabian from '../news/Fabian'
import colombia from '../assets/news/fabian/1.jpeg'
import Victor from '../entrepeneurship/Victor'
import victorImg from '../assets/entrepeneurship/victor/2.png'
import marcoImg from '../assets/opinion/marco/1.png'
import MarcoOpinion from '../opinion/MarcoOpinion'
import marcoNewsImg from '../assets/news/marco/1.png'
import MarcoNews from '../news/MarcoNews'
import MarcoFair from '../entrepeneurship/MarcoFair'
import victorFairImg from '../assets/entrepeneurship/marco/1.png'
import orlandoImg from '../assets/infographics/orlando/1.jpeg'
import Orlando from '../infographics/Orlando'
import Aura from '../news/Aura'
import auraImg from '../assets/news/aura/1.jpeg'
import FabianFair from '../entrepeneurship/FabianFair'
import fabianFairImg from '../assets/entrepeneurship/fabian/1.png'

export const authors = {
  cris: 'Cristian Alvarez',
  vale: 'Valentina Uribe',
  yerika: 'Yerika Hernández',
  orlando: 'Orlando Sandoval',
  melany: 'Melany Cortés Padilla',
  aura: 'Aura Maria Marimon Riquett',
  fabian: 'Fabian Bovea',
  victor: 'Victor Roa',
  marco: 'Marco Castro',
}

export const news = [
  {
    component: Murder,
    title: 'Reportan asesinato en el centro de Barranquilla',
    id: 'asesinato-en-el-centro',
    author: authors.yerika,
    previewImage: murder,
  },
  {
    component: Floodings,
    title: 'Motociclista fue arrastrado por fuerte arroyo en Barranquilla',
    id: 'arroyo-en-barranquilla',
    author: authors.melany,
    previewImage: arroyo,
  },
  {
    component: Junior,
    title: "Junior, con el apoyo de 'Cariaco', vuela a los cuadrangulares",
    id: 'junior-gana-en-barranquilla',
    author: authors.vale,
    previewImage: junior,
  },
  {
    component: Elections,
    title: 'Recta Final de Elecciones a Alcaldía y Gobernación',
    id: 'elecciones-en-barranquilla',
    author: authors.orlando,
    previewImage: orlandoNews,
  },
  {
    component: Fabian,
    title: 'La Selección Colombia y su Clasificación para el Mundial 2026',
    id: 'seleccion-colombia',
    author: authors.fabian,
    previewImage: colombia,
  },
  {
    component: MarcoNews,
    title: 'Cayó uno de los integrantes de la banda llamada “los pachenca”',
    id: 'integrante-de-los-pachenca-capturado',
    author: authors.marco,
    previewImage: marcoNewsImg,
  },

  {
    component: Aura,
    title: 'Y si, como ya escucharon... Maluma será Papa',
    id: 'maluma-sera-papa',
    author: authors.aura,
    previewImage: auraImg,
  },
]

export const opinion = [
  {
    component: Char,
    title: 'Primer secretario nombrado por Alejandro Char',
    id: 'char-anuncia-nuevo-secretario',
    author: authors.vale,
    previewImage: char,
  },
  {
    component: FabianOpinion,
    title: 'El papel de la tecnología en la educación',
    id: 'tecnologia-en-la-educacion',
    author: authors.fabian,
    previewImage: fabianOpinion,
  },
  {
    component: Melany,
    title: 'Barranquilla es Investigación',
    id: 'barranquilla-es-investigacion',
    author: authors.melany,
    previewImage: melanyImg,
  },
  {
    component: MarcoOpinion,
    title: 'La lucha de Barranquilla contra las inundaciones',
    id: 'inundaciones-en-barranquilla',
    author: authors.marco,
    previewImage: marcoImg,
  },
]

export const entrepeneurship = [
  {
    component: CrisFair,
    id: 'emprendiendo-desde-el-saber',
    title: 'Emprendiendo desde el Saber',
    author: authors.cris,
    previewImage: crisFair,
  },
  {
    component: Fair,
    title: 'Feria de Emprendimiento caribe',
    id: 'feria-de-emprendimiento-caribe',
    author: authors.vale,
    previewImage: bag,
  },
  {
    component: Victor,
    title: 'Esculturas en Porcelana que Despiertan Emociones',
    id: 'arte-en-porcelana',
    author: authors.victor,
    previewImage: victorImg,
  },
  {
    component: MarcoFair,
    title: 'KidsJoy, emprendimiento para la estimulación adecuada para bebés',
    id: 'emprendimiento-kidsjoy',
    author: authors.marco,
    previewImage: victorFairImg,
    imgStyles: { objectPosition: 'top center' },
  },
  {
    component: FabianFair,
    title: 'Dulce Bendición K&G: Endulzando la Vida Universitaria',
    id: 'emprendimiento-dulce-bendicion',
    author: authors.fabian,
    previewImage: fabianFairImg,
    imgStyles: { objectPosition: 'top center' },
  },
]

export const infographics = [
  {
    component: Orlando,
    title: 'Barranquilla, la ciudad de la alegría',
    id: 'barranquilla-ciudad-de-la-alegria',
    author: authors.orlando,
    previewImage: orlandoImg,
  },
]

export const interviews = [
  {
    component: WomenWhoInspire,
    id: 'mujeres-que-inspiran',
    title: 'Mujeres que inspiran',
    author: authors.cris,
    previewImage: women,
  },
]
