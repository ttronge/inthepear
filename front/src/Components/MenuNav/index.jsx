import React from 'react';
import ItemMenu from '../ItemMenu';
import catMenu from '../../jsonPrueba'
import './styles.css';



const MenuNav = () => {
  console.log(catMenu);
  return(
    <div className='container__menu-nav'>
      <div className='item-menu-nav'>
        {catMenu.map( ( catMenu, index ) =>(
            <div className='element' key={index}>
              <ItemMenu
                catMenu={catMenu}
              /> 
            </div> 
          ))
        }
      </div>
    </div>
  )
};
export default MenuNav;
