import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import "./CategoryList.css"
const CategoryList = () => {
  return (
    <div className='px-4 '>
      <div className="flex gap-4 md:gap-8 overflow-x-scroll scrollbar_hide">
        <Link href={'/list?cat=test'} className="relative   flex-shrink-0 w-1/2 md:w-/4 lg:w-1/5   ">
        <div className="relative bg-slate-200 w-full h-64 ">
            <Image src={"https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800"} fill sizes='25w' className='object-cover cursor-pointer pointer-events-none' alt='test image'/>
        </div>
        <h1 className='mt-5 font-light tracking-wider text-lg md:text:xl'>Category name</h1>
        </Link>
        <Link href={'/list?cat=test'} className="relative   flex-shrink-0 w-1/2 md:w-/4 lg:w-1/5   ">
        <div className="relative bg-slate-200 w-full h-64 ">
            <Image src={"https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800"} fill sizes='25w' className='object-cover cursor-pointer pointer-events-none' alt='test image'/>
        </div>
        <h1 className='mt-5 font-light tracking-wider text-lg md:text:xl'>Category name</h1>
        </Link>
        <Link href={'/list?cat=test'} className="relative   flex-shrink-0 w-1/2 md:w-/4 lg:w-1/5   ">
        <div className="relative bg-slate-200 w-full h-64 ">
            <Image src={"https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800"} fill sizes='25w' className='object-cover cursor-pointer pointer-events-none' alt='test image'/>
        </div>
        <h1 className='mt-5 font-light tracking-wider text-lg md:text:xl'>Category name</h1>
        </Link>
        <Link href={'/list?cat=test'} className="relative   flex-shrink-0 w-1/2 md:w-/4 lg:w-1/5   ">
        <div className="relative bg-slate-200 w-full h-64 ">
            <Image src={"https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800"} fill sizes='25w' className='object-cover cursor-pointer pointer-events-none' alt='test image'/>
        </div>
        <h1 className='mt-5 font-light tracking-wider text-lg md:text:xl'>Category name</h1>
        </Link>
        <Link href={'/list?cat=test'} className="relative   flex-shrink-0 w-1/2 md:w-/4 lg:w-1/5   ">
        <div className="relative bg-slate-200 w-full h-64 ">
            <Image src={"https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800"} fill sizes='25w' className='object-cover cursor-pointer pointer-events-none' alt='test image'/>
        </div>
        <h1 className='mt-5 font-light tracking-wider text-lg md:text:xl'>Category name</h1>
        </Link>
    </div>
    </div>
  )
}

export default CategoryList
