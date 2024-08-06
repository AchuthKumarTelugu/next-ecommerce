"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const Slider = () => {
    const slides = [
        {
          id: 1,
          title: "Summer Sale Collections",
          description: "Sale! Up to 50% off!",
          img: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800",
          url: "/",
          bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
        },
        {
          id: 2,
          title: "Winter Sale Collections",
          description: "Sale! Up to 50% off!",
          img: "https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800",
          url: "/",
          bg: "bg-gradient-to-r from-pink-50 to-blue-50",
        },
        {
          id: 3,
          title: "Spring Sale Collections",
          description: "Sale! Up to 50% off!",
          img: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800",
          url: "/",
          bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
        },
      ];
      
      const [currItem, setCurrItem] = useState(0)
      // use effect to change slides to next one to next one  after delay
      useEffect(()=>{
        let interval=setInterval(()=>setCurrItem(prev=>prev==slides.length-1?0:prev+1),3000)
        return ()=>{
          clearInterval(interval)
        }
      },[])
  return (
    <div className='h-[calc(100vh-80px)] overflow-hidden relative'>
        <div className="w-max h-full transition-all ease-in-out duration-1000 flex" style={{transform:`translateX(-${currItem*100}vw)`}}>
            {/* translating remaining hidden slides using currItem */}
         {
            slides.map((item,index)=>(<div key={index}
            className={`${item.bg} flex flex-col xl:flex-row h-full w-screen gap-16`} >
                {/* text container */}
                <div className="w-full xl:w-1/2 h-1/2 xl:h-full flex flex-col justify-center items-center gap-8">
                    <h2 className='font-semibold text-2xl xl:text-3xl 2xl:text-5xl'>{item.description}</h2>
                    <h1 className='font-bold text-4xl  2xl:text-7xl text-center'>{item.title}</h1>
                    <Link href={item.url}>
                    <button className='bg-black text-white rounded-md py-3 px-4  text-semibold '>Shop now!</button>
                    </Link>
                </div>
                {/* image container */}
                <div className="relative w-full xl:w-1/2 h-1/2 xl:h-full">
                    <Image src={item.img} alt="" fill sizes='100%' className='object-cover'/>
                    {/* making image fill out all space */}
                </div>
            </div>))
         }
        </div>
      slider
      <div className="flex gap-2 absolute z-10 bottom-2 left-1/2">
      {
          slides.map((item,index)=>( //made circles and making active with color if its index matches currItem ,also changing it if clicked
              <div key={item.id} className={` w-3 h-3 rounded-full ring-1 ring-slate-500 cursor-pointer ${currItem===index ? "  scale-150":""} grid place-content-center`}
              onClick={()=>setCurrItem(index)}>
                {currItem==index && <div className='h-[7px] w-[7px] rounded-full bg-slate-400'></div>}
              </div>
            ))
        }
        </div>
    </div>
  )
}

export default Slider
