import React, { useState } from 'react';
import imagen1 from '/imagen1.jpg';
import imagen2 from '/imagen2.jpg';
import imagen3 from '/imagen3.jpg';

function Section() {
  const images = [imagen1, imagen2, imagen3];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Manejadores de cambio de imagen
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: '600px', margin: 'auto' }}>
      <div style={{ display: 'flex', overflow: 'hidden', height: '400px' }}>
        <img 
          src={images[currentIndex]} 
          alt={`Slide ${currentIndex}`} 
          style={{ width: '100%', objectFit: 'cover' }} 
        />
      </div>
      <button onClick={goToPrevious} style={{ position: 'absolute', top: '50%', left: '0', transform: 'translateY(-50%)' }}>
        &#10094;
      </button>
      <button onClick={goToNext} style={{ position: 'absolute', top: '50%', right: '0', transform: 'translateY(-50%)' }}>
        &#10095;
      </button>
    </div>
  );
}

export default Section;