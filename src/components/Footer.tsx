import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='px-4 py-4 md:px-8 lg:px-16 xl:px-32 mt-32 bg-slate-200'>
      {/* top */}
      <div className="flex flex-col md:flex-row justify-between gap-5 md:gap-14">
        {/* left */}
        <div className="w-full md:w-1/2 xl:w-1/4 flex flex-col gap-4">
          <Link href={'/'}> <h1 className='text-xl tracking-wider'>LAMA</h1> </Link>
          <p className='w-full'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis, aspernatur omnis! Facere facilis iste quis.</p>
          <span className='font-semibold'>hello@achuth.dev</span>
          <span className='font-semibold'>+1 232 334 3434</span>
          <div className="flex gap-6">
            <Image src={"/facebook.png"} alt='' width={16} height={16} />
            <Image src={"/instagram.png"} alt='' width={16} height={16} />
            <Image src={"/youtube.png"} alt='' width={16} height={16} />
            <Image src={"/pinterest.png"} alt='' width={16} height={16} />
            <Image src={"/x.png"} alt='' width={16} height={16} />
          </div>
        </div>
        {/* center */}
        <div className="hidden lg:flex justify-between w-1/2">
          <div className="flex flex-col  gap-10">
            <h1 className='font-medium text-lg'>COMPANY</h1>
            <div className="flex flex-col gap-4 text-sm">
              <Link href={""}>About Us</Link>
              <Link href={""}>Careers</Link>
              <Link href={""}>Affiliates</Link>
              <Link href={""}>Blog</Link>
              <Link href={""}>Contact Us</Link>
            </div>
          </div>
          <div className="flex flex-col  gap-10">
            <h1 className='font-medium text-lg'>SHOP</h1>
            <div className="flex flex-col gap-4 text-sm">
              <Link href={""}>New Arrivals</Link>
              <Link href={""}>Accessories</Link>
              <Link href={""}>Men</Link>
              <Link href={""}>Women</Link>
              <Link href={""}>All Products</Link>
            </div>
          </div>
          <div className="flex flex-col  gap-10">
            <h1 className='font-medium text-lg'>HELP</h1>
            <div className="flex flex-col gap-4 text-sm">
              <Link href={""}>Customer Service</Link>
              <Link href={""}>My Account</Link>
              <Link href={""}>Find a Store</Link>
              <Link href={""}>Legal & Privacy</Link>
              <Link href={""}>Gift Card</Link>
            </div>
          </div>
        </div>
        {/* right */}
        <div className="w-full md:w-1/2 xl:1/4 flex flex-col mt-6 md:mt-0 gap-4">
          <h1 className='font-medium text-lg'>SUBSCRIBE</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex officiis corporis iusto?</p>
          <div className="flex">
            <input type="text" name="" id="" placeholder='Email address' className='p-1 focus:outline-none' />
            <button className='bg-red-400 w-max px-4 py-2 text-white font-semibold'>Join</button>
          </div>
          <span className='font-semibold'>Secure payments</span>
          <div className="flex justify-between">
            <Image src={"/discover.png"} alt='' width={40} height={20} />
            <Image src={"/skrill.png"} alt='' width={40} height={20} />
            <Image src={"/paypal.png"} alt='' width={40} height={20} />
            <Image src={"/mastercard.png"} alt='' width={40} height={20} />
            <Image src={"/visa.png"} alt='' width={40} height={20} />
          </div>
        </div>
      </div>
      {/* bottom */}
      <div className="flex flex-col md:flex-row justify-between items-center  md:gap-8 mt-14">
        <div className="">&copy; 2024 Achuth Shop</div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          <div className="flex gap-4">
            <span className="text-gray-500">Language</span>
            <span className='font-medium'>India | English</span>
          </div>
          <div className="flex gap-4">
            <span className="text-gray-500">Currency</span>
            <span className='font-medium'>&#8377;Rupee</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
