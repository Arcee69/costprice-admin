import React from 'react'
import FileIcon from "../../../assets/png/file.png"
import Dollar from "../../../assets/png/dollar.png"

const Activity = () => {

    const data = [
        {
            id: 1,
            title: "New Product Listed",
            activity: "Product X by Merchant D",
            time: "3 minutes ago",
            icon: FileIcon
        },
        {
            id: 2,
            title: "Sales Transaction",
            activity: "A Shopper just bought Product A",
            time: "3 minutes ago",
            icon: Dollar
        },
        {
            id: 3,
            title: "Sales Transaction",
            activity: "A Shopper just bought Product A",
            time: "3 minutes ago",
            icon: Dollar
        },
    ]

  return (
    <div className='w-full'>
        <div className='flex flex-col gap-[26px]'>
            {
                data?.map((items) => (
                    <div className='flex items-start gap-[17px]' key={items?.id}>
                        <img src={items?.icon} alt='Icon' className='w-[35px] h-[36px]'/>
                        <div className='flex flex-col gap-2'>
                            <p className='font-barlow font-bold text-[#3D475C] text-[14px] '>{items?.title}</p>
                            <p className='text-[#9499A1] font-barlow text-[12px]'>{items?.activity}</p>
                            <div className='w-[98px] h-[17px] rounded-lg bg-[#DCDCFE] flex items-center justify-center'>
                                <p className='text-[#5151F9] text-[10px] font-barlow'>{items?.time}</p>
                            </div>
                        </div>
                    </div>
                ))
            }

        </div>

    </div>
  )
}

export default Activity