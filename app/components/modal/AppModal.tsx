import React from 'react'
import AppContents from './AppContents'


interface AppModalProps {
    closeModal : () => void ;
    appModalOpen : boolean;
    

}

const AppModal:React.FC<AppModalProps> = ({closeModal , appModalOpen}) => {
  return (
    <div className='fixed inset-0  bg-white rounded-[20px] w-[25%] h-[400px] mt-[85px] ml-[850px] shadow-md '>
     <AppContents  closeModal={closeModal}/>
    </div>
  )
}

export default AppModal