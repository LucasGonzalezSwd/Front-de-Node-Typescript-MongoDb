import { useState } from 'react';

const Contador = () => {


  const [contador, setContador] = useState(0);

  const incrementarContador = () => {
    setContador(contador + 1);
  };
 
  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={incrementarContador} className='bg-red-900 rounded-md p-[0.5rem]'>Incrementar</button>
    </div>
  );
};

export default Contador;