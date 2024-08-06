"use client"
import Image from 'next/image'
import React, { useState } from 'react'
type cartitem ={
  id:number,name:string,price:number,description:string,isAvailable:boolean,Qty:number,img:string
}
const CartModal = () => {
  // const cartItems=[
   
  // ]
  // const cartItems=[
  //   {id:1,name:"Iphone",price:23,description:"this is latest and costly phone",isAvailable:true,Qty:1,img:"https://picsum.photos/200/300"},
  //   {id:2,name:"Android",price:23,description:"this is latest and costly phone",isAvailable:true,Qty:2,img:"https://picsum.photos/200/301"},
  // ]
  const [cartItems, setCartItems] = useState([
    {id:1,name:"Iphone",price:23,description:"this is latest and costly phone",isAvailable:true,Qty:1,img:"https://picsum.photos/200/300"},
    {id:2,name:"Android",price:23,description:"this is latest and costly phone",isAvailable:true,Qty:2,img:"https://picsum.photos/200/301"},
  ])
  let subtotal:number=cartItems.reduce((prev:number,item:cartitem)=>prev+(item.price*item.Qty),0)
  const handleRemove = (id:number) => {
    setCartItems((prev)=>prev.filter(prod=>prod.id!=id))
  }
  
  return (
    <div className='px-6 py-7 shadow-lg rounded-lg absolute top-10  left-auto right-0 z-30 bg-white flex flex-col gap-4 h-96 overflow-y-auto w-max'>
      <h1 className='text-xl font-semibold'>Shopping Cart</h1>
      {(( cartItems.length) > 0 ? <div className='flex flex-col gap-8'>
         {
          cartItems.map((prod,ind)=>(
            <div key={ind} className='flex gap-10 justify-center items-start'>
              <Image src={prod.img} width={70} height={90} alt='image not found'
              className='rounded-md'/>
              <div className="flex gap-6 justify-center flex-col ">
                <div className="flex gap-11">
                <div className="left flex flex-col gap-2">
                  <h1 className='text-lg font-semibold '>{prod.name}</h1>
                  <p className='text-sm text-slate-400'>{prod.isAvailable ? "Available":"Not Available"}</p>
                </div>
                <div className="price font-semibold">
                &#8377;{prod.price}
                </div>
                </div>
                <div className="flex justify-between">
                  <h2 className='text-md text-slate-400'>Qty:{prod.Qty}</h2>
                  <button className='text-blue-500'
                  onClick={()=>handleRemove(prod.id)}
                  >Remove</button>
                </div>
              </div>
            </div>
          ))
         }
         </div>:<div>No items in cart</div>)}
         <div className="subtotal flex justify-between">
      <h2 className='text-lg font-semibold'>Subtotal</h2>
      <h3 className='font-semibold'>&#8377;{subtotal}</h3>
         </div>
        <h2 className='text-sm text-slate-400'>Shopping and taxes are calculated at checkout</h2>
        <div className="cart_actions flex justify-between">
          <button className='border-2 rounded-md px-4 py-2 border-black font-semibold'>View Cart</button>
          <button className='border-2 rounded-md px-4 py-2 border-black font-semibold bg-black text-white'>Checkout</button>
        </div>
    </div>
  )
}

export default CartModal
