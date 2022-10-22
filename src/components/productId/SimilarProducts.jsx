import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CardProducts from '../home/CardProducts'


const SimilarProducts = ({product}) => {

  const [categories, setCategories] = useState()
  const [idCategory, setIdCategory] = useState()
  const [similarProducts, setSimilarProducts] = useState()

  useEffect(() => {
   const URL='https://ecommerce-api-react.herokuapp.com/api/v1/products/categories'
   axios.get(URL)
   .then(res => setCategories(res.data.data.categories))
   .catch(err => console.log(err))
  }, [])

useEffect(() => {
  if (categories && product) {
    setIdCategory(categories.filter(c=>c.name === product)[0].id)
  }
}, [categories, product])

useEffect(() => {
  if (idCategory) {
    const URL=`https://ecommerce-api-react.herokuapp.com/api/v1/products?category=${idCategory}`
    axios.get (URL)
    .then(res => setSimilarProducts(res.data.data.products))
    .catch(err => console.log(err))

  }
}, [idCategory])
 console.log(similarProducts);
 

  return (
    <div>
      <h2>Discover similar producst</h2>
      <div>
        {
          similarProducts?.map(prod => {
            if(product.id !== prod.id){
              return <CardProducts key={prod.id} product={prod}/>
            }
          })
        }
      </div>
    </div>
  )
}

export default SimilarProducts