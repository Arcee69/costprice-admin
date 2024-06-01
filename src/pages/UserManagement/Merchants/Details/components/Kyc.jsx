import React from 'react'

const Kyc = ({ state }) => {
  return (
    <div className='flex flex-col gap-[32px] mt-[72px]'>

      <div className='flex flex-col gap-6'>
        <p className='font-bold text-[#2B3674] font-barlow text-[24px]'>Business Verification</p>
        <div className='w-[510px] h-[93px] p-4 gap-1.5 flex flex-col bg-[#E2E9F0] rounded-lg'>
            <p className='font-inter text-[#6B778C] text-[13px]'>Business Certificate</p>
            {
              state?.cac_doc ?
              <img src={state?.cac_doc} alt='Document' />
              :
              <p className='font-barlow text-lg text-[#6B778C] font-semibold'>N/A</p>
            }
        </div>
      </div>

      <div className='flex flex-col gap-6'>
        <p className='font-bold text-[#2B3674] font-barlow text-[24px]'>Identity Verification</p>
        <div className='w-[510px] h-[93px] p-4 gap-1.5 flex flex-col bg-[#E2E9F0] rounded-lg'>
            <p className='font-inter text-[#6B778C] text-[13px]'>Government ID Card</p>
            {
              state?.id_doc ?
              <div className='flex items-center gap-5'>
                <img src={state?.id_doc} alt='Document' />
                <p>{state?.id_type}</p>
              </div>
              :
              <p className='font-barlow text-lg text-[#6B778C] font-semibold'>N/A</p>
            }
        </div>
      </div>

      <div className='flex flex-col gap-6'>
        <p className='font-bold text-[#2B3674] font-barlow text-[24px]'>Address Verification</p>
        <div className='w-[510px] h-[93px] p-4 gap-1.5 flex flex-col bg-[#E2E9F0] rounded-lg'>
            <p className='font-inter text-[#6B778C] text-[13px]'>Address</p>
            {
              state?.address_doc ?
              <img src={state?.address_doc} alt='Document' />
              :
              <p className='font-barlow text-lg text-[#6B778C] font-semibold'>N/A</p>
            }
        </div>
      </div>

    </div>
  )
}

export default Kyc