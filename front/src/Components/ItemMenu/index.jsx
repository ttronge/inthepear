import './styles.css';

const ItemMenu = ({ catMenu }) => {
  const { childrens } = catMenu;
  return (
    <div className='item__men--nav'>
      {catMenu.category}
      {
        childrens &&
        <div className='container__sub-item--menu-nav'>
          {
            childrens && childrens.map(({ subName, variants }, index) => {
              return (
                <div className='sub__item--menu_nav' key={index}>
                  {subName && <h4 className='name__sub-item--menu-nav'>
                    {subName}
                  </h4>}
                  {variants.map((variants, index) => {
                    return (
                      <p className='variant__sub-item--menu-nav' key={index}>
                        {variants}
                      </p>
                    )
                  })
                  }
                </div>
              );
            })
          }
        </div>
      }
    </div>
  );
};

export default ItemMenu;
