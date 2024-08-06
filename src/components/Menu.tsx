"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
Image
const Menu = () => {
    const [openState, setOpenState] = useState(false)
  return (
    <div>
      <Image 
      src="/menu.png"
       width={30} 
      height={30} 
      className='cursor-pointer'
      onClick={()=>setOpenState((prev)=>!prev)}/>
       {
        openState && (
            <div className='flex flex-col gap-8 p-2 absolute left-0  right-0 top-20 bg-black text-white text-lg  z-20 justify-center items-center h-[calc(100vh-80px)] '>
                <Link href={'/'} className=''>Home</Link>
                <Link href={'/'}>Services</Link>
                <Link href={'/'}>Contact</Link>
                <Link href={'/'}>Blog</Link>
                <Link href={'/'}>sales</Link>
                <Link href={'/'}>Docs</Link>
            </div>
        )
    }
    </div>
   
  )
}

export default Menu
