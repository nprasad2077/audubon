import React from 'react'

function BirdsList(props) {
  return (
    <ul className='gallery'>
        {props.birds.map((birds, index) =>
            <div className='image'>
                <a className='image' href={'/show/' + index} onClick={props.handleClick}>
                    <img src={birds.image} className='image'></img>
                </a>
            </div>
        )}
    </ul>
  )
}

export default BirdsList
