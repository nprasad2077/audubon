import React from 'react'
import BirdsList from './BirdsList'
import Header from './Header'

function Home({birds, handleClick}) {
  return (
    <div>
        <Header />
        <h2 className='subHeader'>Birds</h2>
        <BirdsList birds={birds} handleClick={handleClick}/>
    </div>
  )
}

export default Home