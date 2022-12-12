// import SubCat from '../SubCatMenuNav';
import './styles.css';


const ItemMenu = ({ catMenu }) => {
  console.log(catMenu);
  const { childrens } = catMenu;
  console.log(childrens);
  // console.log(catMenu.childrens)
  // console.log(catMenu);
  return (
    <span className='element'>
      {catMenu.category}
      {
        childrens && childrens.map(() => {
          return (
              <div className='childrens'>
                {
                  childrens && childrens.map(({ subName, variants }, index) => {
                    return (
                      <div className='subCat' key={index}>
                        <div className='content_subcat'>
                          <h4>{subName}</h4>
                          { variants.map( (variants, index) => {
                            return (
                              <p key={index}> {variants} </p>
                            )
                          } ) }
                        </div>
                      </div>
                    )
                  })
                }
              </div>

          )
        })
      }


    </span>
    // { childrens && childrens.map( ( catMenu, index ) => { return (
    //   <ItemMenu key={index}
    //     catMenu={catMenu}
    //   />
    // )}

    // ) }
    // <div className='cajita'> {catMenu.subName} </div>
    // <div className='bloque'>

    // </div>
  )

};

export default ItemMenu;
