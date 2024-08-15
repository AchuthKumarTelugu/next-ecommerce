"use client"
import React, { useState } from 'react'
let stock=5
const Add = () => {
  const [quantity, setQuantity] = useState(1)
  return (
    <div className='flex flex-col gap-4'>
      <h4>Choose an option</h4>
      <div className="flex justify-between gap-4 items-center">
        <div className="flex gap-4 items-center">
          <div className="flex gap-5 bg-gray-100 rounded-3xl px-4 py-2 font-medium items-center">
            <button onClick={() => setQuantity(prev =>prev==stock ? stock:prev + 1)}
              className='text-xl cursor-pointer'> +</button>
            {quantity}
            <button onClick={() => setQuantity(prev => prev < 1 ? 0 : prev - 1)} 
            className='text-xl cursor-pointer'>-</button>
          </div>
          <div className="text-sm">Only <span className="text-orange-400">four items</span> left! <br /> {"Don't"} miss it</div>
        </div>
        <button className='rounded-3xl ring-1 ring-red-400 py-2 px-4 text-red-400 w-32 hover:bg-red-400 hover:text-white font-medium disabled:bg-pink-200 disabled:text-white disabled:cursor-not-allowed disabled:ring-pink-200'
          disabled={false}>Add to cart</button>
      </div>
    </div>
  )
}

export default Add
