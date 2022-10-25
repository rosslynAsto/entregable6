import React from 'react'

const CartProducts = ({product}) => {
  return (
    <article>
        <h2>{product.title}</h2>
        <ul>
            <li><span>Price</span>{product.price}</li>
            <li><span>Quantity</span>{product.productsInCart.quantity}</li>
        </ul>
       <button><i className="fa-regular fa-trash-can"></i></button>
    </article>
  )
}

export default CartProducts