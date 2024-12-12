import React, { useEffect, useState, Fragment } from 'react'
import { FiHome, FiUploadCloud } from 'react-icons/fi'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { HiOutlinePlusSm } from "react-icons/hi";
import { Listbox, Transition } from '@headlessui/react';
import { IoIosArrowDown } from 'react-icons/io';
import * as XLSX from "xlsx"

import { api } from '../../services/api';
import { appUrls } from '../../services/urls';

import AdminIcon from "../../assets/svg/admin.svg"
import CartIcon from "../../assets/svg/cart_green.svg"
import SearchSmall from "../../assets/svg/search_small.svg"

import All from './components/All';
import Active from './components/Active';
import Inactive from './components/Inactive';
import Disabled from './components/Disabled';


const terms = [
  { name: ''},
  { name: 'Active'},
  { name: 'Inactive' },
]

const Roles = () => {
  const [loading, setLoading] = useState(false)
  const [activeTab, setActiveTab] = useState("All")
  const [allAdmins, setAllAdmins] = useState([])
  const [selected, setSelected] = useState(terms[0])
  const [search, setSearch] = useState("")

  const allRoles = [
    {
      id: '#0007366388',
      name: "Super Admin",
      description: "Has all permission",
      dateCreated: "02/02/23",
      status: 'Inactive'
    },
    {
      id: '#0007366388',
      name: "User Admin",
      description: "Has all permissions for users Only",
      dateCreated: "02/02/23",
      status: 'Active'
    },
    {
      id: '#0007366388',
      name: "Product Admin",
      description: "Has all permissions for Product Only",
      dateCreated: "02/02/23",
      status: 'Active'
    },
    {
      id: '#0007366388',
      name: "Order Admin",
      description: "Has all permissions for Orders Only",
      dateCreated: "02/02/23",
      status: 'Active'
    },
    {
      id: '#0007366388',
      name: "Merchant Admin",
      description: "Has all permissions for Merchant Only",
      dateCreated: "02/02/23",
      status: 'Active'
    },
    {
      id: '#0007366388',
      name: "Principal Admin",
      description: "Has all permissions for Principals Only",
      dateCreated: "02/02/23",
      status: 'Active'
    },
  ]

  const handleChangeTab = (value) => {
    setActiveTab(value)
  }

  const filteredRoles = allRoles?.filter((item) => {
    const matchesSearch = 
    item.name.toLowerCase().includes(search.toLowerCase() || "")
    
    const matchesStatus = 
        selected.name === "" || 
        item.status === selected.name;
    
    return matchesSearch && matchesStatus ;
  })

  const exportExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(allRoles); 
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Roles');
    XLSX.writeFile(workbook, `roles_${Date.now()}.xlsx`);
  };

  return (
     <div className='py-5 px-14 flex flex-col bg-[#F4F7FE]'>
      <div className='flex items-center'>
        <FiHome className='w-5 h-5 text-[#D0D5DD]' />
        <MdOutlineKeyboardArrowRight className='w-4 h-4 text-[#D0D5DD]' />
        <div className='w-[92px] h-[28px] bg-[#F4ECEE] rounded-[6px] p-2'>
          <p className='text-[#F55425] font-inter font-medium text-xs text-center'>Role List</p>
        </div>
      </div>
      <div className='flex justify-between mt-[28px]'>
        <p className='font-barlow text-[#2B3674] text-[24px] font-semibold'>Role</p>

        <div className='flex gap-4 items-center'>
          <button
            className='w-[120px] p-2 h-[48px] border border-[#2B3674] flex items-center gap-[21px] rounded-lg'
            onClick={exportExcel}
          >
            <FiUploadCloud className='w-[18px] h-[15px] text-[#2B3674]' />
            <p className='text-[#2B3674] font-barlow font-medium'>Export</p>
          </button>
          <button
            className='w-[172px] p-2 h-[48px] bg-[#2B3674] flex items-center gap-[21px] rounded-lg'
          >
            <HiOutlinePlusSm  className='w-[18px] h-[15px] text-[#fff]' />
            <p className='text-[#fff] font-barlow font-medium'>Add New Role</p>
          </button>
        </div>
      </div>

      <div className='flex gap-3 mt-5 items-center'>

        <div className='bg-[#fff] w-[545px] h-[104px] gap-2.5 rounded-xl p-4 flex items-center'>
          <div className='bg-[#F4F7FE] flex item-center justify-center rounded-full p-4'>
            <img src={AdminIcon} alt='AdminIcon' />
          </div>
          <div className='flex flex-col gap-1.5'>
            <p className='text-[#A3AED0] font-inter'>Total Roles</p>
            <p className='text-[#2B3674] font-medium font-barlow text-[19px]'>{allAdmins?.length}</p>
          </div>
        </div>

        <div className='bg-[#fff] w-[545px] h-[104px] gap-2.5 rounded-xl p-4 flex items-center'>
          <div className='bg-[#F4F7FE] flex item-center justify-center rounded-full p-4'>
            <img src={CartIcon} alt='CartIcon' />
          </div>
          <div className='flex flex-col gap-1.5'>
            <p className='text-[#A3AED0] font-inter'>Active Roles</p>
            <p className='text-[#2B3674] font-medium font-barlow text-[19px]'>{allAdmins?.length}</p>
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
          onClick={() => handleChangeTab("Active")} 
          className={`${activeTab === "Active" ? "text-[#2B3674] border-b border-2" :  "text-[#8B909A] border-0"} text-center cursor-pointer border-x-0 border-t-0 border border-[#2B3674] w-[70px] h-[38px]`}
        >
          Active
        </p>
        <p 
          onClick={() => handleChangeTab("Inactive")} 
          className={`${activeTab === "Inactive" ? "text-[#2B3674] border-b border-2" :  "text-[#8B909A] border-0"} text-center cursor-pointer border-x-0 border-t-0 border border-[#2B3674] w-[78px] h-[38px]`}
        >
          Inactive
        </p>
        <p 
          onClick={() => handleChangeTab("Disabled")} 
          className={`${activeTab === "Disabled" ? "text-[#2B3674] border-b border-2" :  "text-[#8B909A] border-0"} text-center cursor-pointer border-x-0 border-t-0 border border-[#2B3674] w-[99px] h-[38px]`}
        >
          Disabled
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
                    placeholder='Search by Name'
                    className='bg-transparent outline-none w-[560px] ml-2'
                    value={search}
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

        {activeTab === "All" && <All loading={loading} allRoles={filteredRoles} />}
        {activeTab === "Active" && <Active loading={loading} />}
        {activeTab === "Inactive" && <Inactive loading={loading} />}
        {activeTab === "Disabled" && <Disabled loading={loading} />}

      </div>

    </div>
  )
}

export default Roles