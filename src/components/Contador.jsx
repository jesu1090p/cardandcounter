import React, { useState } from 'react';
import './styles/buttons.css';

const Contador = ({ actualizaContador }) => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  actualizaContador(count);

  return (
    <div>
      <p>Contador: {count}</p>
      <button className="incrementar" onClick={increment}>Incrementar</button>
      <button className="decrementar" onClick={decrement}>Decrementar</button>
      <button className="reiniciar" onClick={reset}>Reiniciar</button>
    </div>
  );
};

export default Contador;
