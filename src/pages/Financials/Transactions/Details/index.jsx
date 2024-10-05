import React from 'react'
import { FiUploadCloud } from 'react-icons/fi'
import { useLocation, useNavigate } from 'react-router-dom'

const TransactionDetails = () => {


    const navigate = useNavigate()
    const location = useLocation()

    const data = location.state

    const formatter = new Intl.NumberFormat('en-US');

    console.log(data, 'available')

  return (
    <div className='py-5 px-14 flex flex-col bg-[#F4F7FE]'>
        <div className='flex justify-between mt-[28px]'>
            <p className='font-barlow text-[#2B3674] text-[24px] font-semibold'>Transactions</p>

            <div className='flex gap-4 items-center'>
            <button
                className='w-[97px] p-2 h-[48px] bg-[#A3AED0] flex justify-center items-center rounded-lg'
                onClick={() => navigate(-1)}
            >
                <p className='text-[#2B3674] font-manrope font-medium'>Back</p>
            </button>
            <button
                className='w-[160px] p-2 h-[48px] bg-[#2B3674] flex justify-center items-center rounded-lg'
            >
                <p className='text-[#fff] font-barlow font-medium'>Download Receipt</p>
            </button>
            </div>
        </div>
        <div className='flex items-center gap-2.5 mt-[36px]'>
            <p className='text-[#2B3674] text-[24px] font-barlow font-semibold'>Transaction <span className='text-[#8A9099] ml-1.5'>#7474848438</span></p>
            <div className='bg-[#ECFDF5] rounded-[4px] w-[91px] h-[24px]'>
                <p className='text-[#10B981] font-mont text-[13px] font-semibold text-center'>Successful</p>
            </div>
        </div>
        <div className='bg-[#fff] py-[48px] flex flex-col gap-[37px] px-[93px] mt-[51px]'>
            <div className='flex flex-col gap-6 '>
                <p className='text-[#2B3674] font-barlow text-[24px] font-bold'>Basic Details</p>
                <div className='flex flex-wrap gap-[85px]'>
                    <div className='gap-1 flex flex-col'>
                        <p className='text-base text-[#5C6F7F] font-barlow font-bold'>TXN ID</p>
                        <p className='font-mont text-[#071827] text-sm'>{`#${data?.txn_id}`}</p>
                    </div>
                    <div className='gap-1 flex flex-col'>
                        <p className='text-base text-[#5C6F7F] font-barlow font-bold'>Customer</p>
                        <p className='font-mont text-[#071827] text-sm'>{data?.user?.name}</p>
                    </div>
                    <div className='gap-1 flex flex-col'>
                        <p className='text-base text-[#5C6F7F] font-barlow font-bold'>User Type</p>
                        <p className='font-mont text-[#071827] text-sm'>{data?.user?.type}</p>
                    </div>
                    <div className='gap-1 flex flex-col'>
                        <p className='text-base text-[#5C6F7F] font-barlow font-bold'>Amount</p>
                        <p className='font-mont text-[#071827] text-sm'>{`₦${formatter.format(data?.total_amount)}`}</p>
                    </div>
                    <div className='gap-1 flex flex-col'>
                        <p className='text-base text-[#5C6F7F] font-barlow font-bold'>Transaction Type</p>
                        <p className='font-mont text-[#071827] text-sm capitalize'>{data?.transaction_type}</p>
                    </div>
                    <div className='gap-1 flex flex-col'>
                        <p className='text-base text-[#5C6F7F] font-barlow font-bold'>Payment operator</p>
                        <p className='font-mont text-[#071827] text-sm'>Paystack</p>
                    </div>
                    <div className='gap-1 flex flex-col'>
                        <p className='text-base text-[#5C6F7F] font-barlow font-bold'>Date</p>
                        <p className='font-mont text-[#071827] text-sm'>{new Date(data?.created_at).toLocaleDateString()}</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-6 '>
                <p className='text-[#2B3674] font-barlow text-[24px] font-bold'>Subscription Details</p>
                <div className='flex flex-wrap gap-[85px]'>
                    <div className='gap-1 flex flex-col'>
                        <p className='text-base text-[#5C6F7F] font-barlow font-bold'>ID</p>
                        <p className='font-mont text-[#071827] text-sm'>#7474848438</p>
                    </div>
                    <div className='gap-1 flex flex-col'>
                        <p className='text-base text-[#5C6F7F] font-barlow font-bold'>Plan</p>
                        <p className='font-mont text-[#071827] text-sm'>Premium</p>
                    </div>
                    <div className='gap-1 flex flex-col'>
                        <p className='text-base text-[#5C6F7F] font-barlow font-bold'>Billing Cycle</p>
                        <p className='font-mont text-[#071827] text-sm'>Monthly</p>
                    </div>
                    <div className='gap-1 flex flex-col'>
                        <p className='text-base text-[#5C6F7F] font-barlow font-bold'>Next Billing Date</p>
                        <p className='font-mont text-[#071827] text-sm'>2024-06-01</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TransactionDetails