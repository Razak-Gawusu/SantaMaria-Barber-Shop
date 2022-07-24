import React from 'react'
import Header from '../components/Header'

function Home() {
  return (
    <div className='home'>
        <div className="container">
            <Header />
            <div className='hero'>
                <h1 className='title hero--title'>Looks N Style</h1>
                <p className='hero--heading'>the most authentic barbershop experience in the santa-maria area</p>
                <div className='hero__book'>
                    <a href='mailto:videojuction@mail.com' className='btn btn--book'>Book Video Junction</a>
                    <a href='mailto:videojuction@mail.com' className='btn btn--book'>Book Santa Maria Last-Stop</a>
                </div>    
            </div>
        </div>
    </div>
  )
}

export default Home