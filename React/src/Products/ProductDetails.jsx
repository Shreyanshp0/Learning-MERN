import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
    const { id } = useParams()
    const products = [
        {id:1, name:"Iphone", price:100000},
        {id:2, name:"Samsung", price:50000},
        {id:3, name:"Oneplus", price:30000},
        {id:4, name:"Redmi", price:20000},
    ]
    const product = products.find(p => p.id === parseInt(id))
  return (
    <div>
      <h1>Product Details</h1>
        <h2>Product id: {id}</h2>
        {product ? (
            <>
                <h3>Name: {product.name}</h3>
                <h3>Price: {product.price}</h3>
            </>
        ) : (
            <p>Product not found</p>
        )}
    </div>
  )
}

export default ProductDetails
