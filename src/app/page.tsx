// "use client"
import CategoryList from "@/components/CategoryList"
import ProductList from "@/components/ProductList"
import Slider from "@/components/Slider"
import { wixClientContext } from "@/context/wixContext"
import useWixClient from "@/hooks/useWIxClient"
import wixClientServer from "@/lib/wixClientServer"
import { Suspense, useContext, useEffect } from "react"

const HomePage = async() => {
// const wixClient=useWixClient()
// useEffect(()=>{
//   console.log("entering useEffect")
//   const getProducts=async()=>{
//     const { items } = await wixClient.products.queryProducts().find();
//     console.log("products",items)
//   }
//   getProducts()
// },[wixClient])
// const wixClient=await wixClientServer()
// const data=await wixClient.products.queryProducts().find()
// console.log(data.items)
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
        <CategoryList/>
      </div>
    </div>
  )
}

export default HomePage