import React from 'react'
import Image from 'next/image';

interface AmountProps {
    name : string;
    amount: string;
    logo: string
}



const amountDetails : AmountProps[] = [
    {
        name : "Ledger Balance",
        amount : "USD 0.00",
        logo : "/assets/info.svg"
    },

    {
        name : "Total payout",
        amount : "USD 55,080.00",
        logo : "/assets/info.svg"
    },
    {
        name : "Total Revenue",
        amount : "USD 175,580.00",
        logo : "/assets/info.svg"
    },
    {
        name : "Pending Payout",
        amount : "USD 0.00",
        logo : "/assets/info.svg"
    },
]


const Amounts  = () => {
  return (
    <div className='w-[271px]'>{amountDetails.map((item , index)=>{
        return <div className='flex flex-row justify-between items-start ' key={index}>
            <div className=''> 
            <div className='text-[14px] font-medium mb-[10px] '>{item.name}</div>
            <div className='text-[28px] font-bold w-[110%] mb-[34px] '>{item.amount}</div>
            </div>
         
            <Image  src={item.logo} width={20} height={20} alt='information details'/>
          
           
        </div>
    })}</div>
  )
}

export default Amounts
