import React from 'react';
import catMenu from '../../utils/jsonPrueba'
import ItemMenu from '../ItemMenu';
import './styles.css';

const MenuNav = () => {
  return(
    <div className='container__menu-nav'>
      <div className='element__menu-nav'>
        {
        catMenu.map( ( catMenu, index ) => (
          <ItemMenu key={index}
            catMenu={catMenu}
          />
          ))
        }
      </div>
    </div>
  );
};

export default MenuNav;
