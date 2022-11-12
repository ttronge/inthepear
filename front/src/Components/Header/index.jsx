import LogoInThePear from '../../assets/LogoInThePear.png';
import LogoInThePearResponsive from '../../assets/LogoInThePearResponsive.png';
import { BiSearch } from 'react-icons/bi';
import { BiCart } from 'react-icons/bi';
import { BsPersonCircle } from 'react-icons/bs';
import './style.css';
import MainNav from '../MainNav';

const Header = () => {
  return (
    <header className='container__header'>
      <nav className='container__nav'>
        <a className='content__nav--logo' href="http://localhost:3000/">
          <img className='logo-in-the-pear' src={LogoInThePear} alt='Logo In The Pear' />
          <img className='logo-in-the-pear-responsive' src={LogoInThePearResponsive} alt='Logo In The Pear' />
        </a>

        <div className='content-nav-search'>
          
          <form className='content-form-nav'>
            <input
              className='input-form-nav'
              placeholder='Buscar productos, marcas y ofertas...'
            />
            <button className='btn-form-nav'>
              <BiSearch size="65%" color='7E7E7E' />
            </button>
          </form>
        </div>
        <div className='content__nav--panel'>
            <button className='btn__panel--nav'>
              <BiCart className='container__btn--panel__nav' size="60%" color='#FFFFFF' />
            </button>
            <button className='btn__panel--nav'>
              <BsPersonCircle className='container__btn--panel__nav' size="60%" color='#FFFFFF' />
            </button>
          </div>

        
      </nav>
      < MainNav />
    </header>
  );
}

export default Header;
