import React from 'react'
import './Newsletter.css'

const Newsletter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Offers On Your Email</h1>
        <p>Subscribe to our newsletter and Stay update</p>
        <div>
            <input type="email" placeholder="your email"/>
            <button>subscribe</button>
        </div>
    </div>
  )
}

export default Newsletter