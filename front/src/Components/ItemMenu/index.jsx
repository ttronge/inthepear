import './styles.css';

const ItemMenu = ({elementCat}) => {
  // console.log(elementCat.childrens);

  if (elementCat.childrens){
    console.log('hola')
  }
  
  return (
    <>
      <div className='item__menu'>
        { elementCat.category }
        <div className='subCatMenu'>hola</div>
      </div>
    </>
  )
  // if (elementCat.childrens) {
  //   return(
  //     console.log('hola')
  //     // <div className='item__menu'> { elementCat.category} {console.log('hola')} </div>
  //   );
  // } else {
  //   return (
  //   <div className='item__menu'> { elementCat.category} </div>
  // );
  // }
  
};

export default ItemMenu;

//hover y si children en true activas clase css




// import { useState } from "react"

// export default function SidebarItem({item}){
//     const [open, setOpen] = useState(false)

    
//     if(item.childrens){
//         return (
//             <div className={open ? "sidebar-item open" : "sidebar-item"}>
//                 <div className="sidebar-title">
//                     <span>
//                         { item.icon && <i className={item.icon}></i> }
//                         {item.title}    
//                     </span> 
//                     <i className="bi-chevron-down toggle-btn" onClick={() => setOpen(!open)}></i>
//                 </div>
//                 <div className="sidebar-content">
//                     { item.childrens.map((child, index) => <SidebarItem key={index} item={child} />) }
//                 </div>
//             </div>
//         )
//     }else{
//         return (
//             <a href={item.path || "#"} className="sidebar-item plain">
//                 { item.icon && <i className={item.icon}></i> }
//                 {item.title}
//             </a>
//         )
//     }
// }
