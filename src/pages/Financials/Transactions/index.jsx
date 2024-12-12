import React, { useEffect, useState, Fragment } from 'react'
import { FiHome, FiUploadCloud } from 'react-icons/fi'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { HiOutlinePlusSm } from "react-icons/hi";
import { Listbox, Transition } from '@headlessui/react';
import { IoIosArrowDown } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import * as XLSX from 'xlsx'

import { api } from '../../../services/api';
import { appUrls } from '../../../services/urls';

import AdminIcon from "../../../assets/svg/admin.svg"
import CartIcon from "../../../assets/svg/cart_green.svg"
import SearchSmall from "../../../assets/svg/search_small.svg"
import Receipt from "../../../assets/svg/receipt.svg"
import Wallet from "../../../assets/svg/wallet.svg"
import Cancelled from './component/Cancelled';
import Pending from './component/Pending';
import Successful from './component/Successful';
import All from './component/All';




const terms = [
    { name: ''},
    { name: 'order'},
    { name: 'subscription' },
  ]

const Transaction = () => {
    const [loading, setLoading] = useState(false)
    const [activeTab, setActiveTab] = useState("All")
    const [allTransactions, setAllTransactions] = useState([])
    const [selected, setSelected] = useState(terms[0])
    const [search, setSearch] = useState("")
    const [totalAmount, setTotalAmount] = useState(0); 

    const handleChangeTab = (value) => {
      setActiveTab(value)
    }

    const formatter = new Intl.NumberFormat('en-US');

    const getAllTransactions = async () => {
      setLoading(true);
      await api
        .get(appUrls?.GET_ALL_TRANSACTIONS)
        .then((res) => {
          setLoading(false);
          const transactions = res?.data?.data?.transactions;
          setAllTransactions(transactions);
  
          // Calculate the total amount
          const total = transactions.reduce((sum, transaction) => {
            return sum + parseInt(transaction.total_amount, 10);
          }, 0);
          setTotalAmount(total); // Update the total amount state
        })
        .catch((err) => {
          setLoading(false);
          console.log(err, "faro");
        });
    };
  
    useEffect(() => {
      getAllTransactions()
    }, [search])

    const filteredTransactions = allTransactions?.filter((item) => {
      const matchesSearch = 
      item.user.name.toLowerCase().includes(search.toLowerCase() || "")
      
      const matchesStatus = 
          selected.name === "" || 
          item.transaction_type === selected.name;
      
      return matchesSearch && matchesStatus;  
    })
  
    const exportExcel = () => {
      const worksheet = XLSX.utils.json_to_sheet(allTransactions); 
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Transactions');
      XLSX.writeFile(workbook, `transactions_${Date.now()}.xlsx`);
    };

  return (
    <div className='py-5 px-14 flex flex-col bg-[#F4F7FE]'>
      <div className='flex items-center'>
        <FiHome className='w-5 h-5 text-[#D0D5DD]' />
        <MdOutlineKeyboardArrowRight className='w-4 h-4 text-[#D0D5DD]' />
        <div className='w-[122px] h-[28px] bg-[#F4ECEE] rounded-[6px] p-2'>
          <p className='text-[#F55425] font-inter font-medium text-xs text-center'>Transaction List</p>
        </div>
      </div>
      <div className='flex justify-between mt-[28px]'>
        <p className='font-barlow text-[#2B3674] text-[24px] font-semibold'>Transactions</p>

        <div className='flex gap-4 items-center'>
          <button
            className='w-[120px] p-2 h-[48px] bg-[#2B3674] flex items-center gap-[21px] rounded-lg'
            onClick={exportExcel}
          >
            <FiUploadCloud className='w-[18px] h-[15px] text-[#fff]' />
            <p className='text-[#fff] font-barlow font-medium'>Export</p>
          </button>
        
        </div>
      </div>

      <div className='flex gap-3 mt-5 items-center'>

        <div className='bg-[#fff] w-[267px] h-[104px] gap-2.5 rounded-xl p-4 flex items-center'>
          <div className='bg-[#F4F7FE] flex item-center justify-center rounded-full p-4'>
            <img src={AdminIcon} alt='AdminIcon' />
          </div>
          <div className='flex flex-col gap-1.5'>
            <p className='text-[#A3AED0] font-inter'>Total Transactions</p>
            <p className='text-[#2B3674] font-medium font-barlow text-[19px]'>{`₦${formatter.format(totalAmount)}`}</p>
          </div>
        </div>

        <div className='bg-[#fff] w-[267px] h-[104px] gap-2.5 rounded-xl p-4 flex items-center'>
          <div className='bg-[#F4F7FE] flex item-center justify-center rounded-full p-4'>
            <img src={CartIcon} alt='CartIcon' />
          </div>
          <div className='flex flex-col gap-1.5'>
            <p className='text-[#A3AED0] font-inter'>Total Revenue</p>
            <p className='text-[#2B3674] font-medium font-barlow text-[19px]'>{`₦${formatter.format(totalAmount)}`}</p>
          </div>
        </div>

        <div className='bg-[#fff] w-[267px] h-[104px] gap-2.5 rounded-xl p-4 flex items-center'>
          <div className='bg-[#F4F7FE] flex item-center justify-center rounded-full p-4'>
            <img src={Receipt} alt='Receipt' />
          </div>
          <div className='flex flex-col gap-1.5'>
            <p className='text-[#A3AED0] font-inter'>Pending Transactions</p>
            <p className='text-[#2B3674] font-medium font-barlow text-[19px]'>0</p>
          </div>
        </div>

        <div className='bg-[#fff] w-[267px] h-[104px] gap-2.5 rounded-xl p-4 flex items-center'>
          <div className='bg-[#FFF8F5] flex item-center justify-center rounded-full p-4'>
            <img src={Wallet} alt='Wallet' />
          </div>
          <div className='flex flex-col gap-1.5'>
            <p className='text-[#A3AED0] font-inter'>Failed Transactions</p>
            <p className='text-[#2B3674] font-medium font-barlow text-[19px]'>0</p>
          </div>
        </div>

      </div>

      <div className='flex items-center gap-4 mt-[44px]'>
        <p 
          onClick={() => handleChangeTab("All")} 
          className={`${activeTab === "All" ? "text-[#2B3674] border-b border-2" :  "text-[#8B909A] border-0"} text-center cursor-pointer border-x-0 border-t-0 border border-[#2B3674] w-[57px] h-[38px]`}
        >
          All
        </p>
        <p 
          onClick={() => handleChangeTab("Pending")} 
          className={`${activeTab === "Pending" ? "text-[#2B3674] border-b border-2" :  "text-[#8B909A] border-0"} text-center cursor-pointer border-x-0 border-t-0 border border-[#2B3674] w-[70px] h-[38px]`}
        >
          Pending
        </p>
        <p 
          onClick={() => handleChangeTab("Successful")} 
          className={`${activeTab === "Successful" ? "text-[#2B3674] border-b border-2" :  "text-[#8B909A] border-0"} text-center cursor-pointer border-x-0 border-t-0 border border-[#2B3674] w-[78px] h-[38px]`}
        >
          Successful
        </p>
        <p 
          onClick={() => handleChangeTab("Cancelled")} 
          className={`${activeTab === "Cancelled" ? "text-[#2B3674] border-b border-2" :  "text-[#8B909A] border-0"} text-center cursor-pointer border-x-0 border-t-0 border border-[#2B3674] w-[99px] h-[38px]`}
        >
          Cancelled
        </p>
      </div>
      <hr />

      <div className='flex flex-col gap-3 mt-[22px]'>
        <div className='flex items-center justify-between'>
            <div className="w-[745px] rounded-2xl bg-[#fff] flex items-center border border-[#ccc]">
                <Listbox value={selected} onChange={setSelected}>
                    <div className="relative">
                        <Listbox.Button className="relative w-[145px] rounded-l-2xl cursor-default flex items-center gap-2 py-2 pl-3 pr-10 text-left outline-none sm:text-sm bg-[#E0E3F1]">
                            <span className="block truncate w-full font-barlow text-[#2B3674]">{selected?.name || "Select"}</span>
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
                    name="search"
                    placeholder='Search by Customer Name'
                    value={search}
                    className='bg-transparent outline-none w-[560px] ml-2'
                    onChange={(e) => setSearch(e.target.value)}
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

        {activeTab === "All" && <All loading={loading}  data={filteredTransactions} />}
        {activeTab === "Cancelled" && <Cancelled loading={loading} data={filteredTransactions} />}
        {activeTab === "Pending" && <Pending loading={loading} data={filteredTransactions} />} 
        {activeTab === "Successful" && <Successful loading={loading} data={filteredTransactions} />} 

      </div>

    </div>
  )
}

export default Transaction