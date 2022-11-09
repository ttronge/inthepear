import React from "react";
import { Link } from 'react-router-dom';
import { useState } from "react";
import { SlArrowLeft } from 'react-icons/sl';
import { SlArrowRight } from 'react-icons/sl';
import carrusel1 from '../../assets/carrusel/carrusel1.png';
import carrusel2 from '../../assets/carrusel/carrusel2.png';
import carrusel3 from '../../assets/carrusel/carrusel3.png';
import carrusel4 from '../../assets/carrusel/carrusel4.png';
import './styles.css';

const imgCarrusel = [
  carrusel1,
  carrusel2,
  carrusel3,
  carrusel4,
];

const Carrusel = () => {

  const initialCarrusel = 0;
  const [carrusel, setCarrusel] = useState(initialCarrusel);

  const anterior = () => {
    const condition = carrusel > 0;
    condition ? setCarrusel(carrusel - 1) : setCarrusel(imgCarrusel.length - 1);
  }

  const siguiente = () => {
    const condition = carrusel === 3;
    condition ? setCarrusel(initialCarrusel) : setCarrusel(carrusel + 1);
  };

  return (
    <article className="container__carrusel">
      <Link className="container__img--carrusel"
        to="#"
      >
        <img className="img__carrusel"
          src={imgCarrusel[carrusel]}
          alt={`imagen ${carrusel} del carrusel`} />
      </Link>
      <section className="container__panel--carrusel">
        <button className="btn__carrusel" onClick={anterior}> <SlArrowLeft size="40px" /> </button>
        <button className="btn__carrusel" onClick={siguiente}> <SlArrowRight size="40px" /> </button>
      </section>
    </article>
  )
};

export default Carrusel;
