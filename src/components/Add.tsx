"use client"
import React, { useState } from 'react'

const Add = () => {
  const [quantity, setQuantity] = useState(1)
  return (
    <div className='flex flex-col gap-4'>
      <h4>Choose an option</h4>
      <div className="">
        <button>{quantity}</button>
        <div className="">Only</div>
      </div>
       <button className='rounded-3xl ring-1 ring-red-400 py-2 px-4 text-red-400 w-32 hover:bg-red-400 hover:text-white font-medium disabled:bg-pink-200 disabled:text-white disabled:cursor-not-allowed disabled:ring-pink-200'
       disabled={false}>Add to cart</button>
    </div>
  )
}

export default Add
