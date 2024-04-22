import React from 'react'
import { Interface } from 'readline'

interface ImageProps {
   img:string


}

const SideBarImages: ImageProps[] = [
    {img: '/assets/app-bar-list(3).svg'},
    {img : '/assets/app-bar-list.svg'},
    {img: '/assets/app-bar-list(2).svg'},
    {img: '/assets/app-bar-list(1).svg'}
]

const SidebarContent = () => {
  return (
    <div className='cursor-pointer'>{SideBarImages.map((image , index)=> {
      return <img key={index} src={image.img} alt={`Image ${index + 1}`}/>
    })}</div>
  )
}

export default SidebarContent