import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

const Async = () => {
    
const [product, setProduct] = useState("");
    const [products, setProducts] = useState([]);
    const [price, setPrice]=useState(0)
    const [searchParams, setSearchParams] = useSearchParams()
    const category = searchParams.get("category")

    const handleSearch = () => {
        setSearchParams({ category: product })
    }
    const fetchproducts = async () => {
            if (!category) return
            const res = await fetch(`https://dummyjson.com/products/category/${category}`)
            const data = await res.json()
            setProducts(data.products || [])
        }
    useEffect(() => {
        
        fetchproducts()
    }, [category])

    const filterprice = products.filter(p => p.price <= (price || 10000))
  return (
    <div>
        <input type="text" value={product} onChange={(e)=>setProduct(e.target.value)} placeholder="Enter category" />
        <input type="number" value={price} onChange={(e)=>setPrice(e.target.value)} />
        <button onClick={handleSearch}>Search</button>
        {products.map((item) => {
            return <h1 key={item.id}>Title: {item.title} | Price: {item.price}</h1>
        })}
        <h1>Price</h1>
        {filterprice.map((item)=>{
           return <h1 key={item.id}>Title: {item.title} | Price: {item.price}</h1>
        })}
    </div>
  )
}

export default Async
