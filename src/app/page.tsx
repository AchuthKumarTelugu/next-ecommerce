// "use client"
import CategoryList from "@/components/CategoryList"
import ProductList from "@/components/ProductList"
import Slider from "@/components/Slider"
import { wixClientContext } from "@/context/wixContext"
import useWixClient from "@/hooks/useWIxClient"
import wixClientServer from "@/lib/wixClientServer"
import { Suspense, useContext, useEffect } from "react"

const HomePage = async() => {
//   // test case
// const wixClient=useContext(wixClientContext)
//   const { items } = await wixClient.products.queryProducts().find();
//   console.log("products",items)

// const wixClient2=await wixClientServer()
// const data=await wixClient2.products.queryProducts().find()
// console.log(data.items)
// // test case
  return (
    <div className=''>
      <Slider />
      <div className="mt-8 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
        <h1 className="font-semibold text-3xl  my-10">Featured products</h1>
        <Suspense fallback={<div>...loading</div>}>
        <ProductList categoryId={process.env.NEXT_PUBLIC_ACESSORIES_ID!} limit={5} />
        </Suspense>
      </div>
      <div className="mt-8 px-2 relative">
        <h1 className="font-semibold text-3xl  my-10">Category</h1>
        <Suspense fallback={<div>....loading</div>}>
        <CategoryList/>
        </Suspense>
      </div>
    </div>
  )
}

export default HomePage