import { Box, Typography } from '@mui/material'
import React from 'react'
import ArticleWrapper from '../components/ArticleWrapper'
import AuthorLine from '../components/AuthorLine'
import { authors } from '../data'
import Title from '../components/Title'
import mainImg from '../assets/opinion/fabian/1.jpeg'

const FabianOpinion = () => {
  return (
    <ArticleWrapper>
      <Title>
        El papel de la tecnología en la educación: una oportunidad para el
        aprendizaje del siglo XXI
      </Title>
      <AuthorLine>{authors.fabian}</AuthorLine>
      <Box mb={3}>
        <img src={mainImg} alt="Feria" style={{ maxWidth: '100%' }} />
      </Box>
      <Typography paragraph>
        En la era digital en la que vivimos, la tecnología se ha convertido en
        una herramienta omnipresente en nuestras vidas. Esta omnipresencia
        también ha llegado al ámbito educativo, donde la tecnología ha
        demostrado ser una poderosa aliada en el proceso de aprendizaje de los
        estudiantes.
      </Typography>

      <Typography paragraph>
        La incorporación de dispositivos electrónicos, como tabletas y
        ordenadores, en las aulas ha abierto un sinfín de posibilidades para los
        educadores y los alumnos. Las ventajas son evidentes: acceso instantáneo
        a información actualizada, recursos multimedia interactivos y la
        capacidad de colaborar en proyectos en línea.
      </Typography>

      <Typography paragraph>
        Sin embargo, como en cualquier avance tecnológico, también existen
        desafíos y preocupaciones. Muchos críticos argumentan que el uso
        excesivo de la tecnología puede tener un impacto negativo en el
        desarrollo cognitivo de los estudiantes, disminuyendo su capacidad de
        atención y fomentando la dependencia de las pantallas.
      </Typography>

      <Typography paragraph>
        Es importante encontrar un equilibrio entre el uso de la tecnología y
        los métodos de enseñanza tradicionales. La tecnología no debe reemplazar
        por completo la interacción humana en el aula, sino complementarla. Los
        educadores deben ser conscientes de cómo integrar de manera efectiva las
        herramientas tecnológicas en el currículo, aprovechando sus beneficios
        sin perder de vista los fundamentos pedagógicos.
      </Typography>

      <Typography paragraph>
        Además, es necesario abordar la brecha digital que existe entre los
        estudiantes. No todos tienen acceso a dispositivos electrónicos o a una
        conexión a internet estable en sus hogares. Esto plantea desafíos en
        términos de equidad educativa y acceso igualitario a las oportunidades
        de aprendizaje.
      </Typography>

      <Typography paragraph>
        En resumen, la tecnología en la educación es una realidad inevitable y
        llena de potencial. Si se utiliza de manera adecuada y equilibrada,
        puede proporcionar a los estudiantes una experiencia de aprendizaje
        enriquecedora y prepararlos para el mundo digital en el que vivimos. Sin
        embargo, es fundamental abordar los desafíos y garantizar que todos los
        estudiantes tengan acceso a estas herramientas para evitar la creación
        de una nueva brecha educativa. La educación del siglo XXI requiere una
        combinación de sabiduría pedagógica y dominio tecnológico para
        aprovechar al máximo las oportunidades que nos brinda la era digital.
      </Typography>
    </ArticleWrapper>
  )
}

export default FabianOpinion
