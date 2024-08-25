import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import "./CategoryList.css"
import wixClientServer from '@/lib/wixClientServer'
const CategoryList = async () => {
  const wixClient =await wixClientServer()
  const { items } = await wixClient.collections.queryCollections().find();//to get categories
 console.log('categories',items)
  return (
    <div className='px-4 '>
      <div className="flex gap-4 md:gap-8 overflow-x-scroll scrollbar_hide">
        {
          items && items.map((value,index)=>(
        <Link href={'/list?cat='+value.slug} className="relative   flex-shrink-0 w-1/2 md:w-/4 lg:w-1/5   " key={index}>
        <div className="relative bg-slate-200 w-full h-64 ">
            <Image src={value.media?.mainMedia?.image?.url || '/product.png'} fill sizes='25w' className='object-cover cursor-pointer pointer-events-none' alt='test image'/>
        </div>
        <h1 className='mt-5 font-light tracking-wider text-lg md:text:xl'>{value.name}</h1>
        </Link>
          ))
        }
       
    </div>
    </div>
  )
}

export default CategoryList
