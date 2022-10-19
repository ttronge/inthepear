import React from 'react';
import { useContext } from 'react';
import UserContext from '../../contexts/UserContext';
// import PerContext from '../../contexts/UserContext';

const Filters = () => {




    // const data.user = useContext( UserContext );
    const { user, login, logout } = useContext(UserContext);

    return (

        <div>
            <h1> {user ? `Soy un Filters ${user.name}` : `Quien sos flaco?`} </h1>
            {user ?
                <button onClick={logout}> logut </button>
                :
                <button onClick={login}> login </button>
            }
            <h2> {user ? `Hola ${user.name}` : `Holi`} </h2>
        </div>
    )
}

export default Filters;
