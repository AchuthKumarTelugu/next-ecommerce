import React from 'react'

const CustomizeProducts = () => {
  return (
    <div className='flex flex-col gap-6'>
      <h4 className='font-medium'>Choose a Color</h4>
      <div className="flex gap-3 ">
        <div className="w-6 h-6 rounded-full bg-red-400 relative cursor-pointer">
          <div className="w-8 h-8 ring-1 ring-blue-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full "></div>
        </div>
        <div className="w-6 h-6 rounded-full bg-blue-400 relative cursor-pointer">
        </div>
        <div className="w-6 h-6 rounded-full bg-green-400 relative cursor-not-allowed">
          <div className="w-8 h-[2px] bg-red-400 rotate-45 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full "></div>
        </div>
      </div>
      <h4 className='font-medium'>Choose a size</h4>
      <ul className='flex gap-3 items-center'>
        <li className='ring-1 ring-red-400 rounded-md text-red-400 px-4 py-1 font-medium cursor-pointer'>Small</li>
        <li className='ring-1 ring-red-400 rounded-md bg-red-400 text-white px-4 py-1 font-medium cursor-pointer'>Medium</li>
        <li className=' rounded-md bg-pink-300  text-white px-4 py-1 font-medium cursor-not-allowed'>Large</li>
      </ul>
      <div className="flex gap-3">

      </div>
      
    </div>
  )
}

export default CustomizeProducts
