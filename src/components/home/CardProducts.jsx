import React from 'react'
import { useNavigate } from 'react-router-dom'

const CardProducts = ({product}) => {
const navigate = useNavigate()
const handleNavigation = () =>{
    navigate(`/product/${product.id}`)
}
const handleAddCart = (e)=>{
    e.stopPropagation()
}
  return (
    <article onClick={handleNavigation} className='product'>
        <header className='product__header'>
            <img src={product.productImgs[0]} alt="" />

        </header>
        <div className='product__body'>
            <h3 className='product__title'>{product.title}</h3>
            <div className='product__price'>
                <p className='product__price-label'>Price</p>
                <p className='product__price-number'>{product.price}</p>
            </div>
            <div className='product__icon-contaiiner'>
                <i className='product__icon fa-solid fa-cart-shopping'></i>
            </div>
            <button onClick={handleAddCart} className='product__btn'>Show More Info</button>
           
        </div>

    </article>
  )
}

export default CardProducts