import React, { useState } from 'react'
import { Skeleton } from '@mui/material'
import ReactPaginate from 'react-paginate'
import { useNavigate } from 'react-router-dom'

import LongMenu from "../../../../assets/svg/longmenu.svg"
import Empty from "../../../../assets/png/empty.png"


const All = ({ data }) => {
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(10)
    const [itemOffset, setItemOffset] = useState(0);
  
    const navigate = useNavigate()



     //Get Current data
  const endOffset = itemOffset + perPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentData = data?.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(data?.length / perPage);


  //Change Page 
  const handlePageClick = (event) => {
      const newOffset = (event.selected * perPage) % data?.length;
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
                    Subscription ID
                  </th>
                  <th className="font-medium font-barlow text-[#8B909A] px-4 text-[13px] uppercase text-left">
                      CUSTOMER
                  </th>
                  <th className="font-medium font-barlow text-[#8B909A] px-4 text-[13px] uppercase text-left">
                    Customer Type
                  </th>
                  <th className="font-medium font-barlow text-[#8B909A] px-4 text-[13px] uppercase text-left">
                      AMOUNT
                  </th>
                  <th className="font-medium font-barlow text-[#8B909A] px-4 text-[13px] uppercase text-left">
                    Plan
                  </th>
                  <th className="font-medium font-barlow text-[#8B909A] px-4 text-[13px] uppercase text-left">
                    Next Billing Date
                  </th>
                  <th className="font-medium font-barlow text-[#8B909A] px-4 text-[13px] uppercase text-left">
                      STATUS
                  </th>
                  <th className="font-medium font-barlow text-[#8B909A] px-4 text-[13px] uppercase text-left">
                      
                  </th>
              </tr>

              {currentData?.length > 0 ? currentData?.map((item, index) => (
                  <tr key={index} className='bg-white h-[56px] border-t cursor-pointer border-grey-100' onClick={() => navigate("/subscription-details")}> {/* onClick={() => navigationCheck(data)} */}
                      <td className='h-[70px] px-4'>
                          <p className='text-sm font-semibold font-barlow text-dark-100 text-left'>{`${item?.id?.substring(0, 8)}`}</p> 
                      </td>
                      <td className='h-[70px] px-4'>
                          <p className='text-sm font-barlow text-dark-100 text-left'>{item?.customer}</p>
                      </td>
                      <td className='h-[70px] px-4'>
                          <p className='text-sm font-barlow text-dark-100 text-left'>{item?.type}</p>
                      </td>
                      <td className='h-[70px] px-4'>
                          <p className='text-sm font-barlow text-dark-100 text-left'>{item?.amount}</p>
                      </td>
                      <td className='h-[70px] px-4'>
                          <p className='text-sm font-barlow text-dark-100 text-left'>{item?.plan}</p>
                      </td>
                      <td className='h-[70px] px-4'>
                          <p className='text-sm font-barlow text-dark-100 text-left'>{item?.date}</p>
                      </td>
                      <td className='h-[70px] px-4'>
                          <div className={`rounded-lg h-8 flex justify-center items-center ${item?.status === 'Completed' && 'w-[99px]  bg-[#D1FFE3]'} ${item?.status === 'Pending' && ' w-[99px] bg-[#FFC60029]'} ${item?.status === 'Cancelled' && ' w-[99px] bg-[#FFF1F2]'}`}>
                              <p className={`text-sm font-barlow text-left font-semibold ${item?.status === 'Completed' && 'text-[#0F973D]'} ${item?.status === 'Pending' && 'text-[#FFC600]'} ${item?.status === 'Cancelled' && 'text-[#F43F5E]'}`}>
                                  {item?.status === "Completed" ? "Completed" : item?.status === "Pending" ? "Pending" : item?.status}
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