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
                    <button className='btn btn--book'>book michael</button>
                    <button className='btn btn--book'>book joseph</button>
                </div>    
            </div>
        </div>
    </div>
  )
}

export default Home