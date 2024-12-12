import React, { useState, useEffect } from 'react'
import { FiHome, FiUploadCloud } from 'react-icons/fi'
import * as XLSX from 'xlsx'

import { api } from '../../services/api';
import { appUrls } from '../../services/urls';

import AdminIcon from "../../assets/svg/admin.svg"
import CartIcon from "../../assets/svg/cart_green.svg"
import SearchSmall from "../../assets/svg/search_small.svg"
import Receipt from "../../assets/svg/receipt.svg"
import Wallet from "../../assets/svg/wallet.svg"
import Sales from './components/Sales';
import Subscriptions from './components/Subscriptions';
import MerchantGrowth from './components/MerchantGrowth';
import MerchantTypes from './components/MerchantTypes';
import TopCategories from './components/TopCategories';
import Activity from './components/Activity';
import Signups from './components/Signups';
import SalesWeek from './components/SalesWeek';

const Dashboard = () => {
  const [summary, setSummary] = useState([])
  const [activeTab, setActiveTab] = useState("sales")
  const [activeTimeTab, setActiveTimeTab] = useState("week")

  const handleChangeTab = (value) => {
    setActiveTab(value)
  }

  const handleChangeTimeTab = (value) => {
    setActiveTimeTab(value)
  }

  const formatter = new Intl.NumberFormat('en-US');

  const getSummary = async () => {
    try {
      const res = await api.get(appUrls?.GET_ANALYTICS_DATA)
      console.log(res, "master")
      setSummary(res?.data?.data)
    } catch(err) {
      console.log(err, "err")
    }
  }

  useEffect(() => {
    getSummary()
  }, [])

  console.log(summary, "summary")

  const exportExcel = () => {
    // Wrap the summary object in an array so it can be processed by json_to_sheet
    const worksheet = XLSX.utils.json_to_sheet([summary]);  // Wrap summary in an array
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Summary');
    XLSX.writeFile(workbook, `summary_${Date.now()}.xlsx`);
  };

  return (
    <div className='py-5 px-14 flex flex-col bg-[#F4F7FE]'>
      <div className='flex items-center'>
        <FiHome className='w-5 h-5 text-[#D0D5DD]' />
      </div>
      <div className='flex justify-between mt-[28px]'>
        <p className='font-barlow text-[#2B3674] text-[24px] font-semibold'>Overview</p>

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

      <div className='flex flex-col gap-3'>
        <div className='flex gap-3 mt-5 items-center'>

          <div className='bg-[#fff] w-[267px] h-[104px] gap-2.5 rounded-xl p-4 flex items-center'>
            <div className='bg-[#F4F7FE] flex item-center justify-center rounded-full p-4'>
              <img src={AdminIcon} alt='AdminIcon' />
            </div>
            <div className='flex flex-col gap-1.5'>
              <p className='text-[#A3AED0] font-inter'>Total Sales</p>
              <p className='text-[#2B3674] font-medium font-barlow text-[19px]'>{formatter.format(summary?.total_sales)}</p>
            </div>
          </div>

          <div className='bg-[#fff] w-[267px] h-[104px] gap-2.5 rounded-xl p-4 flex items-center'>
            <div className='bg-[#F4F7FE] flex item-center justify-center rounded-full p-4'>
              <img src={CartIcon} alt='CartIcon' />
            </div>
            <div className='flex flex-col gap-1.5'>
              <p className='text-[#A3AED0] font-inter'>Total Orders</p>
              <p className='text-[#2B3674] font-medium font-barlow text-[19px]'>{formatter.format(summary?.total_orders)}</p>
            </div>
          </div>

          <div className='bg-[#fff] w-[267px] h-[104px] gap-2.5 rounded-xl p-4 flex items-center'>
            <div className='bg-[#F4F7FE] flex item-center justify-center rounded-full p-4'>
              <img src={Receipt} alt='Receipt' />
            </div>
            <div className='flex flex-col gap-1.5'>
              <p className='text-[#A3AED0] font-inter'>Total Products</p>
              <p className='text-[#2B3674] font-medium font-barlow text-[19px]'>{0}</p>
            </div>
          </div>

          <div className='bg-[#fff] w-[267px] h-[104px] gap-2.5 rounded-xl p-4 flex items-center'>
            <div className='bg-[#FFF8F5] flex item-center justify-center rounded-full p-4'>
              <img src={Wallet} alt='Wallet' />
            </div>
            <div className='flex flex-col gap-1.5'>
              <p className='text-[#A3AED0] font-inter'>Average Order Value</p>
              <p className='text-[#2B3674] font-medium font-barlow text-[19px]'>{`₦${formatter.format(summary?.average_order_value)}`}</p>
            </div>
          </div>

        </div>

        <div className='flex gap-3 mt-5 items-center'>

          <div className='bg-[#fff] w-[267px] h-[104px] gap-2.5 rounded-xl p-4 flex items-center'>
            <div className='bg-[#F4F7FE] flex item-center justify-center rounded-full p-4'>
              <img src={AdminIcon} alt='AdminIcon' />
            </div>
            <div className='flex flex-col gap-1.5'>
              <p className='text-[#A3AED0] font-inter'>Total Merchants</p>
              <p className='text-[#2B3674] font-medium font-barlow text-[19px]'>{formatter.format(summary?.total_merchants)}</p>
            </div>
          </div>

          <div className='bg-[#fff] w-[267px] h-[104px] gap-2.5 rounded-xl p-4 flex items-center'>
            <div className='bg-[#F4F7FE] flex item-center justify-center rounded-full p-4'>
              <img src={CartIcon} alt='CartIcon' />
            </div>
            <div className='flex flex-col gap-1.5'>
              <p className='text-[#A3AED0] font-inter'>Total Principals</p>
              <p className='text-[#2B3674] font-medium font-barlow text-[19px]'>{formatter.format(summary?.total_principals)}</p>
            </div>
          </div>

          <div className='bg-[#fff] w-[267px] h-[104px] gap-2.5 rounded-xl p-4 flex items-center'>
            <div className='bg-[#F4F7FE] flex item-center justify-center rounded-full p-4'>
              <img src={Receipt} alt='Receipt' />
            </div>
            <div className='flex flex-col gap-1.5'>
              <p className='text-[#A3AED0] font-inter'>Total Shoppers</p>
              <p className='text-[#2B3674] font-medium font-barlow text-[19px]'>{formatter.format(summary?.total_shoppers)}</p>
            </div>
          </div>

          <div className='bg-[#fff] w-[267px] h-[104px] gap-2.5 rounded-xl p-4 flex items-center'>
            <div className='bg-[#FFF8F5] flex item-center justify-center rounded-full p-4'>
              <img src={Wallet} alt='Wallet' />
            </div>
            <div className='flex flex-col gap-1.5'>
              <p className='text-[#A3AED0] font-inter'>Pending Verifications</p>
              <p className='text-[#2B3674] font-medium font-barlow text-[19px]'>
                {formatter.format(summary?.principals_kyc_false + summary?.merchants_kyc_false)}
              </p>
            </div>
          </div>

        </div>

      </div>

      <div className='bg-[#fff] w-full flex flex-col gap-4 h-[518px] mt-3 rounded-lg p-4'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-3'>
            <p 
              onClick={() => handleChangeTab("sales")} 
              className={`${activeTab === "sales" ? "text-[#2B3674] border border-[#2B3674] border-t-0 border-x-0" : "text-[#A3AED0] border-b-0"} font-barlow font-medium p-2 text-base`}
            >
              Sales
            </p>
            <p 
              onClick={() => handleChangeTab("subscriptions")} 
              className={`${activeTab === "subscriptions" ? "text-[#2B3674] border border-[#2B3674] border-t-0 border-x-0" : "text-[#A3AED0] border-b-0"} font-barlow font-medium p-2 text-base`}
            >
              Subscriptions
            </p>
          </div>
          <div className='flex items-center gap-[32px]'>
            <p 
              onClick={() => handleChangeTimeTab("week")} 
              className={`${activeTimeTab === "week" ? "text-[#1890FF] " : "text-[#000]"} font-barlow font-normal p-2 text-sm`}
            >
              All Week
            </p>
            <p 
              onClick={() => handleChangeTimeTab("month")} 
              className={`${activeTimeTab === "month" ? "text-[#1890FF] " : "text-[#000]"} font-barlow font-normal p-2 text-sm`}
            >
              All Month
            </p>
            <p 
              onClick={() => handleChangeTimeTab("year")} 
              className={`${activeTimeTab === "year" ? "text-[#1890FF] " : "text-[#000]"} font-barlow font-normal p-2 text-sm`}
            >
              All Year
            </p>
          </div>

        </div>

        <div>
          {activeTab === "sales" && <Sales time={activeTimeTab} />}
          {activeTab === "subscriptions" && <Subscriptions time={activeTimeTab}/>}
        </div>

      </div>

      <div className='flex w-full gap-4 mt-3'>
          <div className='bg-[#fff] w-7/12 h-[453px] flex flex-col rounded-lg  p-[30px]'>
            <p className='font-barlow font-semibold text-[#05004E] mb-5 text-[20px]'>Merchants Growth</p>
              <MerchantGrowth />
          </div>
          <div className='w-5/12 bg-[#fff] p-[30px] h-[453px] rounded-lg  flex flex-col'>
            <p className='font-barlow font-semibold mb-5 text-[#05004E] text-[20px]'>Merchants Types</p>
            <MerchantTypes />
          </div>
      </div>

      <div className='flex w-full gap-4 mt-3'>
        <div className='bg-[#fff] w-8/12 h-[453px] flex flex-col rounded-lg  p-[30px]'>
          <p className='font-barlow font-semibold text-[#05004E] mb-5 text-[20px]'>Top Categories</p>
            <TopCategories />
        </div>
        <div className='w-4/12 bg-[#fff] p-[30px] h-[453px] rounded-lg  flex flex-col'>
          <p className='font-barlow font-medium mb-5 text-[#3D475C] text-[13px]'>Recent Activity</p>
            <Activity />
        </div>
      </div>

      <div className='flex w-full gap-4 mt-3'>
          <div className='bg-[#fff] w-7/12 h-[453px] flex flex-col rounded-lg  p-[30px]'>
            <p className='font-barlow font-semibold text-[#05004E] mb-5 text-[20px]'>New Sign Ups</p>
              <Signups />
          </div>
          <div className='w-5/12 bg-[#fff] p-[30px] h-[453px] rounded-lg  flex flex-col'>
            <p className='font-barlow font-semibold mb-5 text-[#05004E] text-[20px]'>Sales</p>
            <SalesWeek />
          </div>
      </div>

    </div>
  )
}

export default Dashboard