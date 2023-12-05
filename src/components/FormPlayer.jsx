import{ useState } from 'react';
import { useDispatch } from 'react-redux';
import { postPlayers } from '../redux/actions';// Asegúrate de importar correctamente tu acción de agregar jugador

const FormPlayer = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState('');
  const [playerData, setPlayerData] = useState({
    gameName: 'LEAGUE OF LEGENDS',
    namePlayer: '',
    range: '',
    honor: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    let parsedValue = value;
    let error = '';
    if (name === 'honor') {
      // Verificar si el valor ingresado es un número entre 0 y 5
      const intValue = parseInt(value, 10);
      if (!isNaN(intValue) && intValue >= 0 && intValue <= 5) {
        parsedValue = intValue;
      } else {
      
        
        error = 'El honor debe ser un número entre 0 y 5';
      }
    }
   
    setPlayerData({ ...playerData, [name]: parsedValue })
    setError(error);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (playerData.range === "") {
      setError("Por favor, selecciona un rango.");
      return; // Evita enviar el formulario si no se selecciona ningún rango
    }
    const updatedPlayerData = {
        ...playerData,
        gameName: 'LEAGUE OF LEGENDS',
        honor: parseInt(playerData.honor) // Incluir el nombre del juego aquí
      };
    dispatch(postPlayers(updatedPlayerData));
    console.log(playerData);
    setPlayerData({
        gameName: 'LEAGUE OF LEGENDS',
      namePlayer: '',
      range: '',
      honor: ""
    });
  };

  return (
    <div className='w-3/4 max-[463px]:w-5/6  backCard rounded-md p-[1rem]  flex justify-center items-center mt-[1rem] mb-[2rem]' >
    <form onSubmit={handleSubmit} className='w-3/4 p-[1rem]  pt-[2.5rem] justify-center items-center flex-col flex gap-[1rem]'>
      <div className='w-full max-[463px]:flex-col flex justify-center '>
        <label htmlFor='gameName' className='w-[8rem] max-[463px]:w-full text-white flex justify-evenly '>
          Game Name: 
          </label>
          <input
          className='w-2/4 max-[463px]:w-full flex rounded-sm max-[463px]:mt-[0.2rem]'
            type="text"
            name="gameName"
            value={playerData.gameName}
            readOnly
            required
          />
      </div>
      <div className='w-full max-[463px]:flex-col flex justify-center'>
        <label htmlFor='namePlayer' className='w-[8rem] max-[463px]:w-full text-white flex justify-evenly  '>
          Player Name:
          </label>
          <input
          className='w-2/4 max-[463px]:w-full flex rounded-sm max-[463px]:mt-[0.2rem]'
            type="text"
            name="namePlayer"
            value={playerData.namePlayer}
            onChange={handleChange}
            required
          />
      </div>
      <div className='w-full max-[463px]:flex-col flex justify-center'>
        <label htmlFor='range' className='w-[8rem] max-[463px]:w-full text-white flex justify-evenly  '>
          Range:
          </label>
          <select
          className='w-2/4 max-[463px]:w-full flex rounded-sm max-[463px]:mt-[0.2rem]'
            type="text"
            name="range"
            value={playerData.range}
            onChange={handleChange}
            required
          >          
          <option value="">Seleccionar rango</option>
            <option value="IRON">IRON</option>
            <option value="BRONZE">BRONZE</option>
            <option value="SILVER">SILVER</option>
            <option value="GOLD">GOLD</option>
            <option value="PLATINIUM">PLATINIUM</option>
            <option value="DIAMOND">DIAMOND</option>
            <option value="MASTER">MASTER</option>
            <option value="GRANDMASTER">GRANDMASTER</option>
            <option value="CHALLENGER">CHALLENGER</option>
          </select>
      </div>
      <div className='w-full flex-col flex justify-center'>
        <div className='w-full max-[463px]:flex-col flex justify-center'>
        <label htmlFor='honor' className='w-[8rem] max-[463px]:w-full text-white flex justify-evenly  '>
          Honor:
          </label>
          <input
          className='w-2/4 max-[463px]:w-full flex rounded-sm max-[463px]:mt-[0.2rem]'
            type="text"
            name="honor"
            value={playerData.honor}
            onChange={handleChange}
            required
          />
          </div>
          <div className='flex w-11/12 flex-col items-end'>

          <p className='text-red-500 mr-[2.5rem] p-[0.5rem]'>{error}</p>
          </div>
      </div>
      <div className='flex w-full justify-center'>
      <button type="submit" className=' border-white text-white p-[0.6rem] border-[0.07rem] rounded-md '>Add Player</button>
      </div>
  
    </form>
    </div>
  );
};

export default FormPlayer;
