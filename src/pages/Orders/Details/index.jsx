import React, { useEffect, useState } from 'react'
import { FiHome } from 'react-icons/fi'
import { HiOutlinePlusSm } from 'react-icons/hi'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { ImCancelCircle } from "react-icons/im";

import Check from "../../../assets/svg/Check_white.svg"
import OrderDetails from './components/OrderDetails';
import Products from './components/Products';
import Invoice from './components/Invoice';
import ModalPop from '../../../components/modalPop';
import ConfirmOrder from '../modal/ConfirmOrder';
import CancelOrder from '../modal/CancelOrder';
import { useLocation } from 'react-router-dom';
import { api } from '../../../services/api';
import { appUrls } from '../../../services/urls';

const Details = () => {
    const [activeTab, setActiveTab] = useState("Order Details")
    const [openConfirmOrder, setOpenConfirmOrder] = useState(false)
    const [openCancelOrder, setOpenCancelOrder] = useState(false)
    const [orderData, setOrderData] = useState([])
    const [loading, setLoading] = useState(false)

    const handleChangeTab = (value) => {
        setActiveTab(value)
    }

    const location = useLocation()
    const data = location.state

    const getOrderById = async () => {
      setLoading(true);
      await api
        .get(appUrls?.GET_ALL_ORDERS + `/${data?.id}`)
        .then((res) => {
          setLoading(false);
          console.log(res, "slik")
          const orders = res?.data?.data?.order;
          setOrderData(orders);

          // // Calculate the total amount
          // const total = transactions.reduce((sum, transaction) => {
          //   return sum + parseInt(transaction.total_amount, 10);
          // }, 0);
          // setTotalAmount(total); // Update the total amount state
        })
        .catch((err) => {
          setLoading(false);
          console.log(err, "faro");
        });
    };
  
    useEffect(() => {
      getOrderById()
    }, [])

  return (
    <div className='py-5 px-14 flex flex-col bg-[#FFF]'>
        <div className='flex items-center'>
            <FiHome className='w-5 h-5 text-[#D0D5DD]' />
            <MdOutlineKeyboardArrowRight className='w-4 h-4 text-[#D0D5DD]' />
            <div className='w-[92px] h-[28px] bg-[#F4ECEE] rounded-[6px] p-2'>
                <p className='text-[#F55425] font-inter font-medium text-xs text-center'>Order List</p>
            </div>
        </div>
      <div className='flex justify-between mt-[28px]'>
        <p className='font-barlow text-[#2B3674] text-[24px] font-semibold'>Order <span className='text-[#8A9099]'>#790841</span></p>

        <div className='flex gap-4 items-center'>
            <button onClick={() => setOpenCancelOrder(true)} className='w-[160px] h-[48px] rounded-lg border border-[#FF0000] flex items-center justify-between p-3'>
                <ImCancelCircle className='text-[#ff0000]' />
                <p className='text-[#FF0000] font-barlow font-medium'>Cancel Order</p>
            </button>
        
            <button
                className='w-[160px] p-2 h-[48px] bg-[#0F973D] flex items-center gap-[21px] rounded-lg'
                onClick={() => setOpenConfirmOrder(true)}
            >
                <img src={Check} alt='check' />
                <p className='text-[#fff] font-barlow font-medium'>Confirm Order</p>
            </button>
        </div>
      </div>
      
      <div className='flex items-center gap-4 mt-[44px]'>
        <p 
          onClick={() => handleChangeTab("Order Details")} 
          className={`${activeTab === "Order Details" ? "text-[#2B3674] border-b border-2" :  "text-[#8B909A] border-0"} text-center cursor-pointer border-x-0 border-t-0 border border-[#2B3674] w-[125px] h-[38px]`}
        >
          ORDER DETAILS
        </p>
        <p 
          onClick={() => handleChangeTab("Products")} 
          className={`${activeTab === "Products" ? "text-[#2B3674] border-b border-2" :  "text-[#8B909A] border-0"} text-center cursor-pointer border-x-0 border-t-0 border border-[#2B3674] w-[77px] h-[38px]`}
        >
          PRODUCTS
        </p>
        <p 
          onClick={() => handleChangeTab("Invoice")} 
          className={`${activeTab === "Invoice" ? "text-[#2B3674] border-b border-2" :  "text-[#8B909A] border-0"} text-center cursor-pointer border-x-0 border-t-0 border border-[#2B3674] w-[58px] h-[38px]`}
        >
          INVOICE
        </p>
      </div>
      <hr />
      {activeTab === "Order Details" && <OrderDetails orderData={orderData} />}
      {activeTab === "Products" && <Products orderData={orderData} />}
      {activeTab === "Invoice" && <Invoice />}
    
        <ModalPop isOpen={openConfirmOrder}>
            <ConfirmOrder handleClose={() => setOpenConfirmOrder(false)} />
        </ModalPop>

        <ModalPop isOpen={openCancelOrder}>
            <CancelOrder handleClose={() => setOpenCancelOrder(false)} />
        </ModalPop>
      
    </div> 
  )
}

export default Details