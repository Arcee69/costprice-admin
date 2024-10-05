import React, { useState } from 'react'
import { Skeleton } from '@mui/material'
import ReactPaginate from 'react-paginate'
import { useNavigate } from 'react-router-dom'

import LongMenu from "../../../assets/svg/longmenu.svg"
import Empty from "../../../assets/png/empty.png"

const All = ({ allOrders, loading}) => {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10)
  const [itemOffset, setItemOffset] = useState(0);

  const navigate = useNavigate()

  const formatter = new Intl.NumberFormat('en-US');

  //Get Current data
  const endOffset = itemOffset + perPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentData = allOrders?.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(allOrders?.length / perPage);


  //Change Page 
  const handlePageClick = (event) => {
      const newOffset = (event.selected * perPage) % allOrders?.length;
      console.log(
        `User requested page number ${event.selected}, which is offset ${newOffset}`
      );
      setItemOffset(newOffset);
    };

  return (
    <div className='py-4 px-0'>
      {
        loading ?
          <Skeleton variant="rectangular" width={980} height={1000} style={{ backgroundColor: 'rgba(0,0,0, 0.06)', marginTop: "20px" }} />
            :
          <>
            <table className='w-full bg-[#fff] rounded-tr-xl rounded-tl-xl mt-4'>
                <tr className='h-[48px]'>
                    <th className="font-medium font-barlow text-[#8B909A] px-4 text-[13px] uppercase text-left">
                        ORDER NO
                    </th>
                    <th className="font-medium font-barlow text-[#8B909A] px-4 text-[13px] uppercase text-left">
                        ITEMS COUNT
                    </th>
                    <th className="font-medium font-barlow text-[#8B909A] px-4 text-[13px] uppercase text-left">
                        DATE
                    </th>
                    <th className="font-medium font-barlow text-[#8B909A] px-4 text-[13px] uppercase text-left">
                        TOTAL
                    </th>
                    <th className="font-medium font-barlow text-[#8B909A] px-4 text-[13px] uppercase text-left">
                        PAYMENT TYPE
                    </th>
                    <th className="font-medium font-barlow text-[#8B909A] px-4 text-[13px] uppercase text-left">
                        STATUS
                    </th>
                    <th className="font-medium font-barlow text-[#8B909A] px-4 text-[13px] uppercase text-left">
                        
                    </th>
                </tr>

                {currentData?.length > 0 ? currentData?.map((item, index) => (
                    <tr key={index} className='bg-white h-[56px] border-t cursor-pointer border-grey-100' onClick={() => navigate("/order-details", { state: item})}> {/* onClick={() => navigationCheck(data)} */}
                        <td className='h-[70px] px-4'>
                            <p className='text-sm font-semibold font-barlow text-dark-100 text-left'>{`#${item?.id?.substring(0, 8)}`}</p> 
                        </td>
                        <td className='h-[70px] px-4'>
                            <p className='text-sm font-barlow text-dark-100 text-left'>{item?.items_count}</p>
                        </td>
                        <td className='h-[70px] px-4'>
                            <p className='text-sm font-barlow text-dark-100 text-left'>{new Date(item?.created_at).toLocaleDateString()}</p>
                        </td>
                        <td className='h-[70px] px-4'>
                            <p className='text-sm font-barlow text-dark-100 text-left'>{`₦${formatter.format(item?.total_amount)}`}</p>
                        </td>
                        <td className='h-[70px] px-4'>
                            <p className='text-sm font-barlow text-dark-100 text-left'>{item?.payment_option}</p>
                        </td>
                        <td className='h-[70px] px-4'>
                            <div className={`rounded-lg h-8 flex justify-center items-center ${item?.status === 'Completed' && 'w-[99px]  bg-[#D1FFE3]'} ${item?.status === 'pending' && ' w-[99px] bg-[#FFC60029]'} ${item?.status === 'Cancelled' && ' w-[99px] bg-[#FFF1F2]'}`}>
                                <p className={`text-sm font-barlow text-left font-semibold ${item?.status === 'Completed' && 'text-[#0F973D]'} ${item?.status === 'pending' && 'text-[#FFC600]'} ${item?.status === 'Cancelled' && 'text-[#F43F5E]'}`}>
                                    {item?.status === "Completed" ? "Completed" : item?.status === "pending" ? "pending" : item?.status}
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
      }
    </div>
  )
}

export default All