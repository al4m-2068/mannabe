import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Template from './layout/Template'
import Home from './pages/Home'
import Courses from './pages/Courses'
import About from './pages/About'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Template/>}>
          <Route index element={<Home/>}/>
          <Route path='/courses' element={<Courses/>}/>
          <Route path='/about' element={<About/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
