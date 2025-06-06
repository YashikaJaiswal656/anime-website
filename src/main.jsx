import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { BrowserRouter , Routes, Route, Link } from "react-router-dom";
import Details from './details';
import Watching from './watching';
import Cat from './cat';
import About from './about';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/page/:id" element={<Details />} />
        <Route path="/detail/:id" element={<Watching />} />
        <Route path="/categories" element={<Cat/>}/>
        <Route path="/about" element={<About/>}/>
        
      </Routes>
</BrowserRouter>
  </StrictMode>,
)
