import React, { useState, Fragment } from 'react'
import { Skeleton } from '@mui/material'
import ReactPaginate from 'react-paginate'
import { useNavigate } from 'react-router-dom'
import { Listbox, Transition } from '@headlessui/react';
import { IoIosArrowDown } from 'react-icons/io';

import LongMenu from "../../../../../assets/svg/longmenu.svg"
import SearchSmall from "../../../../../assets/svg/search_small.svg"

import Empty from "../../../../../assets/png/empty.png"

const terms = [
  { name: 'Name'},
  { name: 'Category' },
]

const Orders = ({ state }) => {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10)
  const [itemOffset, setItemOffset] = useState(0);
  const [loading, setLoading] = useState(false)
  const [selected, setSelected] = useState(terms[0])

  const navigate = useNavigate()

  //Get Current data
  const endOffset = itemOffset + perPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
 //  const currentData = allProducts?.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(state?.length / perPage);


  //Change Page 
  const handlePageClick = (event) => {
      const newOffset = (event.selected * perPage) % state?.length;
      console.log(
        `User requested page number ${event.selected}, which is offset ${newOffset}`
      );
      setItemOffset(newOffset);
    };

  return (
    <div className='flex flex-col gap-[18px] mt-[35px]'>
      <div className='flex items-center justify-between'>
            <div className="w-[745px] rounded-2xl bg-[#fff] flex items-center border border-[#ccc]">
                <Listbox value={selected} onChange={setSelected}>
                    <div className="relative">
                        <Listbox.Button className="relative w-[145px] rounded-l-2xl cursor-default flex items-center gap-2 py-2 pl-3 pr-10 text-left outline-none sm:text-sm bg-[#E0E3F1]">
                            <span className="block truncate w-full font-barlow text-[#2B3674]">{selected?.name}</span>
                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                <IoIosArrowDown
                                    className="h-5 w-5 text-[#2B3674]"
                                    aria-hidden="true"
                                />
                            </span>
                        </Listbox.Button>
                        <Transition
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Listbox.Options className="absolute z-10 mt-1 w-[200px] max-h-60  overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                                {terms.map((item, index) => (
                                    <Listbox.Option
                                        key={index}
                                        className={({ active }) =>
                                            `relative cursor-default select-none py-2 pl-4 pr-4 ${
                                            active ? 'bg-[#E6F6F4] text-[#052011]' : 'text-[#2B3674]'
                                            }`
                                        }
                                        value={item}
                                    >
                                    {({ selected }) => (
                                        <>
                                            <span
                                                className={`block truncate ${
                                                selected ? 'font-medium' : 'font-normal'
                                                } text-[#2B3674]`}
                                            >
                                                {item.name}
                                            </span>
                                        </>
                                    )}
                                    </Listbox.Option>
                                ))}
                            </Listbox.Options>
                        </Transition>
                    </div>
                </Listbox>
                <input 
                    type='text'
                    placeholder='Search by Name'
                    className='bg-transparent outline-none w-[560px] ml-2'
                />
                <img src={SearchSmall} alt='SearchSmall'/>
            </div>

            <div className='w-[187px] rounded-2xl bg-[#fff] flex justify-between items-center h-[40px] p-2 gap-2 border border-[#ccc]'>
                <p className='text-[#8B909A] font-barlow text-[15px]'>Filter by date range</p>
                <IoIosArrowDown
                    className="h-4 w-4 text-[#8B909A]"
                    aria-hidden="true"
                />
            </div>
        </div>
      {
        loading ?
          <Skeleton variant="rectangular" width={980} height={1000} style={{ backgroundColor: 'rgba(0,0,0, 0.06)', marginTop: "20px" }} />
            :
          <>
            <table className='w-full bg-[#fff] rounded-tr-xl rounded-tl-xl mt-4'>
                <tr className='h-[48px]'>
                    <th className="font-medium font-barlow text-[#8B909A] px-4 text-[13px] uppercase text-left">
                        Order No
                    </th>
                    <th className="font-medium font-barlow text-[#8B909A] px-4 text-[13px] uppercase text-left">
                        Product
                    </th>
                    <th className="font-medium font-barlow text-[#8B909A] px-4 text-[13px] uppercase text-left">
                        Total
                    </th>
                    <th className="font-medium font-barlow text-[#8B909A] px-4 text-[13px] uppercase text-left">
                        DATE 
                    </th>
                    <th className="font-medium font-barlow text-[#8B909A] px-4 text-[13px] uppercase text-left">
                        Status
                    </th>
                    <th className="font-medium font-barlow text-[#8B909A] px-4 text-[13px] uppercase text-left">
                        
                    </th>
                </tr>

                {state?.length > 0 ? state?.map((item, index) => (
                    <tr key={index} className='bg-white h-[56px] border-t cursor-pointer border-grey-100' onClick={() => navigate("/categories-details", { state: item })}>
                        <td className='h-[70px] px-4'>
                            <p className='text-sm font-semibold font-barlow text-dark-100 text-left'>{`#${item?.id?.substring(0, 8)}`}</p> 
                        </td>
                        <td className='h-[70px] px-4'>
                            <p className='text-sm font-barlow text-dark-100 text-left'>{item?.name}</p>
                        </td>
                        <td className='h-[70px] px-4'>
                            <p className='text-sm font-barlow text-dark-100 text-left'>{item?.description || "N/A"}</p>
                        </td>
                        <td className='h-[70px] px-4'>
                            <p className='text-sm font-barlow text-dark-100 text-left'>{`${item?.quantity || "N/A"}`}</p>
                        </td>
                        <td className='h-[70px] px-4'>
                            <p className='text-sm font-barlow text-dark-100 text-left'>{new Date(item?.created_at).toDateString()}</p>
                        </td>
                       
                        {/* <td className='h-[70px] px-4'>
                            <div className={`rounded-lg h-8 flex justify-center items-center ${item?.active === '1' && 'w-[78px]  bg-[#D1FFE3]'} ${item?.active === '0' && ' w-[99px] bg-[#FFC60029]'}`}>
                                <p className={`text-sm font-barlow text-left font-semibold ${item?.active === '1' && 'text-[#0F973D]'} ${item?.active === '0' && 'text-[#FFC600]'} `}>
                                    {item?.active === "1" ? "Active" : item?.active === "0" ? "Inactive" : item?.active}
                                </p>
                            </div>
                        </td> */}
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

export default Orders