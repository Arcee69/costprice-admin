import React, { useState } from 'react'
import { FiHome } from 'react-icons/fi'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { useLocation, useNavigate } from 'react-router-dom'

import Flag from "../../../assets/svg/flag.svg"
import Circle from "../../../assets/svg/circle.svg"
import Print from "../../../assets/svg/print.svg"
import Information from './components/Information'
import Images from './components/Images'
import Pricing from './components/Pricing'
import Principal from './components/Principal'
import Merchant from './components/Merchant'
import { toast } from 'react-toastify'
import { api } from '../../../services/api'
import { appUrls } from '../../../services/urls'

const ProductDetails = () => {
    const [activeTab, setActiveTab] = useState("Information")
    const [loading, setLoading] = useState(false)

    const handleChangeTab = (value) => {
        setActiveTab(value)
    }

    const { state } = useLocation()
    console.log(state, "state")

    const navigate = useNavigate()

    const deleteProduct = async () => {
        setLoading(true)
        await api.delete(appUrls?.DELETE_PRODUCT_URL + `/${state?.id}`)
        .then((res) => {
            setLoading(false)
            console.log(res, "faro")
            toast(`${res?.data?.message}`, {
                position: "top-right",
                autoClose: 3500,
                closeOnClick: true,
            })
            navigate("/products")
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


  return (
    <div className='py-5 px-14 flex flex-col'>
        <div className='flex items-center gap-2'>
            <FiHome className='w-5 h-5 text-[#D0D5DD]' />
            <MdOutlineKeyboardArrowRight className='w-4 h-4 text-[#D0D5DD]' />
            <p className='text-[#D0D5DD] font-inter font-medium text-xs text-center' onClick={() => navigate("/products")}>Product List</p>
            <MdOutlineKeyboardArrowRight className='w-4 h-4 text-[#D0D5DD]' />
            <div className='w-[120px] h-[28px] bg-[#F4ECEE] rounded-[6px] p-2'>
                <p className='text-[#F55425] font-inter font-medium text-xs text-center'>Product Details</p>
            </div>
        </div>
        <div className='flex items-center justify-between mt-5'>
            <p className='font-barlow text-[#2B3674] text-[24px] font-semibold'>Products</p>
            <div className='flex items-center gap-2'>
                <button className='w-[150px] h-[48px] rounded-lg border border-[#F2BC00] flex items-center justify-between p-2'>
                    <img src={Flag} alt='Flag' />
                    <p className='text-[#F2BC00] font-barlow font-medium'>Flag Product</p>
                </button>
                <button onClick={() => deleteProduct()} className='w-[150px] h-[48px] rounded-lg bg-[#FF0000] flex items-center justify-between p-2'>
                    <img src={Circle} alt='Circle' />
                    <p className='text-[#FFF] font-barlow font-medium'>Delete Product</p>
                </button>
            </div>
        </div>
        <div className='mt-[7px] flex flex-col'>
            <div className='flex gap-1'>
                <p className='font-barlow text-base font-semibold text-[#071827]'>{state?.name}</p>
                <div className='bg-[#ECFDF5] w-[80px] flex items-center justify-center rounded-lg h-[24px] '>
                    <p className='text-[#10B981]'>{state?.availability}</p>
                </div>
            </div>
            <p className='text-[#5C6F7F] font-barlow text-base'>{new Date(state?.created_at).toDateString()}</p>
        </div>
        <div className='flex items-center mt-[17px] gap-1.5'>
            <img src={Print} alt='Printer'/>
            <p className='font-barlow text-[#5C6F7F]'>Print Product Information</p>
        </div>

        <div className='flex items-center gap-4 mt-[44px]'>
            <p 
                onClick={() => handleChangeTab("Information")} 
                className={`${activeTab === "Information" ? "text-[#2B3674] border-b border-2" :  "text-[#8B909A] border-0"} text-center cursor-pointer border-x-0 border-t-0 border border-[#2B3674] w-[116px] h-[38px]`}
            >
                Information
            </p>
            <p 
                onClick={() => handleChangeTab("Images")} 
                className={`${activeTab === "Images" ? "text-[#2B3674] border-b border-2" :  "text-[#8B909A] border-0"} text-center cursor-pointer border-x-0 border-t-0 border border-[#2B3674] w-[70px] h-[38px]`}
            >
                Images
            </p>
            <p 
                onClick={() => handleChangeTab("Pricing")} 
                className={`${activeTab === "Pricing" ? "text-[#2B3674] border-b border-2" :  "text-[#8B909A] border-0"} text-center cursor-pointer border-x-0 border-t-0 border border-[#2B3674] w-[78px] h-[38px]`}
            >
                Pricing
            </p>
            <p 
                onClick={() => handleChangeTab("Principal")} 
                className={`${activeTab === "Principal" ? "text-[#2B3674] border-b border-2" :  "text-[#8B909A] border-0"} text-center cursor-pointer border-x-0 border-t-0 border border-[#2B3674] w-[99px] h-[38px]`}
            >
                Principal
            </p>
            <p 
                onClick={() => handleChangeTab("Merchant")} 
                className={`${activeTab === "Merchant" ? "text-[#2B3674] border-b border-2" :  "text-[#8B909A] border-0"} text-center cursor-pointer border-x-0 border-t-0 border border-[#2B3674] w-[99px] h-[38px]`}
            >
                Merchant
            </p>
        </div>
        <hr />

        <div className='px-[20px] pt-[40px]'>
            {activeTab === "Information" && <Information state={state} /> }
            {activeTab === "Images" && <Images state={state} /> }
            {activeTab === "Pricing" && <Pricing state={state} /> }
            {activeTab === "Principal" && <Principal state={state} /> }
            {activeTab === "Merchant" && <Merchant state={state} /> }
        </div>
    </div>
  )
}

export default ProductDetails