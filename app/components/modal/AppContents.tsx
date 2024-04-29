import React from 'react'
import Image from 'next/image';

interface AppDetails {
    img : string;
    title: string;
    description: string;
}

interface AppModalProps {
    closeModal : () => void ;
    appModalOpen : boolean;
    

}



const appDetails : AppDetails[] = [
    {
        img : '/assets/app-bar-list(3).svg',
        title : 'Link in Bio',
        description:'Manage your link in Bio'

    },
    
    {
        img : '/assets/app-bar-list.svg',
        title : 'Store',
        description:'Manage your store activities'

    },
    {
        img : '/assets/app-bar-list(1).svg',
        title : 'Media kit',
        description:'Manage your media kit'

    },
    {
        img : '/assets/app-bar-list(2).svg',
        title : 'Invoicing',
        description:'Manage your link invoices'

    },
    {
        img : '/assets/app-bar-list(3).svg',
        title : 'Bookings',
        description:'Manage your link in Bookings'

    }
]

const AppContents:React.FC<{closeModal:()=> void}> = ({closeModal}) => {
  return (
    <div>{appDetails.map((item , index) => {
        return <div className='flex space-y-2 gap-[10px] ml-[20px] mt-[15px] cursor-pointer' key={index}>
            <div className='flex items-center justify-center rounded-[8px] shadow-md w-[30px] h-[30px] my-auto'>
            <Image src={item.img} width={24} height={24} alt='app bar list ' />
            </div>
          
            <div>
                <p className='font-semibold text-[16px]'>{item.title}</p>
                <p className='font-normal text-[12px]'>{item.description}</p>
            </div>

            
        </div>
    })}</div>
  )
}

export default AppContents