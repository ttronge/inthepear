import React from 'react';
import { Link } from 'react-router-dom';
import LogoInThePear from '../../assets/LogoInThePear.png';
import LogoInThePearResponsive from '../../assets/LogoInThePearResponsive.png';
import { BsInstagram } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import './styles.css';

const Footer = () => (

  <footer className='container__footer'>
    <article className='content__footer'>
      <section className="content__footer--left">
        <div className="footer__left--first-column">
          <div className="content__img--footer">
            <img className='img__logo--footer' src={LogoInThePear} alt="Logo footer" />
          </div>
          <p>Tienda de bebidas</p>
        </div>
        <div className="footer__left--second-column">
          <Link className='footer__left--second-column__link' to="#">Cómo comprar</Link>
          <Link className='footer__left--second-column__link' to="#">Cancelar una compra</Link>
          <Link className='footer__left--second-column__link' to="#">Contactos</Link>
          <Link className='footer__left--second-column__link' to="#">Franquicias</Link>
        </div>
      </section>
      <section className="content__footer--rigth">
        <span className='footer__rigth--single-column__icons'>
          <Link className='icons__footer--single-colum' to='#'>
            < BsFacebook size="25px" color='#FFFFFF' />
          </Link>
          <Link className='icons__footer--single-colum' to='https://www.instagram.com/agustindip_d/' >
            < BsInstagram size="25px" color='#FFFFFF' />
          </Link>
        </span>
        <p className='footer__rigth--single-column'>agustomi@gmail.com</p>
        <p className='footer__rigth--single-column'>1144444444</p>
        <p className='footer__rigth--single-column'>San Vicente 4444, San Martín, C4444</p>
      </section>
    </article>
    <article className='content__post-footer'>
      <section className='content__post-footer--left'>
        <p className="post__footer--left">Powered By Agus y Tomi</p>
        <p className="post__footer--left">Avisos Legales</p>
        <p className="post__footer--left">¿Como cuidamos tu privacidad?</p>
      </section>
      <section className='content__post-footer--rigth'>
        <div className="content__img--post-footer">
          <img className='img__logo--footer' src={LogoInThePearResponsive} alt="Logo post footer" />
        </div>
      </section>
    </article>
  </footer>
);

export default Footer;
