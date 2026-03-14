import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import Home from './Home.tsx'
import About from './About.tsx'
import PaginaInexistente from './PaginaInexistente.tsx'

import { BrowserRouter, Route, Routes} from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
       <Routes>
        <Route path='/' element={<App/>} />
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>

        {/* Esta ruta debe ir siempre al final */}
        <Route path="*" element={<PaginaInexistente />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
