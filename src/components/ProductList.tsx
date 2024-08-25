import wixClientServer from '@/lib/wixClientServer'
import { products } from '@wix/stores'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProductList = async({categoryId,limit,searchParams}:{categoryId:string,limit?:number
   ,searchParams?:any
}) => {
   const product_per_page=20
   // console.log(categoryId,limit)
   const wixClient=await wixClientServer()
const data=await wixClient.products.queryProducts().eq("collectionIds",categoryId).limit(limit || product_per_page).find()//to get products
// console.log((data.items))
    return (
        <div className='flex flex-wrap gap-x-8 gap-y-16 justify-evenly '>
         {
            data.items.map((product:products.Product,index)=>{
              return <Link href={"/"+product.slug} className='flex flex-col gap-4  w-[80vw] md:w-[30vw] xl:w-[15vw] ' key={index}>
            <div className="relative  flex h-60 ">
                 <Image src={product.media?.mainMedia?.image?.url||'/product.png'} alt='' fill sizes='25vw'
                 className='absolute z-10 hover:opacity-0 object-cover rounded-md transition-opacity ease-in-out duration-1000 w-full'/>
                {product.media?.items && <Image src={product.media?.items[2]?.image?.url || '/product.png'} alt='' fill sizes='25vw'
                 className='object-cover rounded-md w-full'/>}
                 </div>
                 <div className="flex justify-between ">
                    <h1 className=' font-medium'>{product.name}</h1>
                    <h2 className='font-semibold'>&#8377;{product.priceData?.price}</h2>
                 </div>
                 <div className="description text-sm text-slate-400">
                    {product.description}
                 </div>
                 <button className='text-red-400 ring-1 ring-red-400 rounded-2xl px-4 py-2 w-fit hover:bg-red-400 hover:text-white'>Add to Cart</button>
            </Link> 
            })
            }
           
            
        </div>
    )
}

export default ProductList
