import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductId = () => {
  const [product, setProduct] = useState(second)
  const {id} = useParams()

  useEffect(() => {
    URL=`https://ecommerce-api-react.herokuapp.com/api/v1/products/${id}`
   axios.get(URL)
     .then( res => setProduct(res.data.data.product))
     .catch(err => console.log(err))
  }, [id])
  
  return (
    <div>
      <p>{id}</p>
    </div>
  )
}

export default ProductId