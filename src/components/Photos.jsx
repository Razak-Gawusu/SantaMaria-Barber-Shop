import React from 'react'

function Photos(props) {
  return (
    <>
    <div className='photo__gallery--imageDiv'>
      <img className='photo__gallery--image' src={`./images/${props.img}.jpg`} alt={props.img} />
    </div>
    </>
  )
}

export default Photos