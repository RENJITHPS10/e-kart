import { faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import useFetch from '../hooks/useFetch'
import { useDispatch } from 'react-redux'
import { addWishlistitem } from '../redux/slices/wishlistS'
import { additemtoCart } from '../redux/slices/cartS'


function Home() {

  const data =useFetch('https://fakestoreapi.com/products')
  console.log(data)
  const dispatch=useDispatch()
  return (
    <>
    <div className=' md:pt-40 pt-20 md:px-20 grid md:grid-cols-4 gap-5'>
      {data.length>0&&
      data.map(item=>(
      <div className=" rounded-md p-2 ">
        <div className='p-3 shadow-2xl bg-violet-100'>
          <img src={item?.image} alt="" className='w-full rounded-lg h-72  ' />
          <h1 className='text-center text-xl mt-2'>{item?.title.slice(0,25)}...</h1>
          <p className='text-justify mt-2'>{item?.description.slice(0,100)}...</p>
          <p className='text-xl font-bold'>Price: <span className='text-violet-800'>{item?.price}</span> </p>
          <div className='flex justify-between mt-3'>
            <button className='bg-red-600 px-3 py-2 rounded-lg hover:bg-red-700' onClick={()=>dispatch(addWishlistitem(item))} >   <FontAwesomeIcon icon={faHeart} className='text-white ' /></button>
            <button className='bg-green-600 px-3 py-2 rounded-lg hover:bg-green-700' onClick={()=>dispatch(additemtoCart(item))}>   <FontAwesomeIcon icon={faCartShopping} className='text-white ' /></button>

          </div>

        </div>

      </div>
     ))
    }

      

    </div>
      
    </>
  )
}

export default Home
