import React from 'react'

import Empty from "../../../../assets/png/empty.png"

const Products = () => {

    const data = [
        {
            no: "#0007366388",
            name: "Relaxer",
            price: "654",
            quantity: "2 Pieces",
            total: "₦1308"
        },
        {
            no: "#0007366388",
            name: "Natures Gentle Touch Herbal Body Cream",
            price: "654",
            quantity: "3 cartons",
            total: "₦1962"
        },
        {
            no: "#0007366388",
            name: "Natures Gentle Touch Herbal Body Cream",
            price: "654",
            quantity: "3 cartons",
            total: "₦15000"
        },
    ]

  return (
    <div className='flex flex-col mt-[53px] pl-[30px] '>
        <p className='font-barlow text-[20px] text-[#3F434A]'>Products</p>
        <>
            <table className='w-full bg-[#fff] rounded-tr-xl rounded-tl-xl mt-4'>
                <tr className='h-[48px]'>
                    <th className="font-medium font-barlow text-[#8B909A] px-4 text-[13px] uppercase text-left">
                        Product No
                    </th>
                    <th className="font-medium font-barlow text-[#8B909A] px-4 text-[13px] uppercase text-left">
                        Product Name
                    </th>
                    <th className="font-medium font-barlow text-[#8B909A] px-4 text-[13px] uppercase text-left">
                        Price
                    </th>
                    <th className="font-medium font-barlow text-[#8B909A] px-4 text-[13px] uppercase text-left">
                        Quantity
                    </th>
                    <th className="font-medium font-barlow text-[#8B909A] px-4 text-[13px] uppercase text-left">
                        Total
                    </th>
                </tr>

                {data?.length > 0 ? data?.map((item, index) => (
                    <tr key={index} className='bg-white h-[56px] border-t cursor-pointer border-grey-100'>
                        <td className='h-[70px] px-4'>
                            <p className='text-sm font-semibold font-barlow text-dark-100 text-left'>{`${item?.no}`}</p> 
                        </td>
                        <td className='h-[70px] px-4'>
                            <p className='text-sm font-barlow text-dark-100 text-left'>{item?.name}</p>
                        </td>
                        <td className='h-[70px] px-4'>
                            <p className='text-sm font-barlow text-dark-100 text-left'>{`₦${item?.price}`}</p>
                        </td>
                        <td className='h-[70px] px-4'>
                            <p className='text-sm font-barlow text-dark-100 text-left'>{item?.quantity}</p>
                        </td>
                        <td className='h-[70px] px-4'>
                            <p className='text-sm font-barlow text-dark-100 text-left'>{item?.total}</p>
                        </td>
                    </tr>
                )) : (
                    <tr className='h-[654px] bg-white border-t border-grey-100'>
                        <td colSpan="8" className="relative">
                            <div className='absolute inset-0 flex items-center justify-center'>
                                <div className='flex flex-col gap-2 items-center'>
                                    <img src={Empty} alt='empty' className='w-[159px] h-[103px]'/>
                                    <p>Oops! Nothing to see here.</p>
                                </div>
                            </div>
                        </td>
                    </tr>
                )}
            </table>
          
        </>
    </div>
  )
}

export default Products