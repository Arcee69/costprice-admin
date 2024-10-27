import React, { useEffect, useState } from 'react'
import { api } from '../../../services/api'
import { appUrls } from '../../../services/urls'
import { Progress } from 'antd';

const TopCategories = () => {
    const [categoriesData, setCategoriesData] = useState([])

    const getCategoriesData = async () => {
        try {
            const res = await api.get(appUrls?.GET_TOP_CATEGORIES_DATA)
            console.log(res, 'res')
            setCategoriesData(res?.data?.data)
        } catch (err) {
            console.log(err, "err")
        }
    }

    useEffect(() => {
        getCategoriesData()
    }, [])

  return (
    <div>
        <table>
            <thead>
                <tr className='w-full border border-t-0 border-x-0 border-b-[#F0F1F3] '>
                    <th className='w-[100px] h-[18px] text-left font-poppins text-[#96A5B8] p-4 font-medium '>
                        #
                    </th>
                    <th className='w-[284px] h-[18px] text-left font-poppins p-4 font-medium '>
                        <p className='text-sm text-[#96A5B8] font-poppins'>Name</p>
                    </th>
                    <th className='w-[217px] h-[18px] text-left text-sm font-poppins text-[#96A5B8] p-4 font-medium '>
                        Popularity
                    </th>
                    <th className='w-[156px] h-[18px] text-left font-poppins p-4 font-medium '>
                        <p className='text-sm text-[#96A5B8] font-poppins'>Sales</p> 
                    </th>
                   
                </tr>
            </thead>
            <tbody className=''>
                {categoriesData?.length > 0 ?
                    categoriesData?.slice(0, 4).map((item, index) => (
                        <tr key={item.id} className='w-full mt-[18px] border-t-0 border-x-0 border border-b-[#F0F1F3]'>
                            <td className='w-[100px] h-[56px] text-left font-poppins text-[#96A5B8] p-4 font-medium '>
                                {`0${index + 1}`}
                            </td>
                            <td className='w-[156px] h-[56px] text-left font-poppins p-4 font-medium '>
                                <p className='font-poppins text-[#444A6D font-medium text-sm'>{item?.category_name}</p>
                            </td>
                            <td className='w-[217px] h-[56px] text-left font-poppins p-4 font-medium '>
                                <Progress percent={item?.total_count} showInfo={false} />
                            </td>
                            <td className='w-[151px] h-[56px] text-left font-poppins p-4 font-medium '>
                                <div className='w-[60px] h-auto p-1 text-center rounded-lg bg-[#F0F9FF] border border-[#0095FF]'>
                                    <p className='text-[#96A5B8] font-sans text-[13px] '>{`${item?.total_count}%`}</p>
                                </div>
                            </td>
                        </tr>
    
                    )) : (
                        <tr className='h-[200px] bg-white border-t border-grey-100'>
                            <td colSpan="8" className="relative">
                                <div className='absolute inset-0 flex items-center justify-center'>
                                    <div className='flex flex-col gap-2 items-center'>
                                        <p className='text-[#0C1322] font-medium text-[20px] font-inter'>No Categories Available</p>
                                    </div>
                                </div>
                            </td>
                        </tr>

                    )
                }
            </tbody>
        </table>
    </div>
  )
}

export default TopCategories