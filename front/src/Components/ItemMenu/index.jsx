import './styles.css';

const ItemMenu = ({ catMenu }) => {
  const { childrens } = catMenu;
  return (
    <div className='element'>
      {catMenu.category}
      {
        childrens &&
        <div className='childrens'>
          {
            childrens && childrens.map(({ subName, variants }, index) => {
              return (
                <div className='subCat' key={index}>
                  <div className='content_subcat'>
                    {subName && <h4 className='subname'>{subName}</h4>}
                    {variants.map((variants, index) => {
                      return (
                        <p className='variants' key={index}> {variants} </p>
                      )
                    })}
                  </div>
                </div>
              )
            })
          }
        </div>
      }
    </div>
  );
};

export default ItemMenu;
