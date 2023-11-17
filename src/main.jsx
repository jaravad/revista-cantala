import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes, Route, Outlet, BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import Header from './components/Header.jsx'
import {
  critica,
  entrepeneurship,
  infographics,
  interviews,
  news,
  opinion,
} from './data'

import { red } from '@mui/material/colors'
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from '@mui/material/styles'
import './styles.css'
import News from './views/News.jsx'
import Columns from './views/Columns.jsx'
import Infographics from './views/Infographics.jsx'
import Entrepeneurship from './views/Entrepeneurship.jsx'
import Interviews from './views/Interviews.jsx'
import Critica from './views/Critica.jsx'

let theme = createTheme({
  palette: {
    primary: {
      main: red[500],
    },
  },
  typography: {
    fontFamily: ['DM Sans', 'sans-serif'].join(','),
    allVariants: {
      color: '#202020',
    },
  },
})

theme = responsiveFontSizes(theme)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/noticias" element={<News />} />
          <Route path="/columna" element={<Columns />} />
          <Route path="/emprendimiento" element={<Entrepeneurship />} />
          <Route path="/infografias" element={<Infographics />} />
          <Route path="/entrevistas" element={<Interviews />} />
          <Route path="/critica" element={<Critica />} />
          {news.map(({ id, component: Component }) => {
            return <Route path={id} element={<Component />} key={id} />
          })}
          {opinion.map(({ id, component: Component }) => {
            return <Route path={id} element={<Component />} key={id} />
          })}
          {entrepeneurship.map(({ id, component: Component }) => {
            return <Route path={id} element={<Component />} key={id} />
          })}
          {infographics.map(({ id, component: Component }) => {
            return <Route path={id} element={<Component />} key={id} />
          })}
          {interviews.map(({ id, component: Component }) => {
            return <Route path={id} element={<Component />} key={id} />
          })}
          {critica.map(({ id, component: Component }) => {
            return <Route path={id} element={<Component />} key={id} />
          })}
          <Route path="*" element={<App />}></Route>
        </Routes>
        <Outlet />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
)
