import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes, Route, Outlet, BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import Header from './components/Header.jsx'
import { news } from './data'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<App />}></Route>
        {news.map(({ id, component: Component }) => {
          return <Route path={id} element={<Component />} key={id} />
        })}
        <Route path="*" element={<App />}></Route>
      </Routes>
      <Outlet />
    </BrowserRouter>
  </React.StrictMode>
)
