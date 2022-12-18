import React from "react";
import { useParams } from 'react-router-dom';

const SingleProduct = () => {
  const { name } = useParams();

  return (
    <div>
      <h1>Hola soy {name}</h1>
    </div>
  )
}

export default SingleProduct;
