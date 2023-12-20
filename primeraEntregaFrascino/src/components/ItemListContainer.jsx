import React from 'react'

const ItemListContainer = ({ mensaje, cantidad }) => {
  return (
    <div id='container'>
      <p>{mensaje}</p>
      <button>Agregar al carrito</button>
    </div>
  );
}

export default ItemListContainer;
