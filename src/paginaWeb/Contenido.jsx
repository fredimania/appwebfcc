import React, { useState } from 'react';
import Nav from './Nav';
import { BrowserRouter as Router, Route, Routes, useParams, Outlet } from "react-router-dom";
import Section from './Section';
import Aside from './Aside';
import './contenido.module.css';
import Rutas from './Rutas';
/* import { CambiarNombre } from './CambiarNombre'; */
import imagen1 from '/imagen1.jpg';
import imagen2 from '/imagen2.jpg';
import imagen3 from '/imagen3.jpg';

function Contenido() {
  return (
    <>
      <Router>
        <Nav />
        <main style={{ backgroundColor: 'blue' }}> {/* Fondo azul */}
          <aside>
            <Aside />
            <Routes>
              <Route path="/about" element={<About2 />} />
            </Routes>
          </aside>
          <section>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/noticias" element={<Noticias />}>
                <Route path="/noticias/jefatura" element={<Jefatura />} />
                <Route path="/noticias/informatica" element={<Informatica />} />
              </Route>
              <Route path="/about" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </section>
        </main>
      </Router>
    </>
  );
}

export default Contenido;

// Componente Home con Carrusel
function Home() {
  const images = [imagen1, imagen2, imagen3];
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: '600px', margin: 'auto', padding: '20px' }}>
      <div style={{ display: 'flex', overflow: 'hidden', height: '400px' }}>
        <img 
          src={images[currentIndex]} 
          alt={`Slide ${currentIndex}`} 
          style={{ width: '100%', objectFit: 'cover' }} 
        />
      </div>
      <button onClick={goToPrevious} style={{ position: 'absolute', top: '50%', left: '10px', transform: 'translateY(-50%)', fontSize: '24px', backgroundColor: 'rgba(255, 255, 255, 0.5)', border: 'none' }}>
        &#10094;
      </button>
      <button onClick={goToNext} style={{ position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)', fontSize: '24px', backgroundColor: 'rgba(255, 255, 255, 0.5)', border: 'none' }}>
        &#10095;
      </button>
    </div>
  );
}

// Resto de funciones en el archivo
function About() {
  return <h2>ABOUT</h2>;
}

function About2() {
  return <h2>Datos en aside</h2>;
}

function Noticias() {
  return (
    <div>
      <h1>NOTICIAS DE HUÉRCAL OVERA</h1>
      <p>SE HA TERMINADO LA ALERTA ROJA POR INUNDACIÓN</p>
      <hr />
      <Outlet />
    </div>
  );
}

function Producto() {
  const params = useParams();
  if (params.numero < 1 || params.numero > 100) {
    return <h2>ESE PRODUCTO NO EXISTE</h2>;
  }
  return <h2>PRODUCTO ELEGIDO: {params.numero}</h2>;
}

function NotFound() {
  return <h2>ESTA RUTA NO ES VÁLIDA</h2>;
}

function Jefatura() {
  return (
    <>
      <h2>NOTICIAS DE JEFATURA</h2>
    </>
  );
}

function Informatica() {
  return (
    <>
      <h2>NOTICIAS DE INFORMATICA</h2>
      <p>¿quieres conocer los nuevos avances en tecnología</p>
    </>
  );
}