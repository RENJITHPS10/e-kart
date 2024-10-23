import { faBars, faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


function Header() {
  const [show, setShow] = useState(false)
  const handleshow = () => {
    setShow(!show)
  }
  const WishlistArray=useSelector(state=>state.wishlist)
  const cartList = useSelector(state => state.cartItem) 
  return (
    <>
      <div className='bg-violet-900 md:p-5 py-4 px-8 fixed w-full'>
        <div className='flex justify-between '>
        <Link to={'/'}>
            <div className='flex items-center'>
              <FontAwesomeIcon icon={faCartShopping} className=' fa-2x text-white' />
              <h1 className='md:text-3xl  text-white ms-2'>E-KART</h1>
  
            </div>
        </Link>
          <button className='md:hidden' onClick={handleshow}> <FontAwesomeIcon icon={faBars} className='border border-white p-2 rounded-md text-white ms-2 ' /></button>


          {/* desktop view */}
          <div className='hidden md:flex'>
          <Link to={'/wishlist'}>
              <button className='bg-violet-900 text-white border border-white rounded-lg p-2 me-3 hover:bg-white hover:text-black'>
                <FontAwesomeIcon icon={faHeart} className='text-red-800 me-2' />
                Wishlist
                <span className='bg-slate-200 rounded-md px-2 py-1 text-black ms-2'>{WishlistArray.length}</span>
  
              </button>
          </Link>
           <Link to={'/cart'}>
              <button className='bg-violet-900 text-white border border-white rounded-lg p-2  hover:bg-white hover:text-black'>
                <FontAwesomeIcon icon={faCartShopping} className=' text-green-700 me-2' />
                Cart
                <span className='bg-slate-200 rounded-md px-2 py-1 text-black ms-2'>{cartList.length}</span>
              </button>
           </Link>
          </div>
         

        </div>
         {/* mobile view */}

         { show && <div className='md:hidden block'>
           <Link to={'/wishlist'}>
              <button className='bg-violet-900 text-white border border-white rounded-lg p-2 me-3 hover:bg-white hover:text-black mt-5'>
                <FontAwesomeIcon icon={faHeart} className='text-red-800 me-2' />
                Wishlist
                <span className='bg-slate-200 rounded-md px-2 py-1 text-black ms-2'>0</span>
  
              </button>
           </Link>
            <Link to={'/cart'}>
              <button className='bg-violet-900 text-white border border-white rounded-lg p-2  hover:bg-white hover:text-black'>
                <FontAwesomeIcon icon={faCartShopping} className=' text-green-700 me-2' />
                Cart
                <span className='bg-slate-200 rounded-md px-2 py-1 text-black ms-2'>0</span>
              </button>
            </Link>
          </div>}
      </div>




    </>
  )
}

export default Header
