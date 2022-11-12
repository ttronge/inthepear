import React from 'react';
import LogoInThePear from '../../assets/LogoInThePear.png';
import LogoInThePearResponsive from '../../assets/LogoInThePearResponsive.png';
import { BiCart } from 'react-icons/bi';
import { BsPersonCircle } from 'react-icons/bs';
import SearchNav from '../SearchNav';
import MainNav from '../MainNav';
import './styles.css';

const Header = () => {
  return (
    <header className='container__header'>

      <nav className='container__nav'>

        <a className='content__nav--logo' href="http://localhost:3000/">
          <img className='logo-in-the-pear' src={LogoInThePear} alt='Logo In The Pear' />
          <img className='logo-in-the-pear-responsive' src={LogoInThePearResponsive} alt='Logo In The Pear' />
        </a>

        <SearchNav />

        <div className='content__nav--panel'>
          <button className='btn__panel--nav'>
            <BiCart className='container__btn--panel__nav' />
          </button>
          <button className='btn__panel--nav'>
            <BsPersonCircle className='container__btn--panel__nav' />
          </button>
        </div>

      </nav>

      < MainNav />
    </header>
  )
};

export default Header;
