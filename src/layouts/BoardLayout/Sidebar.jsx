import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { RiHome5Line } from "react-icons/ri";
import { BiChart } from "react-icons/bi";
import { IoIosArrowDown } from 'react-icons/io';
import { FiSettings } from "react-icons/fi";


import Logo from "../../assets/png/logo_white.png"


const Sidebar = () => {
  const [openUserManagement, setOpenUserManagement] = useState(false)
  const [openProducts, setOpenProducts] = useState(false)
  const [openFinancials, setOpenFinancials] = useState(false)

  const navigate = useNavigate()

  const location = useLocation()

  const handleToggleUserManagement = () => {
    setOpenUserManagement(prev => !prev)
  }

  const handleToggleProducts = () => {
    setOpenProducts(prev => !prev)
  }

  const handleToggleFinancials = () => {
    setOpenFinancials(prev => !prev)
  }

  return (
    <div className='w-[270px] flex flex-col gap-[38px] py-[11px]'>
        <img src={Logo} alt='logo' className='w-[128px] h-[32px] mx-[27px] mt-2'/>

        <div className='flex flex-col items-center gap-3'>
            <div onClick={() => {navigate("/dashboard"), window.scrollTo(0, 0)}} className={`${location?.pathname === "/dashboard"  ? "bg-[#F4F6FB]" : ""} w-[222px] h-[48px]  gap-2 flex items-center group cursor-pointer rounded-l-3xl transition-all duration-300 p-[16px] hover:bg-[#F4F6FB]`}>
                <RiHome5Line className={`${location.pathname === "/dashboard" ? "text-[#2B3674]" : "text-[#fff]"} w-5 h-5  group-hover:text-[#50724D] `}/>
                <p className={`${location.pathname === "/dashboard" ? "text-[#2B3674]" : "text-[#fff]"}  group-hover:text-[#50724D] font-barlow `}>Dashboard</p>
            </div>
            <div onClick={() => handleToggleUserManagement()} className={`${location?.pathname === "/admin" || location.pathname === "/principals" || location.pathname === "/merchants" || location.pathname === "/shoppers"  ? "bg-[#F4F6FB]" : ""} w-[222px] h-[48px]  gap-2 flex justify-between items-center group cursor-pointer rounded-l-3xl transition-all duration-300 p-[16px] hover:bg-[#F4F6FB]`}>
              <div className='flex items-center gap-1.5'>
                <BiChart className={`${location.pathname === "/admin" || location.pathname === "/principals" || location.pathname === "/merchants" || location.pathname === "/shoppers" ? "text-[#2B3674]" : "text-[#fff]"} w-5 h-5  group-hover:text-[#50724D] `}/>
                <p className={`${location.pathname === "/admin" || location.pathname === "/principals" || location.pathname === "/merchants" || location.pathname === "/shoppers" ? "text-[#2B3674]" : "text-[#fff]"}   group-hover:text-[#50724D] font-barlow `}>User Management</p>
              </div>
                <IoIosArrowDown className={`${location.pathname === "/admin" || location.pathname === "/principals" || location.pathname === "/merchants" || location.pathname === "/shoppers" ? "text-[#2B3674]" : "text-[#fff]"}`} />
            </div>
            {
              openUserManagement && (
                <div className='flex flex-col gap-4  w-[222px] mx-auto'>
                  <div className={`${location.pathname === "/admin" ? "bg-[#FFFFFF2B]" : ""} w-[184px] mx-auto h-[48px] px-8  gap-2 flex items-center group cursor-pointer rounded-l-3xl transition-all duration-300 p-2 hover:bg-[#FFFFFF2B]`}>
                    <p className="text-[#fff] font-medium font-barlow" onClick={() => {navigate("/admin")}}>Admin</p>
                  </div>
                  <div className={`${location.pathname === "/principal" ? "bg-[#FFFFFF2B]" : ""} w-[184px] mx-auto h-[48px] px-8 gap-2 flex items-center group cursor-pointer rounded-l-3xl transition-all duration-300 p-2 hover:bg-[#FFFFFF2B]`}>
                    <p className="text-[#fff] font-medium font-barlow" onClick={() => {navigate("/principals")}}>Principals</p>
                  </div>
                  <div className={`${location.pathname === "/merchants" ? "bg-[#FFFFFF2B]" : ""} w-[184px] mx-auto h-[48px] px-8 gap-2 flex items-center group cursor-pointer rounded-l-3xl transition-all duration-300 p-2 hover:bg-[#FFFFFF2B]`}>
                    <p className="text-[#fff] font-medium font-barlow" onClick={() => {navigate("/merchants")}}>Merchants</p>
                  </div>
                  <div className={`${location.pathname === "/shoppers" ? "bg-[#FFFFFF2B]" : ""} w-[184px] mx-auto h-[48px] px-8 gap-2 flex items-center group cursor-pointer rounded-l-3xl transition-all duration-300 p-2 hover:bg-[#FFFFFF2B]`}>
                    <p className="text-[#fff] font-medium font-barlow" onClick={() => {navigate("/shoppers")}}>Shoppers</p>
                  </div>
                </div>
               
              )
            }
            <div onClick={() => {navigate("/roles"), window.scrollTo(0, 0)}} className={`${location?.pathname === "/roles"  ? "bg-[#F4F6FB]" : ""} w-[222px] h-[48px]  gap-2 flex items-center group cursor-pointer rounded-l-3xl transition-all duration-300 p-[16px] hover:bg-[#F4F6FB]`}>
                <BiChart className={`${location.pathname === "/roles" ? "text-[#2B3674]" : "text-[#fff]"} w-5 h-5  group-hover:text-[#50724D] `}/>
                <p className={`${location.pathname === "/roles" ? "text-[#2B3674]" : "text-[#fff]"}  group-hover:text-[#50724D] font-mont text-semibold `}>Roles</p>
            </div>
            <div onClick={() => handleToggleProducts()} className={`${location?.pathname === "/products" || location.pathname === "/categories" ? "bg-[#F4F6FB]" : ""} w-[222px] h-[48px]  gap-2 flex justify-between items-center group cursor-pointer rounded-l-3xl transition-all duration-300 p-[16px] hover:bg-[#F4F6FB]`}>
              <div className='flex items-center gap-1.5'>
                <BiChart className={`${location.pathname === "/products" || location.pathname === "/categories" ? "text-[#2B3674]" : "text-[#fff]"} w-5 h-5  group-hover:text-[#50724D] `}/>
                <p className={`${location.pathname === "/products" || location.pathname === "/categories" ? "text-[#2B3674]" : "text-[#fff]"}   group-hover:text-[#50724D] font-barlow `}>Products</p>
              </div>
                <IoIosArrowDown className={`${location.pathname === "/products" || location.pathname === "/categories" ? "text-[#2B3674]" : "text-[#fff]"}`} />
            </div>
            {
              openProducts && (
                <div className='flex flex-col gap-4  w-[222px] mx-auto'>
                  <div className={`${location.pathname === "/products" ? "bg-[#FFFFFF2B]" : ""} w-[184px] mx-auto h-[48px] px-8  gap-2 flex items-center group cursor-pointer rounded-l-3xl transition-all duration-300 p-2 hover:bg-[#FFFFFF2B]`}>
                    <p className="text-[#fff] font-medium font-barlow" onClick={() => {navigate("/products")}}>Products</p>
                  </div>
                  <div className={`${location.pathname === "/categories" ? "bg-[#FFFFFF2B]" : ""} w-[184px] mx-auto h-[48px] px-8 gap-2 flex items-center group cursor-pointer rounded-l-3xl transition-all duration-300 p-2 hover:bg-[#FFFFFF2B]`}>
                    <p className="text-[#fff] font-medium font-barlow" onClick={() => {navigate("/categories")}}>Categories</p>
                  </div>
                </div>
               
              )
            }
            <div onClick={() => {navigate("/orders"), window.scrollTo(0, 0)}} className={`${location?.pathname === "/orders"  ? "bg-[#F4F6FB]" : ""} w-[222px] h-[48px]  gap-2 flex items-center group cursor-pointer rounded-l-3xl transition-all duration-300 p-[16px] hover:bg-[#F4F6FB]`}>
              <BiChart className={`${location.pathname === "/orders" ? "text-[#2B3674]" : "text-[#fff]"} w-5 h-5  group-hover:text-[#50724D] `}/>
              <p className={`${location.pathname === "/orders" ? "text-[#2B3674]" : "text-[#fff]"}  group-hover:text-[#50724D] font-mont text-semibold `}>Orders</p>
            </div>
            {/* <div onClick={() => {navigate("/financials"), window.scrollTo(0, 0)}} className={`${location?.pathname === "/financials"  ? "bg-[#F4F6FB]" : ""} w-[222px] h-[48px]  gap-2 flex items-center group cursor-pointer rounded-l-3xl transition-all duration-300 p-[16px] hover:bg-[#F4F6FB]`}>
              <BiChart className={`${location.pathname === "/financials" ? "text-[#2B3674]" : "text-[#fff]"} w-5 h-5  group-hover:text-[#50724D] `}/>
              <p className={`${location.pathname === "/financials" ? "text-[#2B3674]" : "text-[#fff]"}  group-hover:text-[#50724D] font-mont text-semibold `}>Financials</p>
            </div> */}
            <div onClick={() => handleToggleFinancials()} className={`${location?.pathname === "/transactions" || location.pathname === "/refunds" || location.pathname === "/subscription" ? "bg-[#F4F6FB]" : ""} w-[222px] h-[48px]  gap-2 flex justify-between items-center group cursor-pointer rounded-l-3xl transition-all duration-300 p-[16px] hover:bg-[#F4F6FB]`}>
              <div className='flex items-center gap-1.5'>
                <BiChart className={`${location.pathname === "/transactions" || location.pathname === "/refunds" || location.pathname === "/subscription" ? "text-[#2B3674]" : "text-[#fff]"} w-5 h-5  group-hover:text-[#50724D] `}/>
                <p className={`${location.pathname === "/transactions" || location.pathname === "/refunds" || location.pathname === "/subscription"  ? "text-[#2B3674]" : "text-[#fff]"}   group-hover:text-[#50724D] font-barlow `}>Financials</p>
              </div>
                <IoIosArrowDown className={`${location.pathname === "/transactions" || location.pathname === "/refunds" || location.pathname === "/subscription" ? "text-[#2B3674]" : "text-[#fff]"}`} />
            </div>
            {
              openFinancials && (
                <div className='flex flex-col gap-4  w-[222px] mx-auto'>
                  <div className={`${location.pathname === "/transactions" ? "bg-[#FFFFFF2B]" : ""} w-[184px] mx-auto h-[48px] px-8  gap-2 flex items-center group cursor-pointer rounded-l-3xl transition-all duration-300 p-2 hover:bg-[#FFFFFF2B]`}>
                    <p className="text-[#fff] font-medium font-barlow" onClick={() => {navigate("/transactions")}}>Transactions</p>
                  </div>
                  <div className={`${location.pathname === "/subscription" ? "bg-[#FFFFFF2B]" : ""} w-[184px] mx-auto h-[48px] px-8 gap-2 flex items-center group cursor-pointer rounded-l-3xl transition-all duration-300 p-2 hover:bg-[#FFFFFF2B]`}>
                    <p className="text-[#fff] font-medium font-barlow" onClick={() => {navigate("/subscription")}}>Subscription</p>
                  </div>
                  <div className={`${location.pathname === "/refunds" ? "bg-[#FFFFFF2B]" : ""} w-[184px] mx-auto h-[48px] px-8 gap-2 flex items-center group cursor-pointer rounded-l-3xl transition-all duration-300 p-2 hover:bg-[#FFFFFF2B]`}>
                    <p className="text-[#fff] font-medium font-barlow" onClick={() => {navigate("/refunds")}}>Refunds</p>
                  </div>
                </div>
               
              )
            }

            {/* <div onClick={() => {navigate("/refund"), window.scrollTo(0, 0)}} className={`${location?.pathname === "/refund"  ? "bg-[#F4F6FB]" : ""} w-[222px] h-[48px]  gap-2 flex items-center group cursor-pointer rounded-l-3xl transition-all duration-300 p-[16px] hover:bg-[#F4F6FB]`}>
              <BiChart className={`${location.pathname === "/refund" ? "text-[#2B3674]" : "text-[#fff]"} w-5 h-5  group-hover:text-[#50724D] `}/>
              <p className={`${location.pathname === "/refund" ? "text-[#2B3674]" : "text-[#fff]"}  group-hover:text-[#50724D] font-mont text-semibold `}>Refund</p>
            </div> */}
            <div onClick={() => {navigate("/settings"), window.scrollTo(0, 0)}} className={`${location?.pathname === "/settings"  ? "bg-[#F4F6FB]" : ""} w-[222px] h-[48px]  gap-2 flex items-center group cursor-pointer rounded-l-3xl transition-all duration-300 p-[16px] hover:bg-[#F4F6FB]`}>
              <FiSettings className={`${location.pathname === "/settings" ? "text-[#2B3674]" : "text-[#fff]"} w-5 h-5  group-hover:text-[#50724D] `}/>
              <p className={`${location.pathname === "/settings" ? "text-[#2B3674]" : "text-[#fff]"}  group-hover:text-[#50724D] font-mont text-semibold `}>Settings</p>
            </div>

        </div>
    </div>
  )
}

export default Sidebar