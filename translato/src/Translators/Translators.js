import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './Translators.css';

const handleDragStart = (e) => e.preventDefault();

const items = [
    <img src="/img/translator1.jfif" title={"First slide label"} onDragStart={handleDragStart} className='carusel--img'/>,
    <img src="/img/translator2.jfif" onDragStart={handleDragStart} className='carusel--img' />,
    <img src="/img/translator3.jfif" onDragStart={handleDragStart} className='carusel--img' />,
    <img src="/img/translator4.jfif" onDragStart={handleDragStart} className='carusel--img' />,
    <img src="/img/translator5.jfif" onDragStart={handleDragStart} className='carusel--img' />,
];

const Translators = () => {
    return (
      <div className='translators--main' id="translators">
        <div className='translators'>Meet our team</div>
            <AliceCarousel 
 alt={items.title}
            responsive={{
              500: {
                items: 1
              },
        
                700: {
                  items: 3
                },
                890: {
                  items: 3
                },
                1024: {
                  items: 3
                }
              }}
             
            mouseTracking 
            items={items} 
            paddingLeft={150}
            
           
            />
            </div>
  )
}


export default Translators;