import React from 'react'

const Information = ({ state }) => {

    console.log(state, "popo")

    const tag = state?.tags?.split(",")
    // console.log(tag, "test")

  return (
    <div className='flex flex-col'>
        <p className='text-[#3F434A] font-barlow font-medium text-[28px]'>Information</p>
        <div className='flex items-center justify-between mt-[27px]'>
            <div className='flex flex-col gap-5'>
                <p className='font-barlow text-[#1E2B3B] font-medium'>PRODUCT ID</p>
                <p className='font-barlow text-[#3F434A] font-medium text-[15px]'>{`#${state?.id?.substring(0, 8)}`}</p>
            </div>
            <div className='flex flex-col gap-5'>
                <p className='font-barlow text-[#1E2B3B] font-medium'>PRODUCT NAME</p>
                <p className='font-barlow text-[#3F434A] font-medium text-[15px]'>{`${state?.name}`}</p>
            </div>
            <div className='flex flex-col gap-5'>
                <p className='font-barlow text-[#1E2B3B] font-medium'>CATEGORY</p>
                <p className='font-barlow text-[#3F434A] font-medium text-[15px]'>{`${state?.category?.name}`}</p>
            </div>
            <div className='flex flex-col gap-5'>
                <p className='font-barlow text-[#1E2B3B] font-medium'>TAGS</p>
                <div className='flex gap-2 items-center'>
                    {
                        tag?.map((item, index) => (
                            <div className='w-auto p-2 rounded-lg flex justify-center items-center bg-[#E8E9EB]' key={index}>
                                <p className='font-barlow text-[#3F434A] font-medium text-[15px]'>{`${item}`}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
        <div className='flex flex-col mt-6'>
            <p className='font-barlow font-medium text-[#1E2B3B]'>DESCRIPTION</p>
            <p className='text-[#595F69] font-barlow'>{state?.description}</p>
        </div>
        <div className='flex flex-col mt-6'>
            <p className='font-barlow font-medium text-[#1E2B3B]'>SPECIFICATION</p>
            <p className='text-[#595F69] font-barlow'>{state?.specification}</p>
        </div>
        <div className='flex flex-col mt-6'>
            <p className='font-barlow font-medium text-[#1E2B3B]'>VARIANTS</p>
            <p className='text-[#595F69] font-barlow'>{state?.variants}</p>
        </div>
        
    </div>
  )
}

export default Information