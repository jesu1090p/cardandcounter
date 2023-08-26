import React from 'react';

const Card = ({ data, count }) => {
  return (
    <div className="card">
      <img src={data.imagen} alt="Card" />
      <div className="card-body">
        <div className="card-top">
            <span>{data.nombre}</span> <span className='counter'>Contador: {count}</span>
        </div>
        <p>{data.descripcion}</p>
        <button>Ver más</button>
      </div>
    </div>
  );
};

export default Card;