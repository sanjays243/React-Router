import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  const products=[
    {id:101,name:"Laptop"},
    {id:102,name:"Mobile"},
    {id:103,name:"Headphone"}
  ]
  return (
    <div>
      <h1>Home Page</h1>
    {products.map((product)=>(
      <div key={product.id}>
        <h3>{product.name}</h3>

        <Link to={`/products/${product.id}`}>View Details</Link>
      </div>
    ))}
    </div>
  )
}

export default Home