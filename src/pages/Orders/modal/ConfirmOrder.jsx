import React from 'react'
import { MdOutlineInfo } from 'react-icons/md'

const ConfirmOrder = ({ handleClose }) => {
  return (
    <div className='w-[426px] h-[332px] bg-[#fff] mt-[150px] flex flex-col items-center py-[48px] px-6 gap-4 rounded-lg'>
        <p className='font-lora text-[32px] text-[#071827] font-bold'>Confirm Order</p>
        <p className='text-[#071827] font-barlow text-[16px]'>Are you sure you want to Confirm this Order</p>
        <div className='bg-[#EDF2F780] flex items-center leading-[21px] justify-between p-3 rounded-lg w-[378px] '>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#2B3674" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 6.01953V6" stroke="#2B3674" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 10V18" stroke="#2B3674" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <p className='text-[#5C6F7F] w-[307px] font-barlow text-sm'>
                When you click yes, confirm, this will be sent to our delivery partner for delivery process, 
                expect a tracking number to be sent in a few days
            </p>
        </div>
        <div className='flex items-center gap-[18px] '>
            <button onClick={handleClose} className='w-[180px] h-[48px] border border-[#5C6F7F] flex items-center justify-center rounded-[12px]'>
                <p className='text-[#5C6F7F] text-base font-barlow'>No, Cancel</p>
            </button>
            <button className='w-[180px] h-[48px] bg-[#0F973D] rounded-[12px] flex items-center justify-center'>
                <p className='text-[#fff] text-base font-barlow'>Yes, Confirm</p>
            </button>
        </div>

    </div>
  )
}

export default ConfirmOrder