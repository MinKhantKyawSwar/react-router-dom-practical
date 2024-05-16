import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const ProductDetailPage = () => {
    const navigate = useNavigate();
    const goBackHandler = () => {
        navigate("/ProductsPage")
    }

    const {title} = useParams();
  return (
    <>
        <h1>This is ProductDetailPage</h1>
        <h3>The title is - {title}</h3>
        <button onClick={goBackHandler}> Go back to Products</button>
    </>
  )
}

export default ProductDetailPage