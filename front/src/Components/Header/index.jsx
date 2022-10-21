import LogoInThePear from '../../assets/LogoInThePear.png';
import LogoInThePearResponsive from '../../assets/LogoInThePearResponsive.png';
import { BiSearch } from 'react-icons/bi';
import { BiCart } from 'react-icons/bi';
import { BsPersonCircle } from 'react-icons/bs';
import './style.css';

const Header = () => {
  return (
    <header className='container-header'>
      <nav className='container-nav'>
        <div className='content-nav-logo'>
          <img className='LogoInThePear' src={LogoInThePear} alt='Logo In The Pear' />
          <img className='LogoInThePearResponsive' src={LogoInThePearResponsive} alt='Logo In The Pear' />
        </div>
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
          <div className='content-nav-panel'>
            <button className='btn-menu-nav'>
              <BiCart size="60%" color='#FFFFFF' />
            </button>
            <button className='btn-menu-nav'>
              <BsPersonCircle size="60%" color='#FFFFFF' />
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header;
