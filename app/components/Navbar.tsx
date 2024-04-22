import React from 'react';
import Image from 'next/image';
import Logo from '../../public/assets/mainstack-logo.svg'
import Home from '../../public/assets/home.svg'
import Analysis from '../../public/assets/analysis.svg'
import Revenue from '../../public/assets/payments.svg'
import Contact from '../../public/assets/group.svg'
import Widget from '../../public/assets/widgets.svg'
import Notifications from '../../public/assets/notifications.svg'
import Chat from '../../public/assets/chat.svg'
import Avatar from '../../public/assets/avi.svg'
import Menu from '../../public/assets/menu.svg'

const Navbar = () => {
    return (
        <div className='w-[95%] h-[64px] rounded-[100px] shadow-md mt-[16px] mx-auto flex items-center '>

            <Image src={Logo} alt='mainstack logo' className='w-[36px] h-[36px] ml-[24px]' />
            
            <div className='flex flex-row items-center gap-[20px] ml-[370px]  '>

                <div className='flex gap-[4px]'>
                    <Image src={Home} alt='home-icon' width={20} height={20} />
                    <p className=' text-[16px] font-semibold '>Home</p>
                </div>
                <div className='flex gap-[4px]'>
                    <Image src={Analysis} alt='home-icon' width={20} height={20} />
                    <p className=' text-[16px] font-semibold '>Analytics</p>
                </div>
                <div className='flex gap-[4px] bg-black rounded-[100px] p-[10px]'>
                    <Image src={Revenue} alt='home-icon' />
                    <p className=' text-[16px] font-semibold text-white font-Degular'>Revenue  </p>
                </div>
                <div className='flex gap-[4px]'>
                    <Image src={Contact} alt='home-icon' width={20} height={20} />
                    <p className=' text-[16px] font-semibold '>CRM</p>
                </div>
                <div className='flex gap-[4px]'>
                    <Image src={Widget} alt='home-icon' width={20} height={20} />
                    <p className=' text-[16px] font-semibold '>Apps</p>
                </div>

            </div>

            <div className='flex ml-[330px] gap-[15px] mr-[12px]'>

                <Image src={Notifications} alt='home-icon' width={20} height={20} />



                <Image src={Chat} alt='home-icon' width={20} height={20} />


                 <div className='flex flex-row bg-[#EFF1F6] rounded-[100px] gap-[8px] '>
                 <Image src={Avatar} alt='avatar icon' width={25} height={25} className='pl-[2px]'/>
                 <Image src={Menu} alt='menu icon' width={25} height={25} className='py-[8px] pr-[8px]' />
                 </div>
                

            </div>







        </div>
    )
}

export default Navbar