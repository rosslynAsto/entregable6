import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartProducts from '../components/cart/CartProducts'
import { getAllProductsCart } from '../store/slices/cart.slice'

const Cart = () => {

const cart = useSelector(state => state.cart)
const dispatch = useDispatch()

useEffect(() => {
  dispatch(getAllProductsCart())
}, [])

console.log(cart);

  return (
    <div className='cart'>
      <div className='cart__container'>
        {
           cart?.products.map(product => (
            <CartProducts 
            key={product.id}
            product={product}
            />
          ))
        }

      </div>
    </div>
  )
}

export default Cart