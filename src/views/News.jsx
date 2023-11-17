import React from 'react'
import { news } from '../data'
import SingleSection from '../components/SingleSection'

const News = () => {
  return <SingleSection name="Noticias" array={news} />
}

export default News
