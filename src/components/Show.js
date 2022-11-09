import React from 'react'
import { useParams } from 'react-router-dom'
import Header from './Header';

const Show = (props) => {
  const {index} = useParams();
  console.log(index);



  return (
    <div>
      <Header />
      <div className='show'>
        <img src={props.birds[index].image} className='showPicture'></img>
        <div className='name'>
          {props.birds[index].name}
        </div>
        <div className='genus'>
          {'('}{props.birds[index].genus}{')'}
        </div>
        <div className='status'>
          <h3>Conservation Status</h3>
          {props.birds[index].conservationStatus}
        </div>
        <div className='homePage'>
          {props.birds[index].homepage}
        </div> 
      </div>
    </div>
  )
}

export default Show