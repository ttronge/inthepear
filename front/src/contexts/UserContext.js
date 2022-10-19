import React, { useState } from "react";
import { createContext } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {

    const [user, setUster] = useState('');
    
    const data = { user };

    return (
        <UserContext.Provider value={data}>
            {children}
        </UserContext.Provider>
    )
}


export default UserContext;
export { UserProvider };
