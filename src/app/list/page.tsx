import Filter from '@/components/Filter'
import ProductList from '@/components/ProductList'
import wixClientServer from '@/lib/wixClientServer'
import Image from 'next/image'
import React, { Suspense } from 'react'

const List = async ({ searchParams }: {
  searchParams:any
}) => {
  let slug = searchParams.cat
  const wixClient = await wixClientServer()
  const { items } = await wixClient.collections.queryCollections().find();

  let data=items.find(value=>value.slug==slug)
  console.log(data)

  return (
    <div className='px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative '>
      {/* campaign */}
      < div className="hidden sm:flex  flex-col md:flex-row justify-between items-center   h-72 md:h-64 bg-pink-100 pt-5  ">
        {/* text box */}
        <div className="w-full md:w-2/3 flex flex-col gap-4 justify-center  pl-10 items-center md:items-start h-full ">
          <h1 className='text-3xl font-semibold text-gray-500 md:w-[80%]'>Grab up to 50% off on selected items</h1>
          <button className='w-max bg-red-400 text-white px-6 py-3 rounded-3xl font-semibold '>Buy Now</button>
        </div>
        {/* image box */}
        <div className="relative w-full  md:w-1/3 h-full ">
          <Image src={'/woman.png'} alt='' fill className='object-contain' />
        </div>
      </div>
      <Filter />
      {/* product list */}
      <h1 className='mt-12 text-xl font-semibold mb-12 uppercase'>PRODUCTS FOR YOU!</h1>
      <Suspense fallback={<div>...loading</div>}>
        <ProductList categoryId={data?._id || process.env.NEXT_PUBLIC_ACESSORIES_ID!} limit={20} searchParams={searchParams}/>
      </Suspense>
    </div>
  )
}

export default List
