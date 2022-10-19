import React from 'react';
import { useContext } from 'react';
import UserContext from '../../contexts/UserContext';
// import PerContext from '../../contexts/UserContext';

const Filters = () => {


    
    
    // const data.user = useContext( UserContext );
    const { user, state, setState } = useContext( UserContext );
    const logg = { name: 'Agus', estado: state };

    return (

        <div>
            <h1> { logg.estado ?  `Soy un Filters ${ logg.name }` : `Quien sos flaco?` } </h1>
            { logg.estado ?
                <button onClick={ () => setState(!state) }> Loggeado </button>
            :
                <button onClick={ () => setState(!state) }> Loggeate </button>
            }
            <h2> { user ? `Hola ${ user.name }` : `Holi` } </h2>
        </div>
    )
}

export default Filters;
