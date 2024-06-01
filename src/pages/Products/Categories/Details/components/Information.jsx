import React from 'react'
import Avatar from "../../../../../assets/png/avatar.png"

const Information = ({ details }) => {

  return (
    <div className='flex flex-col gap-[27px] mt-[40px]'>
        <p className='text-[#3F434A] font-medium font-barlow text-[28px]'>Information</p>
        <div className='flex items-start gap-[21px]'>
            <div className='flex flex-col gap-[21px]'>
                <p className='font-barlow text-[#1E2B3B] font-medium'>Icon</p>
                <img src={Avatar} alt='Avatar' className='w-[151px] h-[150px]'/>
            </div>

            <div className='flex flex-col gap-6'>
                <div className='flex flex-wrap gap-20'>
                    <div className='flex flex-col'>
                        <p className='text-[#5C6F7F] text-base font-barlow font-semibold'>ID</p>
                        <p className="font-inter text-[#071827] text-sm">{`#${details?.id?.substring(0, 8)}`}</p>
                    </div>
                    <div className='flex flex-col'>
                        <p className='text-[#5C6F7F] text-base font-barlow font-semibold uppercase'>Name</p>
                        <p className="font-inter text-[#071827] text-sm">{details?.name}</p>
                    </div>
                    <div className='flex flex-col'>
                        <p className='text-[#5C6F7F] text-base font-barlow font-semibold uppercase'>Item Quantity</p>
                        <p className="font-inter text-[#071827] text-sm">{details?.products?.length || "N/A"}</p>
                    </div>
                    {/* <div className='flex flex-col'>
                        <p className='text-[#5C6F7F] text-base font-barlow font-semibold uppercase'>Parent Category ID</p>
                        <p className="font-inter text-[#071827] text-sm">Null</p>
                    </div> */}
                    <div className='flex flex-col'>
                        <p className='text-[#5C6F7F] text-base font-barlow font-semibold uppercase'>Last updated</p>
                        <p className="font-inter text-[#071827] text-sm">{new Date(details?.updated_at).toDateString()}</p>
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='text-[#5C6F7F] text-base font-barlow font-semibold uppercase'>description</p>
                    <p className="font-inter text-[#071827] text-sm">{details?.description || "N/A"}</p>
                </div>
                <div className='flex items-center gap-6'>
                    <div className='flex flex-col gap-1'>
                        <p className='text-[#5C6F7F] text-base font-barlow font-semibold uppercase'>Meta title</p>
                        <p className="font-inter text-[#071827] text-sm">{details?.description || "N/A"}</p>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <p className='text-[#5C6F7F] text-base font-barlow font-semibold uppercase'>Meta Keyword </p>
                        <p className="font-inter text-[#071827] text-sm">{details?.description || "N/A"}</p>
                    </div>

                </div>
                <div className='flex flex-col gap-2'>
                    <p className='text-[#5C6F7F] text-base font-barlow font-semibold uppercase'>Meta description</p>
                    <p className="font-inter text-[#071827] text-sm">{details?.description || "N/A"}</p>
                </div>
            </div>
        </div>

       
        
     

        
    </div>
  )
}

export default Information