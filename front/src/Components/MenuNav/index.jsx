import React from 'react';
import catMenu from '../../jsonPrueba'
import ItemMenu from '../ItemMenu';
import './styles.css';



const MenuNav = () => {
  return(
    <div className='container__menu-nav'>
      <div className='item-menu-nav'>
        {
        catMenu.map( ( catMenu, index ) => (
          <ItemMenu key={index}
            catMenu={catMenu}
          />
            // <div className='element' key={index}>
            //   { catMenu.category }
            // </div> 
          ))
        }
      </div>
    </div>
  );
};
export default MenuNav;
