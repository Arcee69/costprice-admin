import React, { useState } from 'react'
import { FiHome, FiPhone } from 'react-icons/fi'
import { IoIosClose } from 'react-icons/io'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { BsPlus } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineMail } from 'react-icons/hi';
import { useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import Upload from "../../../../assets/png/upload.png"

const AddNewPrincipal = () => {
    const [userImage, setUserImage] = useState(null)

    const navigate = useNavigate()
    
    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        setUserImage(selectedFile)
    };

  return (
    <div className='py-5 px-14 flex flex-col bg-[#F4F7FE]'>
        <div className='flex items-center gap-2'>
            <FiHome className='w-5 h-5 text-[#D0D5DD]' />
            <MdOutlineKeyboardArrowRight className='w-4 h-4 text-[#D0D5DD]' />
            <p className='text-[#D0D5DD] font-inter cursor-pointer font-medium text-xs text-center' onClick={() => navigate("/principals")}>Principal List</p>
            <MdOutlineKeyboardArrowRight className='w-4 h-4 text-[#D0D5DD]' />
            <div className='w-[120px] h-[28px] bg-[#F4ECEE] rounded-[6px] p-2'>
                <p className='text-[#F55425] font-inter font-medium text-xs text-center'>New Principal</p>
            </div>
        </div>
        <div className='flex items-center justify-between mt-5'>
            <p className='font-barlow text-[#2B3674] text-[24px] font-semibold'>New Principal</p>
            <div className='flex items-center gap-2'>
                <button className='w-[120px] h-[48px] rounded-lg border border-[#2B3674] flex items-center justify-between p-4'>
                    <IoIosClose className='w-5 h-5 text-[#2B3674] ' />
                    <p className='text-[#2B3674] font-barlow font-medium'>Cancel</p>
                </button>
                <button onClick={() => {}} className={`w-[158px] h-[48px] rounded-lg bg-[#2B3674]  flex items-center justify-between p-4`}>
                    <BsPlus className='w-5 h-5 text-[#fff] ' />
                    <p className='text-[#FFF] font-barlow font-medium'>Save Principal</p>
                </button>
            </div>
        </div>
        <div className='flex items-start gap-6 mt-[57px]'>
            <div className='bg-[#fff] w-[626px] rounded-lg gap-6 flex flex-col py-[32px] px-6'>
                <p className='font-barlow font-medium text-[#2B3674]'>Company Information</p>

                <div className='flex flex-col mt-[8px] gap-1.5'>
                    <label htmlFor='Company Name' className='font-barlow font-medium text-[#475367]'>Company Name</label>
                    <input 
                        name='companyName'
                        placeholder='Enter Company Name'
                        type='text'
                        className='w-full rounded-lg border outline-none border-[#D0D5DD] h-[48px] p-4'
                    />
                </div>

                <div className='flex flex-col gap-1.5'>
                    <label htmlFor='Contact Person' className='font-barlow font-medium text-[#475367]'>Contact Person</label>
                    <input 
                        name='companyName'
                        placeholder='Enter Company Name'
                        type='text'
                        className='w-full rounded-lg border outline-none border-[#D0D5DD] h-[48px] p-4'
                    />
                </div>

                <div className='flex items-center gap-6'>
                    <div className='flex flex-col gap-1.5'>
                        <label htmlFor='Email' className='font-barlow font-medium text-[#475367]'>Email</label>
                        <div className='w-full flex items-center rounded-lg border border-[#D0D5DD] h-[48px] p-4'>
                            <input 
                                name='email'
                                placeholder='Enter Email'
                                type='email'
                                className='outline-none'
                            />
                            <HiOutlineMail className='w-5 h-5 text-[#667185]' />
                        </div>
                    </div>

                    <div className='flex flex-col gap-1.5'>
                        <label htmlFor='Phone Number' className='font-barlow font-medium text-[#475367]'>Phone Number</label>
                        <div  className='w-full flex items-center rounded-lg border border-[#D0D5DD] h-[48px] p-4'>
                            <input 
                                name='PhoneNumber'
                                placeholder='+234 000 000'
                                type='number'
                                className='outline-none'
                            />
                            <FiPhone className='w-5 h-5 text-[#667185]' />
                        </div>
                    </div>

                </div>

                <div className='flex flex-col gap-1.5'>
                    <label htmlFor='Address' className='font-barlow font-medium text-[#475367]'>Address</label>
                    <div  className='w-full flex items-center justify-between rounded-lg border border-[#D0D5DD] h-[48px] p-4'>
                        <input 
                            name='address'
                            placeholder='Enter Address'
                            type='text'
                            className='outline-none'
                        />
                        <IoLocationOutline className='w-5 h-5 text-[#667185]' />
                    </div>
                </div>

                <div className='flex flex-col gap-1.5'>
                    <label htmlFor='State' className='font-barlow font-medium text-[#475367]'>State</label>
                    <div  className='w-full flex items-center justify-between rounded-lg border border-[#D0D5DD] h-[48px] p-4'>
                        <input 
                            name='state'
                            placeholder='Enter State'
                            type='text'
                            className='outline-none'
                        />
                        <IoLocationOutline className='w-5 h-5 text-[#667185]' />
                    </div>
                </div>

            </div>
            <div className='bg-[#fff] w-[360px] rounded-lg gap-[32px] flex flex-col py-[32px] px-6'>

                <p className='font-barlow font-medium text-[#2B3674]'>Logo</p>

                <div className='flex flex-col lg:mx-auto  bg-transparent rounded-xl items-center lg:w-[312px] border-dashed border-[#D0D5DD] border px-6 py-[28px]  gap-[16px]'>
                        <div className='p-[9px] w-[300px] cursor-pointer flex justify-center gap-[16px] '>
                            {  
                                userImage?.name ? 
                                    <div className='flex flex-col gap-1'>
                                        <div className='flex items-center justify-between'>
                                            <p className='text-[15px] font-hanken text-[#858585]'>{userImage?.name}</p>
                                            <p className='text-[#000] text-[11px]'>Completed</p>
                                        </div>
                                        <div className='w-[266px] h-[5px] bg-[#51E38B] rounded-lg'></div>
                                    </div> 
                                    :
                                    <div className='flex flex-col items-center gap-[16px]'>
                                        <img src={Upload} alt='upload' className='w-[56px] h-[56px' />
                                        <div className='flex flex-col'>
                                            <p className='text-sm font-semibold font-inter text-[#EB5757]'>
                                                Click to upload passport <span className='text-[#475367]'>or drag and drop</span>
                                            </p>
                                            <p className='text-xs text-center font-medium text-[#98A2B3]'>SVG, PNG, JPG or GIF (max. 800x300px)</p>
                                        </div>
                                        <div className='flex gap-1.5 items-center'>
                                            <div className='bg-[#F0F2F5] w-[100px] h-[1px]'></div> 
                                            <p className='text-xs font-inter font-semibold text-[#98A2B3]'>OR</p>
                                            <div className='bg-[#F0F2F5] w-[100px] h-[1px]'></div> 
                                        </div>
                                        <label htmlFor="fileInput" className='cursor-pointer px-[22px] flex justify-center items-center h-[39px] rounded-[5px] bg-[#EB5757] text-[#FFF] text-sm font-inter font-semibold'>
                                            Browse Photo
                                            <input
                                                type="file"
                                                id="fileInput"
                                                style={{ display: 'none' }}
                                                onChange={handleFileChange}
                                            />
                                        </label>
                                    </div>
                            }
                            
                        </div>
                </div>

            </div>

        </div>
    </div>
  )
}

export default AddNewPrincipal