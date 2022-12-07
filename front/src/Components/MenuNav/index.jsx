import React from 'react';
import ItemMenu from '../ItemMenu';
import './styles.css';

const MenuNav = () => {

  const catMenu = [
    {
      name: 'name prod',
      id: 1,
      category: 'Promociones',
      childrens: {
        brand: '',
        type: '',
        color: '',
        region: '',
        rating: '',
        description: '',
      },
    },
    {
      name: 'name prod',
      id: 2,
      category: 'Vinos',
      childrens: {
        brand: '',
        type: '',
        color: '',
        region: '',
        rating: '',
        description: '',
      },
    },
    {
      name: 'name prod',
      id: 3,
      category: 'Espumantes',
      childrens: {
        brand: '',
        type: '',
        color: '',
        region: '',
        rating: '',
        description: '',
      },
    },
    {
      name: 'name prod',
      id: 4,
      category: 'Whiskies',
      childrens: {
        brand: '',
        type: '',
        color: '',
        region: '',
        rating: '',
        description: '',
      },
    },
    {
      name: 'name prod',
      id: 5,
      category: 'Gin',
      childrens: {
        brand: '',
        type: '',
        color: '',
        region: '',
        rating: '',
        description: '',
      },
    },
    {
      name: 'name prod',
      id: 6,
      category: 'Licores',
      childrens: {
        brand: '',
        type: '',
        color: '',
        region: '',
        rating: '',
        description: '',
      },
    },
    {
      name: 'name prod',
      id: 7,
      category: 'Vodka',
      childrens: {
        brand: '',
        type: '',
        color: '',
        region: '',
        rating: '',
        description: '',
      },
    },
    {
      name: 'name prod',
      id: 8,
      category: 'Ron',
      childrens: {
        brand: '',
        type: '',
        color: '',
        region: '',
        rating: '',
        description: '',
      },
    },
    {
      name: 'name prod',
      id: 9,
      category: 'Aperitivos',
      childrens: {
        brand: '',
        type: '',
        color: '',
        region: '',
        rating: '',
        description: '',
      },
    },
    {
      name: 'name prod',
      id: 10,
      category: 'Cerveza',
      childrens: {
        brand: '',
        type: '',
        color: '',
        region: '',
        rating: '',
        description: '',
      },
    },
    {
      name: 'name prod',
      id: 11,
      category: 'Accesorios',
      childrens: {
        brand: '',
        type: '',
        color: '',
        region: '',
        rating: '',
        description: '',
      },
    },
  ];

  return (
    <article className='container__main-nav'>
      <ul className='content__main-nav'>
        {
          catMenu.map((elementCat, index) => {
            return (
              <ItemMenu key={index}
              elementCat={elementCat}
              />
            );
          })
        }
      </ul>

      {/* <ul>
      {
          catMenu.subCat.map( elementSubCat => {
            return (
              <p className='item__menu' key={elementSubCat.types}> {elementSubCat.types} </p>
            );
          } )
        }
      </ul> */}
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

export default MenuNav;
