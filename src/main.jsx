import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes, Route, Outlet, BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import Header from './components/Header.jsx'
import { news, opinion } from './data'

import { red } from '@mui/material/colors'
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from '@mui/material/styles'
import './styles.css'
import News from './views/News.jsx'
import Opinion from './views/Opinion.jsx'
import Infographics from './views/Infographics.jsx'

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
          <Route path="/opinion" element={<Opinion />} />
          <Route path="/infografias" element={<Infographics />} />
          {news.map(({ id, component: Component }) => {
            return <Route path={id} element={<Component />} key={id} />
          })}
          {opinion.map(({ id, component: Component }) => {
            return <Route path={id} element={<Component />} key={id} />
          })}
          <Route path="*" element={<App />}></Route>
        </Routes>
        <Outlet />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
)
