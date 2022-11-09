import React, {useState} from 'react'
import logo from './logo.svg';
import './App.css';
import birds from './components/Birds';
//Components
import Header from './components/Header';
import BirdsList from './components/BirdsList';
import Show from './components/Show';
import { Link, useParams, Route, Routes} from 'react-router-dom';
import Home from './components/Home';

function App() {
  const [birdInfo, setBirdInfo] = useState();

  const handleClick = (event) => {
    setBirdInfo(event.target)
  }
  console.log(birdInfo);


  return (
    <div>
      <Routes>
        <Route path='/' element={<Home birds={birds} handleClick={handleClick} />} />
        <Route path='/show/:index' element={<Show birds={birds}/>} />

      </Routes>
    </div>

  )
}

export default App