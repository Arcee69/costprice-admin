import React, { useState } from 'react'
import { FiHome } from 'react-icons/fi'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { api } from '../../../../services/api'
import { appUrls } from '../../../../services/urls'

import Flag from "../../../../assets/svg/flag.svg"
import Circle from "../../../../assets/svg/circle.svg"
import Check from "../../../../assets/svg/check-circle.svg"
import BigCircle from "../../../../assets/svg/big_circle.svg"
import SmallCircle from "../../../../assets/svg/small_circle.svg"

import Avatar from "../../../../assets/png/avatar.png"
import Information from './components/Information'
import { CgSpinner } from 'react-icons/cg'


const PrincipalDetails = () => {
    const [activeTab, setActiveTab] = useState("Information") 
    const [loading, setLoading] = useState(false)

    const handleChangeTab = (value) => {
      setActiveTab(value)
    }

    const { state } = useLocation()
    const navigate = useNavigate()

    console.log(state, "state")

    const enableDisableUser = async () => {
        setLoading(true)
        const data = {
            active: state?.active === "1" ? false : true,
            user_id: state?.id

        }
        await api.post(appUrls?.ENABLE_DISABLE_USER, data)
        .then((res) => {
            setLoading(false)
            console.log(res, "faro")
            toast(`${res?.data?.message}`, {
                position: "top-right",
                autoClose: 3500,
                closeOnClick: true,
            })
            navigate("/principals")
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
            <p className='text-[#D0D5DD] font-inter cursor-pointer font-medium text-xs text-center' onClick={() => navigate("/principals")}>Principal List</p>
            <MdOutlineKeyboardArrowRight className='w-4 h-4 text-[#D0D5DD]' />
            <div className='w-[120px] h-[28px] bg-[#F4ECEE] rounded-[6px] p-2'>
                <p className='text-[#F55425] font-inter font-medium text-xs text-center'>Principal Details</p>
            </div>
        </div>
        <div className='flex items-center justify-between mt-5'>
            <p className='font-barlow text-[#2B3674] text-[24px] font-semibold'>Principal</p>
            <div className='flex items-center gap-2'>
                <button className='w-[150px] h-[48px] rounded-lg border border-[#F2BC00] flex items-center justify-between p-2'>
                    <img src={Flag} alt='Flag' />
                    <p className='text-[#F2BC00] font-barlow font-medium'>Flag Principal</p>
                </button>
                <button onClick={() => enableDisableUser()} className={`${state?.active === "1" ? "bg-[#FF0000]" : "bg-[#0F973D]"} w-[158px] h-[48px] rounded-lg  flex items-center justify-center p-2`}>
                  {
                    loading ?
                    <CgSpinner className='animate-spin text-[#fff] text-lg'/>
                    :
                    <div className='flex items-center gap-1.5 justify-between'>
                      <img src={state?.active === "1" ? Circle : Check} alt='Circle' />
                      <p className='text-[#FFF] font-barlow font-medium'>{state?.active === "1" ? "Disable Principal" : "Verify Principal" }</p>
                    </div>
                  }
                </button>
            </div>
        </div>
        <div className='flex flex-col mt-[64px] relative'>
          <div className='w-full bg-[#2B3674] relative rounded-tl-xl rounded-tr-xl h-[140px] flex justify-end'>
            <img src={SmallCircle} alt='SmallCircle' className='mt-6 relative left-14'/>
            <img src={BigCircle} alt='BigCircle' className='mt-4 relative right-14'/>
          </div>
          <img src={Avatar} alt='Avatar' className='w-[150px] h-[150px] absolute top-14 left-8'/>

          <div className='mt-[104px] flex flex-col ml-14 '>
            <div className='flex gap-4'>
              <p className='font-bold text-[#303972] text-[32px]'>{state?.name}</p>
              <div className='flex items-center p-1 h-[24px] w-[62px] justify-center bg-[#ECFDF5] rounded-xl'>
                <p className='text-[#10B981] font-inter font-medium'>{state?.active === "1" ? "Active" : "Inactive"}</p>
              </div>
            </div>

            <div>
              <div className='flex items-center gap-4 mt-[44px]'>
                <p 
                  onClick={() => handleChangeTab("Information")} 
                  className={`${activeTab === "Information" ? "text-[#2B3674] border-b border-2" :  "text-[#8B909A] border-0"} text-center cursor-pointer border-x-0 border-t-0 border border-[#2B3674] w-[116px] h-[38px]`}
                >
                  Information
                </p>
                <p 
                  onClick={() => handleChangeTab("Kyc")} 
                  className={`${activeTab === "Kyc" ? "text-[#2B3674] border-b border-2" :  "text-[#8B909A] border-0"} text-center cursor-pointer border-x-0 border-t-0 border border-[#2B3674] w-[70px] h-[38px]`}
                >
                  Kyc
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

            {activeTab === "Information" && <Information state={state} />}



          </div>
        </div>

    </div>
  )
}

export default PrincipalDetails