import React, { useState } from 'react'
import ReactPaginate from 'react-paginate';
import { useNavigate } from 'react-router-dom';
import { Skeleton } from '@mui/material';

import LongMenu from "../../../../../assets/svg/longmenu.svg"
import Empty from "../../../../../assets/png/empty.png"

const Products = ({ details }) => {
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(10)
    const [itemOffset, setItemOffset] = useState(0);

    const allProducts = details?.products

     //Get Current data
     const endOffset = itemOffset + perPage;
     console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    //  const currentData = allProducts?.slice(itemOffset, endOffset);
     const pageCount = Math.ceil(allProducts?.length / perPage);
 
     //Change Page 
     const handlePageClick = (event) => {
         const newOffset = (event.selected * perPage) % allProducts?.length;
         console.log(
           `User requested page number ${event.selected}, which is offset ${newOffset}`
         );
         setItemOffset(newOffset);
       };

  return (
    <div  className='flex flex-col gap-5 mt-[40px]'>
        <p className='text-[#3F434A] font-medium font-barlow text-[28px]'>{`Products under ${details?.name}`}</p>

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
                        Category
                    </th>
                    <th className="font-medium font-barlow text-[#8B909A] px-4 text-[13px] uppercase text-left">
                        Price
                    </th>
                    <th className="font-medium font-barlow text-[#8B909A] px-4 text-[13px] uppercase text-left">
                        Brand
                    </th>
                    <th className="font-medium font-barlow text-[#8B909A] px-4 text-[13px] uppercase text-left">
                        Date Created
                    </th>
                    <th className="font-medium font-barlow text-[#8B909A] px-4 text-[13px] uppercase text-left">
                        Status
                    </th>
                    <th className="font-medium font-barlow text-[#8B909A] px-4 text-[13px] uppercase text-left">
                        
                    </th>
                </tr>

                {allProducts?.length > 0 ? allProducts?.map((item, index) => (
                    <tr key={index} className='bg-white h-[56px] border-t cursor-pointer border-grey-100'> 
                        <td className='h-[70px] px-4'>
                            <p className='text-sm font-semibold font-barlow text-dark-100 text-left'>{`#${item?.id?.substring(0, 8)}`}</p> 
                        </td>
                        <td className='h-[70px] px-4'>
                            <p className='text-sm font-barlow text-dark-100 text-left'>{item?.name}</p>
                        </td>
                        <td className='h-[70px] px-4'>
                            <p className='text-sm font-barlow text-dark-100 text-left'>{details?.name || "N/A"}</p>
                        </td>
                        <td className='h-[70px] px-4'>
                            <p className='text-sm font-barlow text-dark-100 text-left'>{`${item?.product_prices?.[0]?.max || "N/A"}`}</p>
                        </td>
                        <td className='h-[70px] px-4'>
                            <p className='text-sm font-barlow text-dark-100 text-left'>{`${item?.brand || "N/A"}`}</p>
                        </td>
                        <td className='h-[70px] px-4'>
                            <p className='text-sm font-barlow text-dark-100 text-left'>{new Date(item?.created_at).toDateString()}</p>
                        </td>
                        <td className='h-[70px] px-4'>
                            <div className={`rounded-lg h-8 flex justify-center items-center ${item?.availability === 'available' && 'w-[78px]  bg-[#D1FFE3]'} ${item?.availability === 'Flagged' && ' w-[99px] bg-[#FFC60029]'} ${item?.availability === 'Disabled' && 'w-[92px] bg-[#FFF1F2]'} `}>
                                <p className={`text-sm font-barlow text-left font-semibold ${item?.availability === 'available' && 'text-[#0F973D]'} ${item?.availability === 'Flagged' && 'text-[#FFC600]'} ${item?.availability === 'Disabled' && 'text-[#F43F5E]'} `}>
                                    {item?.availability === "available" ? "Available" : item?.availability === "Flagged" ? "Flagged" : item?.availability}
                                </p>
                            </div>
                        </td>
                        <td className='h-[70px] px-4'>
                            <img src={LongMenu} alt='LongMenu' className=' h-[16px]' />
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
            <div className=' mb-5 bg-[#fff]'>
                <ReactPaginate
                    breakLabel="..."
                    nextLabel=">"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    className='w-full flex gap-3 font-barlow text-dark-100 font-semibold justify-end py-2 pr-10'
                    pageCount={pageCount}
                    previousLabel="<"
                    renderOnZeroPageCount={null}
                />
            </div>
            </>
    </div>
  )
}

export default Products