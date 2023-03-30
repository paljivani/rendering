import './App.css'

import React, { useState } from 'react';
function SliderComponent() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => prevSlide -1);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => prevSlide + 1);
  };
  return (
    <div>
    <div>
      {currentSlide === 0 && (
        <img src="https://th.bing.com/th?id=OIP.blA7-sSfinqeVpbh8FNBigHaFN&w=298&h=209&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt="Slide 1" />
      )}
      {currentSlide === 1 && (
        <img src="https://th.bing.com/th?id=OIP.58c5Z1KN2yehsOHWPJ305wHaE3&w=308&h=202&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt="Slide 2" />
      )}
      {currentSlide === 2 && (
        <img src="https://th.bing.com/th?id=OIP.wn9or2VjxkElOajwF6uedAHaFd&w=291&h=214&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt="Slide 3" />
        
      )}
      {currentSlide === 3 && (
        <img src="https://th.bing.com/th?id=OIP.-qzOi_8rwYQ4Xtxg38IgQwHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2 " />
      )}
       {currentSlide === 4 && (
        <img src="https://th.bing.com/th?id=OIP.58c5Z1KN2yehsOHWPJ305wHaE3&w=308&h=202&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt="Slide 5" />
      )}
      {currentSlide === 5 && (
        <img src="https://th.bing.com/th?id=OIP.wn9or2VjxkElOajwF6uedAHaFd&w=291&h=214&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt="Slide 6" />
      )}
      {currentSlide === 6 && (
        <img src="https://th.bing.com/th?id=OIP.58c5Z1KN2yehsOHWPJ305wHaE3&w=308&h=202&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt="Slide 7" />
      )}
      {currentSlide === 7 && (
        <img src="https://th.bing.com/th/id/OIP.xQpJ3XdZ19bbWIGlx4x20AHaE7?w=250&h=180&c=7&r=0&o=5&pid=1.7" alt="Slide 8" />
        
      )}
      {currentSlide === 8 && (
        <img src="https://th.bing.com/th?id=OIP.blA7-sSfinqeVpbh8FNBigHaFN&w=298&h=209&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt="Slide 9" />
      )}
       {currentSlide === 9 && (
        <img src="https://th.bing.com/th?id=OIP.58c5Z1KN2yehsOHWPJ305wHaE3&w=308&h=202&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt="Slide 10" />
      )}
      {currentSlide === 10 && (
        <img src="https://th.bing.com/th?id=OIP.blA7-sSfinqeVpbh8FNBigHaFN&w=298&h=209&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt="Slide 1" />
      )}
      
      
    </div>
    <button onClick={handlePrevSlide}>Prev </button>
    <button onClick={handleNextSlide}>Next </button>
    </div>
  );
}
export default SliderComponent;

