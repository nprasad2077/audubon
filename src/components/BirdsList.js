import React from 'react'

function BirdsList(props) {
  return (
    <ul className='gallery'>
        {props.birds.map(birds =>
            <a className='image' href={'/show/' + (birds.name).replace(/\s/g, '')}>
                <div className='image'>
                    <img src={birds.image}></img>
                </div>
            </a>
        )}
    </ul>
  )
}

export default BirdsList