import React from 'react';
import { BiSearch } from 'react-icons/bi';
import './styles.css';

const SearchNav = () => {
  return (
    <div className='container__nav--search'>
      <form className='content__form--nav'>
        <input
          className='input__form--nav'
          placeholder='Buscar productos, marcas y ofertas...'
        />
        <button className='btn__form--nav'>
          <BiSearch className='icon__nav--search' />
        </button>
      </form>
    </div>
  );
};

export default SearchNav;
