import { faBackward, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { deleteitemfromcart, emptyCart } from '../redux/slices/cartS'

function Cart() {

  const dispatch = useDispatch()
  const cartList = useSelector(state => state.cartItem)
  const navigate=useNavigate()

  console.log(cartList)

  const grandtotal = cartList.reduce((item, item1) => item + item1.price,0 )
  // another method
  // const total=cartList.map(item=>item.price)
  // .reduce((item1,item2)=>item1+item2)
  // console.log(total)
 
const handelCheckout=()=>{
  alert('order placed successfully')
  dispatch(emptyCart())
  navigate('/')
}




  return (

    <>

      <div className='pt-32'>
        <h1 className='text-center text-4xl text-violet-900'>Cart</h1>
        {cartList?.length > 0 ?
          <div className='md:grid grid-cols-[2fr_1fr] my-10'>

            <div className=' p-3'>
              <table className='w-full border border-grey-400'>
                <thead>
                  <tr>
                    <th className='border border-gray-100 p-3 text-white bg-gray-400' >#</th>
                    <th className='border border-gray-100 p-3 text-white bg-gray-400' >Title</th>
                    <th className='border border-gray-100 p-3 text-white bg-gray-400' >Image</th>
                    <th className='border border-gray-100 p-3 text-white bg-gray-400' >Price</th>
                    <th className='border border-gray-100 p-3 text-white bg-gray-400' >Action</th>
                  </tr>
                </thead>
                <tbody>
                  {cartList.map((item, index) => (
                    <tr>
                      <td className='border border-gray-100 p-3  '>{index + 1}</td>
                      <td className='border border-gray-100 p-3  ' >{item.title}</td>
                      <td className='border border-gray-100 p-3 flex justify-center '> <img src={item.image} alt="" className='w-24 h-24' /> </td>
                      <td className='border border-gray-100 p-3  '>{item.price}</td>
                      <td className='border border-gray-100 p-3 text-center' onClick={() => dispatch(deleteitemfromcart(item.id))} > <button className='bg-red-800 rounded-lg p-3 text-white'> <FontAwesomeIcon icon={faTrashCan} /> </button> </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className='pt-5 px-10'>
              <div className='p-5 shadow-lg'>
                <h1 className='text-center text-3xl'>Cart Summary</h1>
                <p className='mt-4 text-xl'>Total number of products:{cartList.length}</p>

                <p className='mt-2 text-xl'>Grand Total :{grandtotal.toFixed(2)}</p>
                <button  onClick={handelCheckout} className='w-full bg-green-600 text-white p-3 mt-4 hover:bg-white hover:border hover:border-green-600 hover:text-green-600 transition duration-300 ease-in '>
                  Checkout
                </button>


              </div>

            </div>

          </div>


          :
          <div>
            <div className=' flex justify-center'>
              <img src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-illustration-download-in-svg-png-gif-file-formats--shopping-ecommerce-simple-error-state-pack-user-interface-illustrations-6024626.png?f=webp" alt="" className='w-40 h-40' />

            </div>
            <p className='flex justify-center text-3xl text-blue-500'>Your Cart is Empty</p>
            <div className='flex justify-center my-5 '>
              <Link to={'/'}> <button className='bg-green-500 hover:bg-green-600 p-4 rounded-lg text-white ' ><FontAwesomeIcon icon={faBackward} className='me-5' />Back to Home</button></Link>
            </div>
          </div>}
      </div>
    </>
  )
}

export default Cart
