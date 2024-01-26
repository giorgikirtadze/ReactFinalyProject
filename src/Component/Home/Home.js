import React from 'react'
import imgs from '../../Assets/mainPage.jpg'
import Product from '../ProductPage/Product'
export default function Home() {
  return (
    <div className='hero'>
      <div className='card text-bg-dark border-0'>
        <img className='card-img' src={imgs} height='750px' alt='bg'/>
        <div className='card-img-overlay d-flex flex-column justify-content-center'>
          <div className='container'>
            <h5 className='card-title display-3 fw-bolder mb-0'>NEW SEASON ARRIVALS</h5>
            <p className='card-text lead fs-2'>CHECK OUT ALL THE TREND</p>
            <p className='card-text'>
              <small>Last update 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
      <Product />
    </div>
  )
}
