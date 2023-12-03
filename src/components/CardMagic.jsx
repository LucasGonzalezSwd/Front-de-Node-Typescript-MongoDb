import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {putPlayers } from '../redux/actions'; 
import { faPenSquare} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export const CardMagic = ({ playerId,namePlayer, gameName, range, honor }) => {

  const dispatch = useDispatch();

  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState('');

  const [editedPlayerData, setEditedPlayerData] = useState({
    namePlayer: namePlayer,
    range: range,
    honor: honor,
  });

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {

    dispatch(putPlayers(playerId, editedPlayerData));
    setIsEditing(false);
  };

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
  
    setEditedPlayerData({ ...editedPlayerData, [name]: parsedValue });
    setError(error); // Establecer el estado del error
  };

  let cardColor = '';
  if (range === 'IRON') {
    cardColor = 'backCard text-gray-300 shadow-[4px_6px_13px_6px_rgba(109,108,100,0.88)] ';
  } else if(range === 'BRONZE') {
    cardColor = 'backCard text-amber-800 shadow-[4px_6px_13px_6px_rgba(142,107,56,0.88)]';
  }else if(range === 'SILVER') {
    cardColor = ' backCard text-gray-200 shadow-[4px_6px_13px_6px_rgba(214,214,214,0.88)]';
  }else if(range === 'GOLD') {
    cardColor = 'backCard text-yellow-400 shadow-[4px_6px_13px_6px_rgba(244,229,37,0.88)]';
  }else if(range === 'PLATINIUM') {
    cardColor = 'backCard text-green-400 shadow-[4px_6px_13px_6px_rgba(35,187,119,0.88)]';
  }else if(range === 'ESMERALD') {
    cardColor = 'backCard text-green-600  shadow-[4px_6px_13px_6px_rgba(19,122,20,0.88)]';
  }else if(range === 'DIAMOND') {
    cardColor = 'backCard text-blue-500 shadow-[4px_6px_13px_6px_rgba(0,103,179,0.88)]';
  }else if(range === 'MASTER') {
    cardColor = 'backCard text-orange-700 shadow-[4px_6px_13px_6px_rgba(188,77,0,0.88)]';
  }else if(range === 'GRANDMASTER') {
    cardColor = 'backCard text-red-700 shadow-[4px_6px_13px_6px_rgba(200,34,25,0.88)]';
  }else if(range === 'CHALLENGER') {
    cardColor = 'backCard text-black shadow-[4px_6px_13px_6px_rgba(0,0,0,0.88)]';
  }else{
    cardColor = 'text-black';
  }

  return (
    <div>
    {isEditing ? ( <div className='flex  rounded-md justify-center mt-[2rem] gap-[2rem] flex-wrap items-center '>
      <div className={`flex flex-col justify-evenly items-center  h-[18rem] w-[14rem] p-[1rem] rounded-md ${cardColor}`}>
        <label className='' htmlFor="namePlayer">New name</label>
      <input
        className='text-black w-11/12 -mt-[0.7rem] rounded-sm'
        type="text"
        name="namePlayer"
        value={editedPlayerData.namePlayer}
        onChange={handleChange}
      />
       <label className='' htmlFor="range">New range</label>
       <select
  className='text-black w-11/12 -mt-[0.7rem] rounded-sm'
  name="range"
  value={editedPlayerData.range}
  onChange={handleChange}
>
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
      <label className='' htmlFor="honor">New honor</label>
      <input
      className='text-black w-11/12 -mt-[0.7rem] rounded-sm'
      type="text" // Cambiar el tipo a "text" en lugar de "number"
      name="honor"
      value={editedPlayerData.honor}
      onChange={handleChange}
      />
      <p className='text-red-500'>{error}</p>
      <button onClick={handleSave}>Save</button>
      </div>
    </div>
  ) :(
      <div className="flex  rounded-md justify-center mt-[2rem] gap-[2rem] flex-wrap items-center ">
      <div className={`flex flex-col justify-evenly items-center  h-[18rem] w-[14rem] p-[1rem] rounded-md ${cardColor}`}>
      <div className=' flex w-full justify-end -mt-[1.4rem] -mr-[1rem]'>

<button className='flex justify-center rounded-full ' onClick={handleEdit}><FontAwesomeIcon icon={faPenSquare} size='2xl'/></button>
</div>
        <p className="flex flex-col justify-center items-center -mt-[1rem]">Summoner Name<span>{namePlayer}</span></p>
        <p className="flex flex-col justify-center items-center">Game<span>{gameName}</span></p>
        <p className="flex flex-col justify-center items-center">Range <span>{range}</span></p>
        <p className="flex flex-col justify-center items-center">Honor <span>{honor}</span></p>
       
        </div>
        </div>
        )}
        </div>
  );
};
