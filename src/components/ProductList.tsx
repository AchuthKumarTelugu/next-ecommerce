import wixClientServer from '@/lib/wixClientServer'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProductList = async({categoryId,limit}:{categoryId:string,limit?:number}) => {
   const product_per_page=20
   console.log(categoryId,limit)
   const wixClient=await wixClientServer()
const data=await wixClient.products.queryProducts().eq("collectionIds",categoryId).limit(limit || product_per_page).find()
console.log(data.items)
    return (
        <div className='flex flex-wrap gap-x-8 gap-y-16 justify-evenly '>
            <Link href={"/test"} className='flex flex-col gap-4  w-[80vw] md:w-[30vw] xl:w-[15vw] '>
            <div className="relative  flex h-60 ">
                 <Image src={"https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800"} alt='' fill sizes='25vw'
                 className='absolute z-10 hover:opacity-0 object-cover rounded-md transition-opacity ease-in-out duration-1000 w-full'/>
                 <Image src={"https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800"} alt='' fill sizes='25vw'
                 className='object-cover rounded-md w-full'/>
                 </div>
                 <div className="flex justify-between ">
                    <h1 className=' font-medium'>Product name</h1>
                    <h2 className='font-semibold'>&#8377;400</h2>
                 </div>
                 <div className="description text-sm text-slate-400">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum dolor quos minima hic sint earum quis sit odit eligendi culpa?
                 </div>
                 <button className='text-red-400 ring-1 ring-red-400 rounded-2xl px-4 py-2 w-fit hover:bg-red-400 hover:text-white'>Add to Cart</button>
            </Link>
            <Link href={"/test"} className='flex flex-col gap-4  w-[80vw] md:w-[30vw] xl:w-[15vw] '>
            <div className="relative  flex h-60 ">
                 <Image src={"https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800"} alt='' fill sizes='25vw'
                 className='absolute z-10 hover:opacity-0 object-cover rounded-md transition-opacity ease-in-out duration-1000 w-full'/>
                 <Image src={"https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800"} alt='' fill sizes='25vw'
                 className='object-cover rounded-md w-full'/>
                 </div>
                 <div className="flex justify-between ">
                    <h1 className=' font-medium'>Product name</h1>
                    <h2 className='font-semibold'>&#8377;400</h2>
                 </div>
                 <div className="description text-sm text-slate-400">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum dolor quos minima hic sint earum quis sit odit eligendi culpa?
                 </div>
                 <button className='text-red-400 ring-1 ring-red-400 rounded-2xl px-4 py-2 w-fit hover:bg-red-400 hover:text-white'>Add to Cart</button>
            </Link>
            <Link href={"/test"} className='flex flex-col gap-4  w-[80vw] md:w-[30vw] xl:w-[15vw] '>
            <div className="relative  flex h-60 ">
                 <Image src={"https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800"} alt='' fill sizes='25vw'
                 className='absolute z-10 hover:opacity-0 object-cover rounded-md transition-opacity ease-in-out duration-1000 w-full'/>
                 <Image src={"https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800"} alt='' fill sizes='25vw'
                 className='object-cover rounded-md w-full'/>
                 </div>
                 <div className="flex justify-between ">
                    <h1 className=' font-medium'>Product name</h1>
                    <h2 className='font-semibold'>&#8377;400</h2>
                 </div>
                 <div className="description text-sm text-slate-400">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum dolor quos minima hic sint earum quis sit odit eligendi culpa?
                 </div>
                 <button className='text-red-400 ring-1 ring-red-400 rounded-2xl px-4 py-2 w-fit hover:bg-red-400 hover:text-white'>Add to Cart</button>
            </Link>
            <Link href={"/test"} className='flex flex-col gap-4  w-[80vw] md:w-[30vw] xl:w-[15vw] '>
            <div className="relative  flex h-60 ">
                 <Image src={"https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800"} alt='' fill sizes='25vw'
                 className='absolute z-10 hover:opacity-0 object-cover rounded-md transition-opacity ease-in-out duration-1000 w-full'/>
                 <Image src={"https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800"} alt='' fill sizes='25vw'
                 className='object-cover rounded-md w-full'/>
                 </div>
                 <div className="flex justify-between ">
                    <h1 className=' font-medium'>Product name</h1>
                    <h2 className='font-semibold'>&#8377;400</h2>
                 </div>
                 <div className="description text-sm text-slate-400">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum dolor quos minima hic sint earum quis sit odit eligendi culpa?
                 </div>
                 <button className='text-red-400 ring-1 ring-red-400 rounded-2xl px-4 py-2 w-fit hover:bg-red-400 hover:text-white'>Add to Cart</button>
            </Link>
          
           
           
            
        </div>
    )
}

export default ProductList
