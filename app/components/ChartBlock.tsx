import React from 'react'
import Chart from './Chart'
import AmountBlock from './AmountBlock'


const ChartBlock = () => {
  return (
    <>
    <div className='grid grid-cols-3 gap-[124px] pl-[140px] mt-[145px] '>
    <div className=' col-span-2 h-fit'>
    <div className=''>
    <div className='flex flex-row  h-[72px] gap-[64px] mb-[80px]'>
        <div className='flex flex-col justify-between'>
            <p>Available Balance</p>
            <p className=' font-bold  text-[30px] '>USD 120,500.00</p>
        </div>
        <div className='flex bg-[black] rounded-[100px] w-[167px] h-[52px] text-center items-center justify-center my-[10px] '>
            <p className='text-white'>withdraw</p>
        </div>
    
    </div>
    
  
   
  
   
    {/* <hr className='w-[100%] border-[2px]'/> */}
   
    </div>
    
    <Chart/>

    </div>
      

<div>
    <AmountBlock/>
</div>
    </div>
    

    </>

    
  )
}

export default ChartBlock