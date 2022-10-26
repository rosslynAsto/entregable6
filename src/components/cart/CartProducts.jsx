import axios from 'axios'
import React from 'react'
import { useDispatch } from 'react-redux'
import getConfig from '../../utils/getConfig'
import {getAllProductsCart} from '../../store/slices/cart.slice'
import './styles/cartProducts.css'

const CartProducts = ({product}) => {

  const dispatch = useDispatch()
 const handleDelete = () => {
  const URL= `https://ecommerce-api-react.herokuapp.com/api/v1/cart/${product.id}`
  axios.delete(URL, getConfig())
    .then(res => {
      console.log(res.data)
      dispatch(getAllProductsCart())
    })
    . catch(err => console.log(err))
 }

  return (
    <article className='cart-p'>
        <h2>{product.title}</h2>
        <ul>
            <li><span>Price</span>{product.price}</li>
            <li><span>Quantity</span>{product.productsInCart.quantity}</li>
        </ul>
       <button onClick={handleDelete} className='card-p__btn'><i className=" cart-p__icon fa-regular fa-trash-can"></i></button>
    </article>
  )
}

export default CartProducts