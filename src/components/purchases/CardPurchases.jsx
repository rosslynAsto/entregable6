import React from 'react'

const CardPurchases = ({purchase}) => {

    console.log(purchase)
  return (
   <article>
    <header>
        {purchase.updatedAt}
    </header>
    <div>
        {
            purchase.cart.products.map(product => (
                <section key={product.id}>
                    <h3>{product.title}</h3>
                    <span>{product.productsInCart.quantity}</span>
                    <div>${product.price}</div>
                </section>

            ))
        }
    </div>
   </article>
  )
}

export default CardPurchases