import React from 'react'
import { faCartShopping, faHeart, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch, useSelector } from 'react-redux'
import { addWishlistitem, deleteWishlistitem } from '../redux/slices/wishlistS'
import { additemtoCart } from '../redux/slices/cartS'

function Wishlist() {
  const WishlistArray = useSelector(state => state.wishlist)
  console.log(WishlistArray)
  const dispatch=useDispatch()
  const wishes=(item)=>{
    dispatch(additemtoCart(item))
    dispatch(deleteWishlistitem(item.id))
  }

  return (
    <>
      <h1 className='text-3xl pt-32 text-center text-violet-900'>Wishlist</h1>
      {WishlistArray.length > 0 ?

        <div className='  md:px-20 grid md:grid-cols-4 gap-5'>
          {WishlistArray.map(item => (
            <div className=" rounded-md p-2 ">
              <div className='p-3 shadow-2xl bg-violet-100'>
                <img src={item.image} alt="" className='w-full rounded-lg h-72  ' />
                <h1 className='text-center text-3xl mt-2'>{item.title.slice(0, 25)}...</h1>
                <p className='text-justify mt-2'>{item.description.slice(0, 100)}...</p>
                <p className='text-xl font-bold'>Price: <span className='text-violet-800'>{item.price}</span> </p>
                <div className='flex justify-between mt-3'>
                  <button className='bg-red-600 px-3 py-2 rounded-lg hover:bg-red-700' onClick={()=>dispatch(deleteWishlistitem(item.id))} >   <FontAwesomeIcon icon={faTrashCan} className='text-white ' /></button>
                  <button className='bg-green-600 hover:bg-green-700 px-3 py-2 rounded-lg' onClick={()=>dispatch(wishes(item))} >   <FontAwesomeIcon icon={faCartShopping} className='text-white ' /></button>
                </div>
              </div>
            </div>
          ))}
        </div>
        :
        <div className=' flex justify-center'>
          <img src="https://i.pinimg.com/originals/f6/e4/64/f6e464230662e7fa4c6a4afb92631aed.png" alt="" />

        </div>}


    </>
  )
}

export default Wishlist
