import SubCat from '../SubCatMenuNav';
import './styles.css';


const ItemMenu = ({ catMenu }) => {
  // console.log(catMenu);
  // console.log(catMenu.childrens)
  const {childrens} = catMenu;
  return (
    <div>
      {
        childrens.map( ( subName, index ) => {
          return (
            <p key={index}> {subName.subName} </p>
            // <h1 key={index}>
            //   { c.sabName }
            // </h1>
          )
        } )
      }
    </div>
  )
  
};

export default ItemMenu;

{/* <div className='item-menu-nav'>
        {
          catMenu.childrens ? <div>nada</div>  : catMenu.map( ( e, index ) =>(
            <div className='element' key={index}>
              {e.nameCat} 
            </div> 
          ))
        }
  </div> */}