import React from 'react'
import Image from 'next/image'

import Download from '../../public/assets/download.svg'
import Expand from '../../public/assets/expand.svg'
import Transactions from './Transactions'


const TransactionBlock = () => {
    return (
        <>
            <div className='flex  justify-between mt-[82px] w-[1160px] mx-auto'>
                <div>
                    <p className='text-[24px] font-bold'>24 Transactions</p>
                    <p className='text-[14px] font-medium'>Your transaction for the last 7 days</p>
                </div>
                <div>
                    <div className='flex gap-[12px] '>
                        <div className='bg-[#EFF1F6] flex flex-row rounded-[100px] py-[12px] pr-[44px] pl-[30px] gap-[5px] '>
                            <p className='text-[16px] font-semibold'>Filter</p>
                            <Image src={Expand} width={20} height={20} alt='filter transactions' />
                        </div>
                        <div className=' bg-[#EFF1F6] py-[12px] pr-[20px] pl-[30px] flex flex-row rounded-[100px] gap-[5px] '>
                            <p className='text-[16px] font-semibold pr-[4px]'>Export list</p>
                            <Image src={Download} width={20} height={20} alt='download file' />
                        </div>
                    </div>



                </div>





            </div>

            <hr className='w-[1160px] mt-[24px] mx-auto' />
            <Transactions />
        </>

    )
}

export default TransactionBlock