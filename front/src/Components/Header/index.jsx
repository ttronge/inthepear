import LogoInThePear from '../../assets/LogoInThePear.png';
import LogoInThePearResponsive from '../../assets/LogoInThePearResponsive.png';
import { BiCart } from 'react-icons/bi';
import { BsPersonCircle } from 'react-icons/bs';
import './styles.css';
import SearchNav from '../SearchNav';

const Header = () => {
  return (
    <header className='container-header'>
      <nav className='container-nav'>
        <div className='content-nav-logo'>
          <img className='logo-in-the-pear' src={LogoInThePear} alt='Logo In The Pear' />
          <img className='logo-in-the-pear-responsive' src={LogoInThePearResponsive} alt='Logo In The Pear' />
        </div>
        <SearchNav />
        <div className='content-nav-panel'>
          <button className='btn-menu-nav'>
            <BiCart size="60%" color='#FFFFFF' />
          </button>
          <button className='btn-menu-nav'>
            <BsPersonCircle size="60%" color='#FFFFFF' />
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header;
