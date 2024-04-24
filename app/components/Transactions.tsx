import React from 'react'
import Image from 'next/image'

interface TransactionProps {
    title : string,
    name : string,
    amount : string,
    date : string,
    callImg : string,
}


const transactionDetails : TransactionProps[] = [
  {
    title :   "Psychology of money",
    name : "Roy cash",
    amount : "USD 600",
    date : "Apr 03, 2022",
    callImg : "/assets/received.svg"

  },

  {
    title :   "Buy me a coffee",
    name : "Jonathan Smart",
    amount : "USD 100",
    date : "Apr 02, 2022",
    callImg : "/assets/received.svg",
    

  },

  {
    title :   "How to build an online brand",
    name : "Delvan Ludacris",
    amount : "USD 100",
    date : "Apr 02, 2022",
    callImg : "/assets/received.svg"

  },

  {
    title :   "Cash withdrawal",
    name : "Successful",
    amount : "USD 300.003",
    date : "Apr 01, 2022",
    callImg : "/assets/received.svg"

  },

  {
    title :   "Support my outreach",
    name : "Shawn Kane",
    amount : "USD 400",
    date : "Apr 02, 2022",
    callImg : "/assets/received.svg"

  },

  {
    title :   "Cash Withdrawal",
    name : "Pending",
    amount : "USD 1004.44",
    date : "Apr 01, 2022",
    callImg : "/assets/received.svg"

  },
  {
    title :   "Learn how to pitch your idea",
    name : "Dujon jericho",
    amount : "USD 500",
    date : "Apr 02, 2022",
    callImg : "/assets/received.svg"

  }

]


const Transactions = () => {
  return (
<div>
        {transactionDetails.map((transactions , index) => {
            return <div className='mx-[140.5px] mt-[33px]' key={index}>
                <div className='flex flex-row '>
                    <div className='  bg-[#E3FCF2] w-[48px] rounded-[100px] h-[48px] my-auto mx-[15px] '>
                    <Image src={transactions.callImg} alt='transaction status' width={20} height={20} />
                    </div>
               
                <div className='flex flex-row  gap-[700px] '>
                <div className='w-[300px] space-y-[9px] mb-[26px]'>
                <div className='text-[16px] font-medium' >{transactions.title}</div>
                <div className='text-[14px]'>{transactions.name}</div>
                </div>
                <div className='w-[150px] space-y-[9px] mb-[26px]'>
                <div className='text-[16px] font-bold'>{transactions.amount}</div>
                <div className='text-[14px]'>{transactions.date}</div>
                </div>
                </div>
                </div>
                
                
                
            </div>
        })}
    </div>
  )
}

export default Transactions