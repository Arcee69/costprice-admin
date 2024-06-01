import React, { useState, Fragment, useEffect } from 'react'
import { FiHome } from 'react-icons/fi'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Listbox, Transition} from '@headlessui/react'
import { IoIosArrowDown } from 'react-icons/io';

import Upload from "../../../assets/svg/upload.svg"
import SearchSmall from "../../../assets/svg/search_small.svg"
import Active from './components/Active';
import All from './components/All';
import Disabled from './components/Disabled';
import Flagged from './components/Flagged';
import { appUrls } from '../../../services/urls';
import { api } from '../../../services/api';


const terms = [
    { name: 'Name'},
    { name: 'Category' },
  ]

const Products = () => {
    const [activeTab, setActiveTab] = useState("All")
    const [selected, setSelected] = useState(terms[0])
    const [loading, setLoading] = useState(false)
    const [allProducts, setAllProducts] = useState([])
    const [searchValue, setSearchValue] = useState("")

    const handleChangeTab = (tab) => {
        setActiveTab(tab)
    }

    const handleSearch = (e) => {
        setSearchValue(e.target.value)
    }

    const search = searchValue ? `/search/${searchValue}` : ""

    const getAllProducts = async () => {
        setLoading(true)
        await api.get(appUrls?.GET_PRODUCT_URL + search)
        .then((res) => {
            console.log(res, "asap")
            setLoading(false)
            setAllProducts(res?.data?.data?.products)
        })
        .catch((err) => {
            setLoading(false)
            console.log(err, "faro")
        })
    }

    console.log(allProducts, "allProducts")

    useEffect(() => {
        getAllProducts()
    }, [searchValue])

  return (
    <div className='py-5 px-14 flex flex-col bg-[#F4F7FE]'>
        <div className='flex items-center'>
            <FiHome className='w-5 h-5 text-[#D0D5DD]' />
            <MdOutlineKeyboardArrowRight className='w-4 h-4 text-[#D0D5DD]' />
            <div className='w-[92px] h-[28px] bg-[#F4ECEE] rounded-[6px] p-2'>
                <p className='text-[#F55425] font-inter font-medium text-xs text-center'>Product List</p>
            </div>
        </div>
        <div className='flex justify-between mt-[28px]'>
            <p className='font-barlow text-[#2B3674] text-[24px] font-semibold'>Products</p>
            <button
                className='w-auto p-2 h-[48px] bg-[#2B3674] flex items-center gap-[21px] rounded-lg'
            >
                <img src={Upload} alt='Upload' className='w-[18px] h-[15px]' />
                <p className='text-[#fff] font-barlow font-medium'>Export</p>
            </button>
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
                onClick={() => handleChangeTab("Flagged")} 
                className={`${activeTab === "Flagged" ? "text-[#2B3674] border-b border-2" :  "text-[#8B909A] border-0"} text-center cursor-pointer border-x-0 border-t-0 border border-[#2B3674] w-[78px] h-[38px]`}
            >
                Flagged
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
                    value={searchValue}
                    onChange={(e) => handleSearch(e)}
                    className='bg-transparent outline-none w-[560px] ml-2'
                />
                <img src={SearchSmall} alt='SearchSmall'/>
            </div>

            <div className='w-[187px] rounded-2xl flex justify-between items-center h-[40px] p-2 gap-2 border border-[#ccc]'>
                <p className='text-[#8B909A] font-barlow text-[15px]'>Filter by date range</p>
                <IoIosArrowDown
                    className="h-4 w-4 text-[#8B909A]"
                    aria-hidden="true"
                />
            </div>
        </div>

        {activeTab === "All" && <All loading={loading} allProducts={allProducts} />}
        {activeTab === "Active" && <Active  loading={loading}/>}
        {activeTab === "Flagged" && <Flagged loading={loading} />}
        {activeTab === "Disabled" && <Disabled loading={loading} />}

      </div>

    </div>
  )
}

export default Products