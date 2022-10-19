import React from 'react';
import { useContext } from 'react';
import UserContext from '../../contexts/UserContext';

const Filters = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      soy un filtro
    </div>
  )
}

export default Filters;
