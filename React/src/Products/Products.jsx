import React from 'react'
import { Link } from 'react-router-dom'

const Products = () => {
    const products = [
        {id:1, name:"Iphone", price:100000},
        {id:2, name:"Samsung", price:50000},
        {id:3, name:"Oneplus", price:30000},
        {id:4, name:"Redmi", price:20000},
    ]
  return (
    <div>
      {
        products.map((product) => {
          return (

            <div key={product.id}>
              <Link to={`/Products/${product.id}`}>View Details</Link>
              <h1>{product.name}</h1>
              <h2>{product.price}</h2>
            </div>
          )
        }
        )
        }
    </div>
  )
}

export default Products
