import React from 'react'
import firstProduct from '../assets/images/image-product-1-thumbnail.jpg'
import secondProduct from '../assets/images/image-product-2-thumbnail.jpg'
import thirdProduct from '../assets/images/image-product-3-thumbnail.jpg'
import fourProduct from '../assets/images/image-product-4-thumbnail.jpg'

import f from '../assets/images/image-product-1.jpg'
import Counter from './counter'
function MainSection() {
    return (
        <section className='container'>
            <div className='images-wrapper'>
                <img className='big-image' src={f} alt="images" />
                <div className="images">
                    <img className='mini-image' src={firstProduct} alt="images" />
                    <img className='mini-image' src={secondProduct} alt="images" />
                    <img className='mini-image' src={thirdProduct} alt="images" />
                    <img className='mini-image' src={fourProduct} alt="images" />
                </div>
            </div>
            <div className='right-wrapper'>
                <h2 className='company-name'>Sneaker Company</h2>
                <h1 className='title'>Fall Limited Edition Sneakers</h1>
                <p className='product-desc'>These low-profile sneakers are your perfect casual wear companion. Featuring a
                    durable rubber outer sole, they’ll withstand everything the weather can offer.
                </p>
                <h1 className='price'> $125.00<span>50%</span></h1>
                <h2 className='old-price'>$250.00</h2>
                <div className="counting-wrapper">
                    <Counter />
                    <button className='add-btn'>
                    <svg className='add-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
                        Add to cart
                    </button>
                </div>

            </div>
        </section>
    )
}

export default MainSection;