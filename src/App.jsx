import { Route, Routes } from 'react-router-dom';
import './App.css'
import  {Home}  from './components/Home';
import Contador from './components/Contador';
import { NavBar } from './components/NavBar';

function App() {
  

  return (
  <div>
        <div className='absolute '>
         <NavBar/>

        </div>
   <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/about" exact element={<Contador/>} />
        
       </Routes>
   
       </div>
  )
}

export default App
