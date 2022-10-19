// import React, { useState } from "react";
import { createContext } from "react";

const UserContext = createContext();

// const useProvider = (props) => {
//     const [name,setName] = useState('')
//     const data = {
//         name
//     }
//     console.log(props);
//     return (
//         <useContext.Provider value={data}>
//             {props.children}
//         </useContext.Provider>
//     )
// }


export default UserContext;
// export { useProvider };
