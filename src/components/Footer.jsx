import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
    return (
        <div className='m-h-80 bg-violet-900 p-10 w-full grid md:grid-cols-[repeat(1,2fr)_repeat(2,1fr)_repeat(1,2fr)] text-white '>
            <div className=' md:p-2 p'>
                <div className='flex items-center mb-3'>
                    <FontAwesomeIcon icon={faCartShopping} className=' fa-2x' />
                    <h1 className='text-3xl  ms-3'>E-KART</h1>
                </div>
                <p className='text-justify mt-6 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio tempora totam ab, cupiditate animi quisquam saepe, atque rerum minima recusandae ipsa praesentium </p>
            </div>
            <div className=' md:ps-20 pt-2'>
                <h1 className='text-3xl mb-5  '>Links</h1>
              <Link to={'/'}>  <p>Home</p></Link>
            <Link to={'/cart'}>    <p>Cart</p></Link>
             <Link to={'/wishlist'}>   <p>Wishlist</p></Link>
            </div>
            <div className=' md:ps-20 pt-2'>
                <h1 className='text-3xl mb-5'>Guides</h1>
                <p>React</p>
                <p>React Bootstrap</p>
                <p>Bootswatch</p>
            </div>
            <div className=' md:p-2 md:ps-20 pt-2'>
                <h1 className='text-3xl mb-5'>Contact Us</h1>
                <div className='flex'>
                    <input type="text" placeholder='Email Id' className='rounded-md ps-4 w-full text-black'  />
                    <button className='bg-orange-600 ms-2 px-3 py-2 rounded-lg hover:bg-orange-700'>Subscribe</button>
                </div>
                <div className='flex justify-between mt-2 fa-2x'>
                    <FontAwesomeIcon icon={faTwitter} />
                    <FontAwesomeIcon icon={faLinkedin} />
                    <FontAwesomeIcon icon={faFacebook} />
                    <FontAwesomeIcon icon={faInstagram} />
                </div>


            </div>




        </div>
    )
}

export default Footer
