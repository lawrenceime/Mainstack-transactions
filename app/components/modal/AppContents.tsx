import React from 'react'
import Image from 'next/image';

interface AppDetails {
    img : string;
    title: string;
    description: string;
}

const appDetails : AppDetails[] = [
    {
        img : 'app-bar-list(3).svg',
        title : 'Link in Bio',
        description:'Manage your link in Bio'

    },
    
    {
        img : 'app-bar-list.svg',
        title : 'Store',
        description:'Manage your store activities'

    },
    {
        img : 'app-bar-list(1).svg',
        title : 'Media kit',
        description:'Manage your media kit'

    },
    {
        img : 'app-bar-list(2).svg',
        title : 'Invoicing',
        description:'Manage your link invoices'

    },
    {
        img : 'app-bar-list(3).svg',
        title : 'Bookings',
        description:'Manage your link in Bookings'

    }
]

const AppContents = () => {
  return (
    <div>{appDetails.map((item , index) => {
        return <div key={index}>
            <Image src={item.img} alt='app bar list ' />
            <div>
                <p>{item.title}</p>
                <p>{item.description}</p>
            </div>

            
        </div>
    })}</div>
  )
}

export default AppContents