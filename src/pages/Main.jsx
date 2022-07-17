import React, {useState, useEffect} from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Service from '../components/Service'
import {serviceData, locationInfo} from '../data'
import {FaBars, } from 'react-icons/fa'
import Location from '../components/Location'
import { photosData } from '../data'
import Photos from '../components/Photos'

function Main() {
    const [service, setService] = useState([])
    const [location, setLocation] = useState([])
    const [photo, setPhoto] = useState([])

    useEffect(() => {
        setService(serviceData)
        setLocation(locationInfo)
        setPhoto(photosData)
    }, [service, location, photo])

  return (
    <>
        <div className='showcase'>
            <div className="header">
                <div className='container header__top'>
                    <h1>Santa Maria Barber</h1>
                    <FaBars className='header__top--hamburger'/>
                    <Navbar />
                </div>

                <div className='hero container'>
                    <div className='hero--wrapper'>
                    <h1 className='title hero--title'>santa barber shop</h1>
                <p className='hero--heading'>the most authentic barbershop experience in the santa-maria area</p>
                <div className='hero__book'>
                    <button className='btn btn--book'>book michael</button>
                    <button className='btn btn--book'>book joseph</button>
                </div>
                    </div>
                
                </div>
            </div>
        </div>

        <section className='section'>
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

        <section className='photo__gallery'>
            <h2 className='title photo__gallery--title'>photo gallery</h2>
            <div className='container photo__gallery--wrapper'>
                {photo.map((photo) => (
                    <Photos 
                    key={photo.id}
                    img={photo.img}
                    />
                ))}
            </div>
        </section>

        <section className="services">
            <div className="services--wrapper">
                <div className='service--top'>
                    <h2 className='title service__title'>what we offer</h2>
                </div>
                <div className="container">
                    <div className='service__item'>
                        <article className='service__card--wrapper'>
                            {service.map((service) => (
                                <Service 
                                name={service.name}
                                price={service.price}
                                />
                            ) )}
                        </article>
                        <div className='hero__book'>
                            <button className='btn btn--book'>book michael</button>
                            <button className='btn btn--book'>book joseph</button>
                        </div>
                    </div>
            </div>
                
            </div>
        </section>

        <section className='timeLocation'>
            <h1 className='title'>Times & Location</h1>
            <div className="timeLocation--wrapper container">
                {location.map((location) => (
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

        <section className='section'>
            <div className="section--wrapper container">
                <article className='section__text'>
                <img src="./images/cutters.svg" alt="icon" className='section__text--image' />
                    <h3 className='section__text--title title'>join our team</h3>
                    <p className='section__text--paragraph paragraph'>
                    We are hiring for our new Cumberland location! We are seeking full time experienced barbers to join our amazing team. The ideal candidate must be able to do all type of haircuts, including shaves with straight razor, fades, business cut, and must be friendly and sociable with our clients!                   
                    </p>
                    <p className='section__text--paragraph paragraph'>
                    If you're interested, please email your resume to <a className='contact--link' href="info@looksnstyle.com">info@looksnstyle.com</a>                  
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