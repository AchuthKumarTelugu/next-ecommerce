"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useRef } from 'react'

const Searchbar = () => {
    const searchRef=useRef<HTMLInputElement>(null)
    const router = useRouter()
    const handleSearchIcon = (e: React.MouseEvent<HTMLImageElement>) => {
        e.preventDefault()
    }
    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        console.log("entered loop")
        e.preventDefault()
        const formdata = new FormData(e.currentTarget)//making form element ,sendable to backend
        const name = formdata.get("name") as string
        name && router.push(`/list?name=${name}`)
       if(searchRef.current){
        searchRef.current.value=""
       }
    }


    return (
        <form className='border-1  border-slate-300 px-4 py-2 rounded-full bg-gray-100 flex-1 flex justify-between' onSubmit={handleFormSubmit} >
            <input 
            type="text" 
            name="name" 
            placeholder="Search"
             id="" 
             className='focus:outline-none bg-transparent w-full'
             ref={searchRef} />
            <button type='submit'>
                <Image src={"/search.png"} alt='not-loaded' width={14} height={14}
                    className='cursor-pointer' />
            </button>
        </form>
    )
}

export default Searchbar
