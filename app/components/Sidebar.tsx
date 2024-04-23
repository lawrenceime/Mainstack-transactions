import React from 'react'
import SidebarContent from './SidebarContent'

const Sidebar = () => {
  return (
    <div className='fixed left-[16px] top-0  w-[48px] h-fit rounded-[100px] shadow-md mt-[12%] ml-[16px] gap-[8px]'>
    <SidebarContent/>
    </div>
  )
}

export default Sidebar