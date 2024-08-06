import Link from 'next/link'
import React from 'react'
import Menu from './Menu'
import Image from 'next/image'
import Searchbar from './Searchbar'
import NavbarIcons from './NavbarIcons'
const Navbar = () => {
  return (
    <div className=' px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative h-20  '>
      <div className=" flex justify-between h-full  p-2 items-center md:hidden">
        <Link href={"/"}>
          <div className="text-2xl uppercase tracking-wider">
            Lama
          </div>
        </Link>
        {/* mobile first */}
        <Menu />
        {/* pc screen first */}

      </div>
      <div className="hidden md:flex justify-center items-center h-full ">
        {/* left */}
        <div className="left w-1/3 xl:w-1/2 flex gap-12 items-center  ">
          <Link href={"/"} className='flex gap-4 text-2xl uppercase tracking-wider'>
            <Image src={"/logo.png"} alt='' width={20} height={20} />
            Lama
          </Link>
          <div className="hidden xl:flex  justify-center items-center gap-2">
            <Link href={"/"}>Home</Link>
            <Link href={"/"}>Shop</Link>
            <Link href={"/"}>Deals</Link>
            <Link href={"/"}>About</Link>
            <Link href={"/"}>Contact</Link>
          </div>
        </div>
        <div className="right w-2/3 xl:w-1/2 flex justify-between items-center gap-2 relative">
          <Searchbar />
          <NavbarIcons />
        </div>
      </div>
    </div>
  )
}

export default Navbar
