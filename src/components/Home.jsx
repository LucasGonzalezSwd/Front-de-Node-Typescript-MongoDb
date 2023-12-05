import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPlayers } from '../redux/actions';
import { CardMagic } from './CardMagic';
import FormPlayer from './FormPlayer';
import { faArrowUp} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import lolcito from "../assets/lolcito.jpg"
export const Home = () => {

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
    
      });
    }
  };

  const dispatch = useDispatch();
  const players = useSelector((state) => state.players);
 

  useEffect(() => {
   
      dispatch(fetchPlayers());
    
  }, [dispatch]);

 

  return (
     <div className='flex flex-col h-full back' id='nav'>
  
    <div className="flex w-screen h-full justify-center mt-[3rem] gap-[1rem] flex-wrap items-center  mb-[2rem] ">
      
      
      {players.map((card) => (
        <div key={card._id} className='ml-[1rem] mr-[1rem] mb-[0.5rem]'>
         <CardMagic  playerId={card._id} namePlayer={card.namePlayer} gameName={card.gameName}range={card.range} honor={card.honor}/> 
         </div>
      ))}
    
    </div>
    <div className='flex w-screen justify-center' id='card'>
      <FormPlayer/>
    </div>
      
    <div className='flex flex-col w-full items-center justify-center mt-[4rem]' >
       <img src={lolcito} alt="" className=' object-contain w-3/4 flex items-center justify-center' />
       <h2 className='flex w-3/4 justify-start mb-[3rem]  text-xl ' id='about' >
        Pagina desarrollada para practicar Node, Typescript, MongoDB, Moongose, React, Redux, Tailwind, entre otras tecnologias/librerias. Si juegas League of legends te invito a crear tu carta de invocador, y sino juegas puedes hacerlo igualmente para probar el Post. En las cartas podran editar la informacion, depende el elo de la carta tendra su color distintivo.
       </h2>
    </div>

    <div className='flex w-full justify-end'>
         <button onClick={() => scrollToSection("nav")} className='bg-slate-900 w-[2.8rem] h-[2.8rem] rounded-full mt-[1rem] mr-[2.5rem] mb-[2rem]'>
  <FontAwesomeIcon icon={faArrowUp} style={{color: "#fff"}} />
</button>
          </div>
    </div>
  );
};

// import  { useState, useEffect } from 'react';
// import charactersData from './characters.json'
// const Home = () => {
//   const [characters, setCharacters] = useState([]);
//   const [sortedAscending, setSortedAscending] = useState(true);
//   const [originalOrder, setOriginalOrder] = useState([]);
//   useEffect(() => {
//     const fetchCharacters = async () => {
//       try {
//         const response = await fetch('https://rickandmortyapi.com/api/character');
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         setCharacters(data.results);
//         setOriginalOrder(data.results)
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchCharacters();
//   }, []);

//   const sortCharacters = (order) => {
//     const sorted = characters.slice().sort((a, b) => {
//       const nameA = a.name.toUpperCase();
//       const nameB = b.name.toUpperCase();

//       if (order === 'asc') {
//         return nameA.localeCompare(nameB);
//       } else {
//         return nameB.localeCompare(nameA);
//       }
//     });

//     setCharacters(sorted);
//     setSortedAscending(order === 'asc');
//   };
//   const restoreDefaultOrder = () => {
//     setCharacters(originalOrder);
//      // Establecer el orden ascendente como predeterminado
//   };

//   return (
//     <div>
//       <h1>Rick and Morty Characters</h1>
//       <div>
//         <button onClick={() => sortCharacters('asc')}>
//           Sort A-Z
//         </button>
//         <button onClick={() => sortCharacters('desc')}>
//           Sort Z-A
//         </button>
//         <button onClick={restoreDefaultOrder}>
//           Default
//         </button>
//       </div>
//       <ul>
//         {characters.map((character) => (
//           <li key={character.id}>
//             <img src={character.image} alt={character.name} />
//             <p>{character.name}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Home;
