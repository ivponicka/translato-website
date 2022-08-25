import React from 'react';
import './Banner.css';

 const Banner = () => {
  return (
    <div className='main'>
    <img src='/img/header.jpg' className='header--picture' />
    <div className='main--text'>
        <div className='main--text_main'> 
        High-quality translation solutions</div>
        <div className='main--text_second'> We will help you to quickly reach, expand, and engage with worldwide audiences by transforming your content and data.
        </div>
        <div className='main--text_third'>Welocalize has been trusted by Global 2000 organizations in a range of industries to produce multilingual content to support marketing communications, international launches, and cross-border commercial operations as they engage with global audiences to build their businesses for more than 20 years.</div>
    </div>
</div>
  )
}


export default Banner;