import React from 'react'
import Footer from '../components/Footer'
import Service from '../components/Service'
import {serviceData, locationInfo} from '../data'
import Location from '../components/Location'
import { photosData } from '../data'
import Photos from '../components/Photos'
import Home from './Home'

function Main() {
  return (
    <>
        <Home />

        <section className='section' id='aboutus'>
            <div className="section--wrapper container">
                <article className='section__text'>
                    <img src="./images/razor.svg" alt="icon" className='section__text--image' />
                    <h3 className='section__text--title title'>who we are</h3>
                    <p className='section__text--paragraph paragraph'>
                    Looks and style believes that character and confidence is central to how comfortably a man walks through the world. No matter how trends change, classic never goes out of style.  And at Looks and style, we aim to create an environment for people to discover, explore and express their individual style.
                    </p>

                </article>
                <article className='section__image'>
                    <img className='section__image--primary' src="./images/pic.jpg" alt="" />
                </article>
            </div> 
        </section>

        <section className='photo__gallery' id='photos'>
            <h2 className='title photo__gallery--title'>photo gallery</h2>
            <div className='container photo__gallery--wrapper'>
                {photosData.map((photo) => (
                    <Photos 
                    key={photo.id}
                    img={photo.img}
                    />
                ))}
            </div>
        </section>

        <section className="services" id='services'>
            <div className="services--wrapper">
                <div className='service--top'>
                    <h2 className='title service__title'>what we offer</h2>
                </div>
                <div className="container">
                    <div className='service__item'>
                        <article className='service__card--wrapper'>
                            {serviceData.map((service) => (
                                <Service 
                                name={service.name}
                                price={service.price}
                                />
                            ) )}
                        </article>
                        <div className='hero__book'>
                            <button className='btn btn--book'><a href='mailto:videojuction@mail.com'>Book Video Junction</a></button>
                            <button className='btn btn--book'><a href='mailto:videojuction@mail.com' >Book Santa Maria Last-Stop</a></button>
                        </div>
                    </div>
            </div>
                
            </div>
        </section>

        <section className='timeLocation' id='contact'>
            <h1 className='title'>Times & Location</h1>
            <div className="timeLocation--wrapper container">
                {locationInfo.map((location) => (
                    <Location 
                        name={location.name}
                        areaName={location.areaName}
                        streetName={location.streetName}
                        timeWeekDays={location.timeWeekDays}
                        timeWeekEnds={location.timeWeekEnds}
                        closeTo={location.closeTo}
                        closeTobuilding={location.closeTobuilding}
                        description={location.description}
                        locationlng={location.locationlng}
                        locationlat={location.locationlat}
                    />
                ))}
            </div>
        </section>

        <section className='section' id='career'>
            <div className="section--wrapper container">
                <article className='section__text'>
                <img src="./images/cutters.svg" alt="icon" className='section__text--image' />
                    <h3 className='section__text--title title'>join our team</h3>
                    <p className='section__text--paragraph paragraph'>
                    We are hiring for our new Cumberland location! We are seeking full time experienced barbers to join our amazing team. The ideal candidate must be able to do all type of haircuts, including shaves with straight razor, fades, business cut, and must be friendly and sociable with our clients!                   
                    </p>
                    <p className='section__text--paragraph paragraph'>
                    If you're interested, please email your resume to <a className='contact--link' href="mailto:info@looksnstyle.com">info@looksnstyle.com</a>                  
                    </p>

                </article>
                <article className='section__image'>
                    <img src="./images/pic2.jpg" alt="" />
                </article>
            </div> 
        </section>
        <>
        <Footer />
        </>
    </>
  )
}

export default Main