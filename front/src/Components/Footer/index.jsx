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
            <img className='img-logo-footer' src={LogoInThePear} alt="Logo footer" />
          </div>
          <p>Tienda de bebidas</p>
        </div>
        <div className="footer-left-second-column">
          <a className='txt-footer-left-second-column' href="http://localhost:3000/">Cómo comprar</a>
          <a className='txt-footer-left-second-column' href="http://localhost:3000/">Cancelar una compra</a>
          <a className='txt-footer-left-second-column' href="http://localhost:3000/">Contactos</a>
          <a className='txt-footer-left-second-column' href="http://localhost:3000/">Franquicias</a>
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
        <p className='txt-footer-rigth-single-column'>agustomi@gmail.com</p>
        <p className='txt-footer-rigth-single-column'>1144444444</p>
        <p className='txt-footer-rigth-single-column'>San Vicente 4444, San Martín, C4444</p>
      </section>
    </article>
    <article className='content-post-footer'>
      <section className='post-footer-content-left'>
        <p className="txt-post-footer-left">Powered By Agus y Tomi</p>
        <p className="txt-post-footer-left">Avisos Legales</p>
        <p className="txt-post-footer-left">¿Como cuidamos tu privacidad?</p>
      </section>
      <section className='post-footer-content-rigth'>
        <div className="content-img-post-footer">
          <img className='img-logo-footer' src={LogoInThePearResponsive} alt="Logo post footer" />
        </div>
      </section>
    </article>
  </footer>
)

export default Footer;
