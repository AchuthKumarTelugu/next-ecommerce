"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import CartModal from './CartModal'

const NavbarIcons = () => {
  const router=useRouter()
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  // temporary
  const isLoggedIn=true
  const handleProfile = () => {
    console.log("handleProfile")
    if(!isLoggedIn) {
       router.push('/login')
       return
    }
    setIsProfileOpen(prev=>!prev)
  }
  const handleCart = () => {
    setIsCartOpen(prev=>!prev)
  }
  
  
  return (
    <div className='flex justify-center gap-5 items-center  '>
      <div className="relative ">
      <Image src={"/profile.png"} alt='not-found' width={22} height={22}
      onClick={handleProfile}
      className='cursor-pointer'/>
      {
        isProfileOpen && (<div className='flex flex-col gap-2 absolute left-0 top-10 shadow-lg p-3 rounded-lg z-20 '>
          <Link href={"/profile"}>Profile</Link>
          <div className="cursor-pointer">Logout</div>
          </div>)
      }
      </div>
      <Image src={"/notification.png"} alt='not-found' width={22} height={22}
      className='cursor-pointer'/>
      <div className="relative">
      <Image src={"/cart.png"} alt='not-found' width={22} height={22}
      onClick={handleCart}
      className='cursor-pointer'/>
      <div className="bg-red-400 text-white rounded-full h-6 w-6 text-sm grid place-content-center absolute -top-4 -right-4">23</div>
      </div>
      {isCartOpen && <CartModal/>}
    </div>
  )
}

export default NavbarIcons
