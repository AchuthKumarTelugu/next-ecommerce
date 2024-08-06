import React from 'react'

const Filter = () => {
  return (
    <div className='flex flex-col md:flex-row mt-12 justify-between flex-wrap gap-8 md:gap-4'>
        <div className="flex justify-between flex-wrap w-full flex-1 gap-6 md:gap-2">
      <select className='px-3 py-2 text-sm font-medium bg-gray-100 rounded-2xl'>
        <option value="">Type</option>
        <option value="physical">physical</option>
        <option value="Digital">Digital</option>
      </select>
      <input type="text" name="min" id="" placeholder='min price' className='pl-4 w-24 rounded-2xl ring-1 ring-slate-400 text-xs focus:outline-none' />
      <input type="text" name="max" id="" placeholder='max price' className='pl-4 w-24 rounded-2xl ring-1 ring-slate-400 text-xs focus:outline-none' />
      <select className='px-3 py-2 text-sm font-medium bg-gray-100 rounded-2xl'>
        <option value="">Size</option>
        <option value="XL">XL</option>
        <option value="L">L</option>
        <option value="M">M</option>
      </select>
      <select className='px-3 py-2 text-sm font-medium bg-gray-100 rounded-2xl'>
        <option value="">Color</option>
        <option value="Blue">Blue</option>
        <option value="Red">Red</option>
        <option value="Orange">Orange</option>
      </select>
      <select className='px-3 py-2 text-sm font-medium bg-gray-100 rounded-2xl'>
        <option value="">Company</option>
        <option value="company1">company1</option>
        <option value="company3">company3</option>
        <option value="company4">company4</option>
      </select>
      <select className='px-3 py-2 text-sm font-medium bg-gray-100 rounded-2xl'>
        <option value="">All Filters</option>
      </select>
      </div>
      <div className="">
      <select className='px-3 py-2 text-sm font-medium bg-gray-100 rounded-2xl'>
        <option value="">Sort By</option>
        <option value="">Price (low to high)</option>
        <option value="">Price (hight to low)</option>
        <option value="">Newest</option>
        <option value="">Oldest</option>
      </select>
      </div>
    </div>
  )
}

export default Filter
