import React from 'react'
import { useParams } from 'react-router-dom'

const Cart = () => {
  const {id}=useParams()
  console.log(id)
  return (
    <div>
      
    </div>
  )
}

export default Cart
