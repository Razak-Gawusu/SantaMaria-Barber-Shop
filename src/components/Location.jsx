import React from 'react'
import {MapContainer, TileLayer, Marker} from 'react-leaflet'


function Location(props) {
  return (
    <>
    <article className='timeLocation__item'>
        <div className='timeLocation__item--info'>
            <h2>{props.name}</h2>
            <p>{props.description}</p>
            <div className='location__info'>
                <img src="./images/location.svg" alt="" className='location__info--icon'/>
                <div>
                    <h5>{props.streetName}</h5>
                    <p>{props.areaName}</p>
                </div>
            </div>
            <div className='location__info'>
                <img src="./images/subway.svg" alt="" className='location__info--icon'/>
                <div>
                    <h5>{props.closeTo}</h5>
                    <p>{props.closeToBuilding}</p>
                </div>
            </div>
            <div className='location__info'>
                <img src="./images/hours.svg" alt="" className='location__info--icon'/>
                <div>
                    <h5><span>Monday - Friday: </span>{props.timeWeekDays}</h5>
                    <h5><span>Saturday - Sunday: </span>{props.timeWeekEnds}</h5>
                </div>
            </div>
            <button className='btn btn--location'>{props.name}</button>
        </div>
        <div className='timeLocation__item--map' id='map'>
            <MapContainer id='map' center={[51.505, -0.09]} zoom={15 } scrollWheelZoom={true}>
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[51.505, -0.09]}></Marker>
            </MapContainer>
        </div>
    </article>
    </>
  )
}

export default Location