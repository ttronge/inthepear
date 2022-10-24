import React from 'react';
import LogoInThePear from '../../assets/LogoInThePear.png'
import LogoInThePearResponsive from '../../assets/LogoInThePearResponsive.png';
// CAMBIAR NOMBRE LOGO
import { BsInstagram } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import './style.css';

const Footer = () => (

  <footer className='container-footer'>

    <article className='content-footer'>

      <section className="content-footer-left">

        <div className="footer-left-first-column">

          <div className="content-img-footer">

            <img className='img-logo-footer' src={LogoInThePear} alt="" />

          </div>

          <p>Tienda de bebidas</p>

        </div>

        
        <div className="footer-left-second-column">
          <span className='content-txt-footer-left-second-column'> <a href="http://localhost:3000/">Cómo comprar</a> </span>
          <span className='content-txt-footer-left-second-column'> <a href="http://localhost:3000/">Cancelar una compra</a> </span>
          <span className='content-txt-footer-left-second-column'> <a href="http://localhost:3000/">Contactos</a> </span>
          <span className='content-txt-footer-left-second-column'> <a href="http://localhost:3000/">Franquicias</a> </span>
        </div>

      </section>

      <section className="content-footer-rigth">

        <span className='content-footer-single-column-icons'>
          <a className='icons-footer-single-colum' href='none'>
            < BsFacebook size="25px" color='#FFFFFF' />
          </a>
          <a className='icons-footer-single-colum' href='https://www.instagram.com/agustindip_d/' >
            < BsInstagram size="25px" color='#FFFFFF' />
          </a>
        </span>
        <span className='content-txt-footer-rigth-single-column'> <p>agustomi@gmail.com</p> </span>
        <span className='content-txt-footer-rigth-single-column'> <p>1144444444</p> </span>
        <span className='content-txt-footer-rigth-single-column'> <p>San Vicente 4444, San Martín, C4444</p> </span>
      </section>

    </article>

    <article className='content-post-footer'>


      <section className='post-footer-content-left'>

        <span className="content-txt-post-footer-left"> <p>Powered By Agus y Tomi</p> </span>
        <span className="content-txt-post-footer-left"> <p>Avisos Legales</p> </span>
        <span className="content-txt-post-footer-left"> <p>¿Como cuidamos tu privacidad?</p> </span>

      </section>

      <section className='post-footer-content-rigth'>

        <div className="content-img-post-footer">
          <img className='img-logo-footer' src={LogoInThePearResponsive} alt="" />
        </div>

      </section>

    </article>

  </footer>
)

export default Footer;
