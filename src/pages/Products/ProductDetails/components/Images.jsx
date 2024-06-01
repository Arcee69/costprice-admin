import React from 'react'

import Preview from "../../../../assets/png/preview.png"

const Images = ({ state }) => {
  return (
    <div className='flex flex-col'>
        <p className='text-[#3F434A] font-barlow font-medium text-[28px]'>Images</p>
        <div className='flex flex-wrap gap-5 mt-[27px]'>
            {
                state?.product_images?.map((item, index) => (
                    <img src={Preview || item?.image} alt='Product' key={index} className='w-[345px] h-[338px] rounded-xl'/>
                ))
            }

        </div>
    </div>
  )
}

export default Images