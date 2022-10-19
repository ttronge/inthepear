import React, { useState } from "react";
import { createContext } from "react";

const UserContext = createContext();

const initialUser = { id: 1, name: 'Miguel', favoriteMovies: [1, 2] };

const UserProvider = ({ children }) => {

    const [user, setUster] = useState(initialUser);

    const login = () => {
        return setUster(initialUser)
    }

    const logout = () => {
        return setUster(null)
    }

    const data = { user, login, logout };

    return (
        <UserContext.Provider value={data}>
            {children}
        </UserContext.Provider>
    )
}


export default UserContext;
export { UserProvider };
