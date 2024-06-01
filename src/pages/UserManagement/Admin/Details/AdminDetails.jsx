import React, { useState } from 'react'
import { FiHome } from 'react-icons/fi'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { useLocation, useNavigate } from 'react-router-dom'

import Flag from "../../../../assets/svg/flag.svg"
import Circle from "../../../../assets/svg/circle.svg"

import BigCircle from "../../../../assets/svg/big_circle.svg"
import SmallCircle from "../../../../assets/svg/small_circle.svg"

import Avatar from "../../../../assets/png/avatar.png"

const AdminDetails = () => {
    const [activeTab, setActiveTab] = useState("Information") 

    const handleChangeTab = (value) => {
      setActiveTab(value)
    }

    const { state } = useLocation()
    const navigate = useNavigate()

    console.log(state, "state")

  return (
    <div className='py-5 px-14 flex flex-col'>
        <div className='flex items-center gap-2'>
            <FiHome className='w-5 h-5 text-[#D0D5DD]' />
            <MdOutlineKeyboardArrowRight className='w-4 h-4 text-[#D0D5DD]' />
            <p className='text-[#D0D5DD] font-inter cursor-pointer font-medium text-xs text-center' onClick={() => navigate("/admin")}>Admin List</p>
            <MdOutlineKeyboardArrowRight className='w-4 h-4 text-[#D0D5DD]' />
            <div className='w-[120px] h-[28px] bg-[#F4ECEE] rounded-[6px] p-2'>
                <p className='text-[#F55425] font-inter font-medium text-xs text-center'>Admin Details</p>
            </div>
        </div>
        <div className='flex items-center justify-between mt-5'>
            <p className='font-barlow text-[#2B3674] text-[24px] font-semibold'>Admin</p>
            <div className='flex items-center gap-2'>
                <button className='w-[150px] h-[48px] rounded-lg border border-[#F2BC00] flex items-center justify-between p-2'>
                    <img src={Flag} alt='Flag' />
                    <p className='text-[#F2BC00] font-barlow font-medium'>Flag Admin</p>
                </button>
                <button className='w-[150px] h-[48px] rounded-lg bg-[#FF0000] flex items-center justify-between p-2'>
                    <img src={Circle} alt='Circle' />
                    <p className='text-[#FFF] font-barlow font-medium'>Disable Admin</p>
                </button>
            </div>
        </div>
        <div className='flex flex-col mt-[64px] relative'>
          <div className='w-full bg-[#2B3674] relative rounded-tl-xl rounded-tr-xl h-[140px] flex justify-end'>
            <img src={SmallCircle} alt='SmallCircle' className='mt-6 relative left-14'/>
            <img src={BigCircle} alt='BigCircle' className='mt-4 relative right-14'/>
          </div>
          <img src={Avatar} alt='Avatar' className='w-[150px] h-[150px] absolute top-14 left-8'/>

          <div className='mt-[104px] flex flex-col ml-14 gap-[35px]'>
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
                  onClick={() => handleChangeTab("Role")} 
                  className={`${activeTab === "Role" ? "text-[#2B3674] border-b border-2" :  "text-[#8B909A] border-0"} text-center cursor-pointer border-x-0 border-t-0 border border-[#2B3674] w-[70px] h-[38px]`}
                >
                  Role
                </p>
              </div>
              <hr />
            </div>

            <div className='flex flex-col gap-2'>
              <p className='text-[#2B3674] font-bold font-barlow text-[24px]'>Basic Details</p>
              <div className='flex flex-wrap gap-20'>
                <div className='flex flex-col'>
                  <p>ID</p>
                  <p>{`#${state?.id?.substring(0, 8)}`}</p>
                </div>
                <div className='flex flex-col'>
                  <p>Name</p>
                  <p>{state?.name}</p>
                </div>
                <div className='flex flex-col'>
                  <p>Role</p>
                  <p>{"N/A"}</p>
                </div>
                <div className='flex flex-col'>
                  <p>Email Address</p>
                  <p>{state?.email}</p>
                </div>
                <div className='flex flex-col'>
                  <p>Phone Number</p>
                  <p>{state?.phone_number || "N/A"}</p>
                </div>
                <div className='flex flex-col'>
                  <p>Location</p>
                  <p>{state?.region || "N/A"}</p>
                </div>
                <div className='flex flex-col'>
                  <p>Date Created</p>
                  <p>{"N/A"}</p>
                </div>

              </div>
            </div>



          </div>
        </div>

    </div>
  )
}

export default AdminDetails