import React from "react";
import { useState } from "react";
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


  // const intervalo = setInterval(() => {
  //   siguiente()
  // }, 3000);
  // let conta = 1;
  // const cve = setInterval(()=>{
  //   if (conta <= 6) {
  //     console.log(`Han pasado ${conta} segundos`);
  //   conta = conta + 1;
  //   } else {
  //     clearInterval(cve)
  //   }
    
  // }, 1000)


  return (



    <article className="container__carrusel">
      <a className="container__img--carrusel"
      href="https://getbootstrap.com/"
      >
        <img className="img__carrusel" src={imgCarrusel[carrusel]} alt={`imagen ${carrusel} del carrusel`} />
      </a>
      <section className="container__panel--carrusel">
        <button className="btn__carrusel" onClick={ anterior }> ANTERIOR </button>
        <button className="btn__carrusel" onClick={ siguiente }> SIGUIENTE </button>
      </section>
    </article>
    // <>
    //   <div className="container__carrusel">

    //     <div className="container__img--carrusel">
    //       <img className="img__carrusel"
    //         src={imgCarrusel[carrusel]}
    //         alt={`imagen ${carrusel} del carrusel`}
    //       />
    //     </div>



    //     <div className="container__panel--carrusel">


    //       <button
    //         className="btn__carrusel"
    //         onClick={anterior}
    //       >
    //         -1
    //       </button>
    //       <button
    //         className="btn__carrusel"
    //         onClick={siguiente}
    //       >
    //         +1
    //       </button>


    //     </div>






    //   </div>
    //   {/* <h1>counter: {carrusel}</h1> */}
    // </>
  )
};

export default Carrusel;
