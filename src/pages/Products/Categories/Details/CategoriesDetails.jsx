import React, { useEffect, useState } from 'react'
import { FiHome } from 'react-icons/fi'
import { FaRegEyeSlash } from "react-icons/fa";
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { api } from '../../../../services/api'
import { appUrls } from '../../../../services/urls'

import Flag from "../../../../assets/svg/flag.svg"
import Cancel from "../../../../assets/svg/cancel.svg"
import Printer from "../../../../assets/svg/print.svg"
import Check from "../../../../assets/svg/check-circle.svg"
import BigCircle from "../../../../assets/svg/big_circle.svg"
import SmallCircle from "../../../../assets/svg/small_circle.svg"

import Information from './components/Information'
import Products from './components/Products'



const CategoriesDetails = () => {
    const [activeTab, setActiveTab] = useState("Information") 
    const [loading, setLoading] = useState(false)
    const [details, setDetails] = useState([])

    const handleChangeTab = (value) => {
      setActiveTab(value)
    }

    const { state } = useLocation()
    const navigate = useNavigate()

    console.log(state, "state")

    const getCategoryDetails = async () => {
        await api.get(`/category/${state?.id}`)
        .then((res) => {
            console.log(res, "apako")
            setDetails(res?.data?.data?.category)
        })
        .catch((err) => {
            console.log(err, "err")
        })
    }

    const deleteCategory = async () => {
        setLoading(true)
        await api.delete(appUrls?.DELETE_CATEGORY_URL + `/${state?.id}`)
        .then((res) => {
            setLoading(false)
            console.log(res, "faro")
            toast(`${res?.data?.message}`, {
                position: "top-right",
                autoClose: 3500,
                closeOnClick: true,
            })
        })
        .catch((err) => {
            setLoading(false)
            console.log(err, "faro")
            toast(`${err?.data?.message}`, {
                position: "top-right",
                autoClose: 3500,
                closeOnClick: true,
            })
        })
    }

    useEffect(() => {
        getCategoryDetails()
    }, [state])

  return (
    <div className='py-5 px-14 flex flex-col'>
        <div className='flex items-center gap-2'>
            <FiHome className='w-5 h-5 text-[#D0D5DD]' />
            <MdOutlineKeyboardArrowRight className='w-4 h-4 text-[#D0D5DD]' />
            <p className='text-[#D0D5DD] font-inter cursor-pointer font-medium text-xs text-center' onClick={() => navigate("/categories")}>Categories List</p>
            <MdOutlineKeyboardArrowRight className='w-4 h-4 text-[#D0D5DD]' />
            <div className='w-[120px] h-[28px] bg-[#F4ECEE] rounded-[6px] p-2'>
                <p className='text-[#F55425] font-inter font-medium text-xs text-center'>Category Details</p>
            </div>
        </div>

        <div className='flex flex-col gap-[7px]'>
            <div className='flex items-center justify-between mt-5'>
                <p className='font-barlow text-[#2B3674] text-[24px] font-semibold'>Categories</p>
                <div className='flex items-center gap-2'>
                    <button className='w-[150px] h-[48px] rounded-lg bg-[#2B3674] flex items-center justify-between p-2'>
                        <FaRegEyeSlash className='w-5 h-5 text-[#fff]'/>
                        <p className='text-[#fff] font-barlow font-medium'>Hide Category</p>
                    </button>
                    <button onClick={() => deleteCategory()} className={` border border-[#FF0000] w-[168px] h-[48px] rounded-lg  flex items-center justify-between p-2`}>
                        <img src={Cancel} alt='Cancel' />
                        <p className='text-[#FF0000] font-barlow font-medium'>Delete Category</p>
                    </button>
                </div>
            </div>
            
            <div className='flex items-center gap-1.5'>
                <p className='font-inter text-[#071827] text-2xl'>{state?.name}</p>
                <p className='font-inter text-[#5C6F7F] text-sm'>{new Date(state?.created_at).toDateString()}</p>
            </div>

            <div className='flex items-center gap-1'>
                <img src={Printer} alt='Printer' className='w-6 h-4' />
                <p className='font-barlow text-[#5C6F7F] leading-[21px]'>Print Product Information</p>
            </div>

        </div>
     

          <div className='mt-[42px] flex flex-col'>

            <div>
              <div className='flex items-center gap-4 mt-[44px]'>
                <p 
                  onClick={() => handleChangeTab("Information")} 
                  className={`${activeTab === "Information" ? "text-[#2B3674] border-b border-2" :  "text-[#8B909A] border-0"} text-center cursor-pointer border-x-0 border-t-0 border border-[#2B3674] w-[116px] h-[38px]`}
                >
                  Information
                </p>
                <p 
                  onClick={() => handleChangeTab("Products")} 
                  className={`${activeTab === "Products" ? "text-[#2B3674] border-b border-2" :  "text-[#8B909A] border-0"} text-center cursor-pointer border-x-0 border-t-0 border border-[#2B3674] w-[70px] h-[38px]`}
                >
                  Products
                </p>
              </div>
              <hr />
            </div>

            {activeTab === "Information" && <Information details={details} />}
            {activeTab === "Products" && <Products details={details} />}
      



          </div>
     

    </div>
  )
}

export default CategoriesDetails