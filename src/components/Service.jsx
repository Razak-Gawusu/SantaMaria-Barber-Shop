import React from 'react'

function Service(props) {
  return (
    <>
    <div className='service__card'>
        <div className='service__card--name'>{props.name}</div>
        <div className='service__card--price'>₵ {props.price}</div>
    </div>
    </>
  )
}

export default Service