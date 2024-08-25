"use client"
import Image from 'next/image'
import React, { useState } from 'react'

const ProductImages = ({images}:any) => {
  console.log(images)
type imagelistModal={
  id:number,url:string
}
  let imageList:imagelistModal[]=[
    {id:1,url:"https://images.pexels.com/photos/27202619/pexels-photo-27202619/free-photo-of-person-standing-between-walls-with-sculptures.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"},
    {id:2,url:"https://images.pexels.com/photos/19120462/pexels-photo-19120462/free-photo-of-blonde-woman-on-a-balcony-in-sunlight.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"},
    {id:3,url:"https://images.pexels.com/photos/27260299/pexels-photo-27260299/free-photo-of-a-bouquet-of-flowers-on-a-table-with-a-card.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"},
    {id:4,url:"https://images.pexels.com/photos/27504493/pexels-photo-27504493/free-photo-of-a-couple-holding-hands-walking-through-a-field.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"},
  ]
  const [imageUrl, setImageUrl] = useState(imageList[0].url)
  let ChangeImageUrl=(url:string) => {
    setImageUrl(url)
  }
  
  return (
    <div>   
  <div className="relative h-96 w-full">
    <Image src={imageUrl} fill sizes='50vw' className='object-cover rounded-md'/>
  </div>
  <div className="mt-14 flex gap-4 gap-y-4 flex-wrap lg:flex-nowrap justify-between ">
   
    {
      imageList.map((value,index)=>(
        <div className="relative h-32 w-1/4 cursor-pointer" key={value.id} onClick={()=>ChangeImageUrl(value.url)} >
    <Image src={value.url} fill sizes="30vw" className='object-cover '/>
    </div>
      ))
    }
  </div>
    </div>
  )
}

export default ProductImages
