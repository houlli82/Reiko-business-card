import React, { useState } from 'react';
import s from './style.module.css';
import ReactCardFlip from 'react-card-flip';
import instagram from './instagram.png';
import gmail from './gmail.png';
import line from './line.png';
import arrow from './arrow.png';
import Reiko from './reiko.jpg'

export function CardFlip() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  }

  return (
    <div className={s.container}>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal" >
        <div className={s.card} onClick={handleClick}>
          <div className={s.details} >
            <h1>Reiko Houlli</h1>
            <h2>Dog groomer</h2>
            <p>www.vivadog.com</p>
            <p>reikohoulli@vivadog.com</p>
            <p>080-1234-5678</p>
          </div>

          <div className={s.photoContainer}>
            <img className={s.photo} src={Reiko} alt="Reiko"></img>
          </div>


          <div className={s.sidebar}>
            <img className={s.img} src={instagram} width={50} height={50} alt="instagram logo"></img>
            <img className={s.img} src={gmail} width={50} height={50} alt="gmail logo"></img>
            <img className={s.img} src={line} width={50} height={50} alt="line logo"></img>
          </div>
          <img className={s.arrow} onClick={handleClick} src={arrow} alt="flip card" ></img>
        </div>
        <div className={s.card} onClick={handleClick}>
          <h1>Map</h1>
          <img className={s.arrow} src={arrow} alt="flip card" ></img>
        </div>
      </ReactCardFlip>
    </div>
  )
}
