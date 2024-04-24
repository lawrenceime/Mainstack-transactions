import React from 'react'
import AppContents from './AppContents'


interface AppModalProps {
    closeModal : () => void ;
    appModalOpen : boolean;
    

}

const AppModal:React.FC<AppModalProps> = ({closeModal , appModalOpen}) => {
  return (
    <div className='fixed inset-0'>
     <AppContents closeModal={closeModal}/>
    </div>
  )
}

export default AppModal