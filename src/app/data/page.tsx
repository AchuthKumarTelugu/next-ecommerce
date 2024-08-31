"use client"
import { wixClientContext } from '@/context/wixContext';
import React, { useContext, useEffect } from 'react'

const Data = () => {
  const wixClient=useContext(wixClientContext)
  useEffect(()=>{
  const getData = async()=>{

    const { items } = await wixClient.products.queryProducts().find();
    console.log("products",items)
  }
  getData()
   
  },[])

  return (
    <div>
      this is data
    </div>
  )
}

export default Data
