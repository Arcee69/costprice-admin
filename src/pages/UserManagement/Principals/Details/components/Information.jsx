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
                <p className='text-[#5C6F7F] text-base font-barlow font-semibold'>Contact Person</p>
                <p className="font-inter text-[#071827] text-sm">{"N/A"}</p>
            </div>
            <div className='flex flex-col'>
                <p className='text-[#5C6F7F] text-base font-barlow font-semibold'>Email Address</p>
                <p className="font-inter text-[#071827] text-sm">{state?.email}</p>
            </div>
            <div className='flex flex-col'>
                <p className='text-[#5C6F7F] text-base font-barlow font-semibold'>Phone Number</p>
                <p className="font-inter text-[#071827] text-sm">{state?.phone_number}</p>
            </div>
            <div className='flex flex-col'>
                <p className='text-[#5C6F7F] text-base font-barlow font-semibold'>Location</p>
                <p className="font-inter text-[#071827] text-sm">{state?.region || "N/A"}</p>
            </div>
            

            </div>
        </div>

        <div className='flex flex-col gap-6'>
            <p className='text-[#2B3674] font-bold font-barlow text-[24px]'>Description</p>
            <p className='text-[18px] font-barlow text-[#303972]'>{state?.company_description || "N/A"}</p>
        </div>
        
        <div className='flex flex-col gap-6'>
            <p className='text-[#2B3674] font-bold font-barlow text-[24px]'>Business Details</p>
            <div className='flex flex-wrap gap-10'>
                <div className='flex flex-col'>
                    <p className="font-barlow text-[#5C6F7F] text-base font-semibold">Business Name</p>
                    <p>{state?.company_name || "N/A"}</p>
                </div>
                <div className='flex flex-col'>
                    <p className="font-barlow text-[#5C6F7F] text-base font-semibold">Business Phone Number</p>
                    <p>{state?.phone_number || "N/A"}</p>
                </div>
                <div className='flex flex-col'>
                    <p className="font-barlow text-[#5C6F7F] text-base font-semibold">Business Address</p>
                    <p>{state?.company_address || "N/A"}</p>
                </div>
                <div className='flex flex-col'>
                    <p className="font-barlow text-[#5C6F7F] text-base font-semibold">Business Email</p>
                    <p>{state?.company_email || "N/A"}</p>
                </div>
                <div className='flex flex-col'>
                    <p className="font-barlow text-[#5C6F7F] text-base font-semibold">Capacity</p>
                    <p>{state?.company_email || "N/A" }</p>
                </div>
                <div className='flex flex-col'>
                    <p className="font-barlow text-[#5C6F7F] text-base font-semibold">Date Created</p>
                    <p>{ new Date(state?.created_at).toDateString() || "N/A"}</p>
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