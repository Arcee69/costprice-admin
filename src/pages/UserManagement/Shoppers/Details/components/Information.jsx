import React from 'react'

const Information = ({ state }) => {

  return (
    <div className='flex flex-col gap-[32px] mt-[72px]'>
        <div className='flex flex-col gap-6'>
            <p className='text-[#2B3674] font-bold font-barlow text-[24px]'>Basic Details</p>
            <div className='flex flex-wrap gap-20'>
                <div className='flex flex-col'>
                    <p className='text-[#5C6F7F] text-base font-barlow font-semibold'>ID</p>
                    <p className="font-inter text-[#071827] text-sm">{`#${state?.id?.substring(0, 8)}`}</p>
                </div>
                <div className='flex flex-col'>
                    <p className='text-[#5C6F7F] text-base font-barlow font-semibold'>Name</p>
                    <p className="font-inter text-[#071827] text-sm">{state?.name}</p>
                </div>
                <div className='flex flex-col'>
                    <p className='text-[#5C6F7F] text-base font-barlow font-semibold'>Email Address</p>
                    <p className="font-inter text-[#071827] text-sm">{state?.email}</p>
                </div>
                <div className='flex flex-col'>
                    <p className='text-[#5C6F7F] text-base font-barlow font-semibold'>Phone Number</p>
                    <p className="font-inter text-[#071827] text-sm">{state?.phone_number || "N/A"}</p>
                </div>
                <div className='flex flex-col'>
                    <p className='text-[#5C6F7F] text-base font-barlow font-semibold'>Location</p>
                    <p className="font-inter text-[#071827] text-sm">{state?.region || "N/A"}</p>
                </div>
                <div className='flex flex-col'>
                    <p className='text-[#5C6F7F] text-base font-barlow font-semibold'>Date Created</p>
                    <p className="font-inter text-[#071827] text-sm">{new Date(state?.created_at).toDateString()}</p>
                </div>
            </div>
        </div>

        <div className='flex flex-col gap-6'>
            <p className='text-[#2B3674] font-bold font-barlow text-[24px]'>Addresses</p>
            <div className='flex flex-wrap gap-[29px]'>
                <div className='w-[318px] flex flex-col'>
                    <p className='text-[#5C6F7F] text-base font-barlow font-semibold'>House Address 1</p>
                    <p className="font-inter text-[#071827] text-sm">{state?.house_address || "N/A"}</p>
                </div>
                <div className='w-[318px] flex flex-col'>
                    <p className='text-[#5C6F7F] text-base font-barlow font-semibold'>House Address 2</p>
                    <p className="font-inter text-[#071827] text-sm">{state?.house_address || "N/A"}</p>
                </div>
                <div className='w-[318px]  flex flex-col'>
                    <p className='text-[#5C6F7F] text-base font-barlow font-semibold'>House Address 3</p>
                    <p className="font-inter text-[#071827] text-sm">{state?.house_address || "N/A"}</p>
                </div>
                <div className='w-[318px]  flex flex-col'>
                    <p className='text-[#5C6F7F] text-base font-barlow font-semibold'>House Address 4</p>
                    <p className="font-inter text-[#071827] text-sm">{state?.house_address || "N/A"}</p>
                </div>
                <div className='w-[318px] flex flex-col'>
                    <p className='text-[#5C6F7F] text-base font-barlow font-semibold'>House Address 5</p>
                    <p className="font-inter text-[#071827] text-sm">{state?.house_address || "N/A"}</p>
                </div>
               
            </div>
        </div>

        <div className='flex flex-col gap-6'>
            <p className='text-[#2B3674] font-bold font-barlow text-[24px]'>Subscription Plan</p>
            <p className='text-[18px] font-barlow text-[#303972]'>{"N/A"}</p>
        </div>
    </div>
  )
}

export default Information