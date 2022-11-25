import React from 'react';
import './styles.css';

const MainNav = () => {

  const catMenu = [
    {
      name: 'Promociones',
      id: 1,
    },
    {
      name: 'Vinos',
      id: 2,
    },
    {
      name: 'Espumantes',
      id: 3,
    },
    {
      name: 'Whiskies',
      id: 4,
    },
    {
      name: 'Gin',
      id: 5,
    },
    {
      name: 'Licores',
      id: 6,
    },
    {
      name: 'Vodka',
      id: 7,
    },
    {
      name: 'Ron',
      id: 8,
    },
    {
      name: 'Aperitivos',
      id: 9,
    },
    {
      name: 'Cerveza',
      id: 10,
    },
    {
      name: 'Accesorios',
      id: 11,
    },
  ];


  return (
    <article className='container__main-nav'>
      <ul className='content__main-nav'>
        {
          catMenu.map( elementCat => {
            return (
              <p className='item__menu' key={elementCat.id}> { elementCat.name } </p>
            )
          } )
        }
      </ul>
    </article>


    // <li className='item__main-nav'>main-nav</li>
    // <li className='item__main-nav'>main-nav</li>
    // <li className='item__main-nav'>main-nav</li>
    // <li className='item__main-nav'>main-nav</li>
    // <li className='item__main-nav'>main-nav</li>
    // <li className='item__main-nav'>main-nav</li>
    // <li className='item__main-nav'>main-nav</li>
    // <li className='item__main-nav'>main-nav</li>
    // <li className='item__main-nav'>main-nav</li>
    // <li className='item__main-nav'>main-nav</li>
    // <li className='item__main-nav'>main-nav</li>
  );
};

export default MainNav;
