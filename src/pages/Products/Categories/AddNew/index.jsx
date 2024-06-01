import React, { useState } from 'react'
import { FiHome, FiPhone } from 'react-icons/fi'
import { IoIosClose } from 'react-icons/io'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { BsPlus } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineMail } from 'react-icons/hi';
import { useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

// import Upload from "../../../../assets/png/upload.png"
import Upload from "../../../../assets/svg/file_upload.svg"

const AddNewCategory = () => {
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
            <p className='text-[#D0D5DD] font-inter cursor-pointer font-medium text-xs text-center' onClick={() => navigate("/categories")}>Category List</p>
            <MdOutlineKeyboardArrowRight className='w-4 h-4 text-[#D0D5DD]' />
            <div className='w-[120px] h-[28px] bg-[#F4ECEE] rounded-[6px] p-2'>
                <p className='text-[#F55425] font-inter font-medium text-xs text-center'>New Category</p>
            </div>
        </div>
        <div className='flex items-center justify-between mt-5'>
            <p className='font-barlow text-[#2B3674] text-[24px] font-semibold'>New Category</p>
            <div className='flex items-center gap-2'>
                <button className='w-[120px] h-[48px] rounded-lg border border-[#2B3674] flex items-center justify-between p-4'>
                    <IoIosClose className='w-5 h-5 text-[#2B3674] ' />
                    <p className='text-[#2B3674] font-barlow font-medium'>Cancel</p>
                </button>
                <button onClick={() => {}} className={`w-[158px] h-[48px] rounded-lg bg-[#2B3674]  flex items-center justify-between p-4`}>
                    <BsPlus className='w-5 h-5 text-[#fff] ' />
                    <p className='text-[#FFF] font-barlow font-medium'>Save Category</p>
                </button>
            </div>
        </div>
        <div className='flex flex-col gap-6 mt-[57px]'>
            <div className='flex items-start gap-6 w-full'>
                <div className='bg-[#fff] w-8/12 h-[535px] rounded-lg gap-6 flex flex-col py-[32px] px-6'>
                    <p className='font-barlow font-medium text-[#2B3674]'>General Information</p>

                    <div className='flex flex-col mt-[8px] gap-1.5'>
                        <label htmlFor='Parent Category ' className='font-barlow font-medium text-[#475367]'>Parent Category (optional)</label>
                        <select className='w-full rounded-lg border outline-none border-[#D0D5DD] h-[48px] p-2'>
                            <option value="" defaultValue></option>
                            <option value="Office Supplies">Office Supplies</option>
                            <option value="Food & Beverages">Food & Beverages</option>
                        </select>
                    
                    </div>

                    <div className='flex flex-col gap-1.5'>
                        <label htmlFor='Name' className='font-barlow font-medium text-[#475367]'>Name</label>
                        <input 
                            name='name'
                            placeholder='Enter Category Name'
                            type='text'
                            className='w-full rounded-lg border outline-none border-[#D0D5DD] h-[48px] p-4'
                        />
                    </div>

                    <div className='flex flex-col gap-1.5'>
                        <label htmlFor='Description' className='font-barlow font-medium text-[#475367]'>Description</label>
                        <textarea
                            name='description'
                            type="text"
                            className='border border-[#D0D5DD] rounded-lg h-[169px] font-barlow w-full p-4'
                        ></textarea>
                        <p className='font-inter text-[#667185]'>Keep this simple of 50 character</p>
                    </div>

                </div>

                <div className='bg-[#fff] w-4/12  h-[535px] rounded-lg gap-[32px] flex flex-col py-[32px] px-6'>

                    <p className='font-barlow font-medium text-[#2B3674]'>Icon</p>

                    <div className='flex flex-col lg:mx-auto  bg-[#FBFEFC] rounded-xl items-center lg:w-[308px] border-dashed border-[#D0D5DD] border px-6 py-[28px]  gap-[16px]'>
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
                                                <p className='text-sm font-semibold font-inter text-[#1D2739]'>
                                                    PNG, JPG or GIF (max. 800x400px)
                                                </p>
                                                <p className='text-xs text-center font-inter font-medium text-[#98A2B3]'>Name of document</p>
                                            </div>
                                            <label htmlFor="fileInput" className='cursor-pointer px-[22px] flex justify-center items-center h-[39px] rounded-[5px]  text-[#FFF] text-sm font-inter font-semibold'>
                                                
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

            <div className='bg-[#fff] w-full h-[535px] rounded-lg gap-6 flex flex-col py-[32px] px-6'>
                <p className='font-barlow font-medium text-[#2B3674]'>More Information (optional)</p>
                
                <div className='flex flex-col gap-1.5'>
                    <label htmlFor='Title' className='font-barlow font-medium text-[#475367]'>Title</label>
                    <input 
                        name='title'
                        placeholder='Enter Title'
                        type='text'
                        className='w-full rounded-lg border outline-none border-[#D0D5DD] h-[48px] p-4'
                    />
                </div>

                <div className='flex flex-col gap-1.5'>
                    <label htmlFor='Keywords' className='font-barlow font-medium text-[#475367]'>Keywords</label>
                    <input 
                        name='keywords'
                        placeholder='Enter Keywords'
                        type='text'
                        className='w-full rounded-lg border outline-none border-[#D0D5DD] h-[48px] p-4'
                    />
                </div>

                <div className='flex flex-col gap-1.5'>
                    <label htmlFor='Description' className='font-barlow font-medium text-[#475367]'>Description</label>
                    <textarea
                        name='description'
                        type="text"
                        className='border border-[#D0D5DD] rounded-lg h-[169px] font-barlow w-full p-4'
                    ></textarea>
                    <p className='font-inter text-[#667185]'>Keep this simple of 50 character</p>
                </div>

            </div>

        </div>
    </div>
  )
}

export default AddNewCategory