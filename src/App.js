import React from 'react'
import logo from './logo.svg';
import './App.css';
import birds from './components/Birds';
//Components
import Header from './components/Header';
import BirdsList from './components/BirdsList';

function App() {
  return (
      <div>
        <Header />
        <BirdsList birds={birds}/>
      </div>
  )
}

export default App