import Add from '@/components/Add'
import CustomizeProducts from '@/components/CustomizeProducts'
import ProductImages from '@/components/ProductImages'
import wixClientServer from '@/lib/wixClientServer'
import { products } from '@wix/stores'
import { notFound } from 'next/navigation'
import React from 'react'

const SinglePage = async({params}:{params:{slug:string}}) => {
  const slug=params.slug
  const wixClient=await wixClientServer()
  const query = await wixClient.products.queryProducts().eq("slug", slug).find();
  // console.log(query?.items[0])
  if(!query.items[0]){
    return notFound()
  }
  let product=query?.items[0]
  // console.log(JSON.stringify(product,null,2))
  return (
    <div className="relative px-4 md:px-8 xl:px-16 2xl:px-32 flex flex-col lg:flex-row gap-16">
      {/* img */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages images={product.media?.items}/>
      </div>
      {/* texts */}
      <div className="flex flex-col gap-6 w-full lg:w-1/2 ">
      <h1 className='text-4xl '>{product.name}</h1>
      <p className='text-gray-500'>{product.description}</p>
      <div className="h-[2px] bg-gray-100 w-full"></div>
      <div className="flex items-center gap-4">
        <h3 className='text-xl text-gray-500 line-through'>&#8377;300</h3>
        <h2 className='text-2xl font-medium'>&#8377;100</h2>
      </div>
      <div className="h-[2px] bg-gray-100 w-full"></div>
      <CustomizeProducts/>
      <Add/>
      <div className="text-sm ">
        <div className="font-medium mb-4 flex flex-col gap-2">
        <h3>Product Info</h3>
        <p className='text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, recusandae. Blanditiis, rerum consequatur!</p>
        </div>
        <div className="font-medium mb-4 flex flex-col gap-2">
        <h3>Product Info</h3>
        <p className='text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, recusandae. Blanditiis, rerum consequatur!</p>
        </div>
        <div className="font-medium mb-4 flex flex-col gap-2">
        <h3>Product Info</h3>
        <p className='text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, recusandae. Blanditiis, rerum consequatur!</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default SinglePage
