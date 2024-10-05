import React, { useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

const OrderDetails = ({ orderData }) => {
    const [openAddress, setOpenAddress] = useState(false);

    const handleOpenAddress = () => {
        setOpenAddress(prev => !prev)
    }

    
    const formatter = new Intl.NumberFormat('en-US');

  return (
    <div className='flex flex-col pt-[37px] gap-[23px]'>
        <div className='flex flex-col gap-[23px]'>
            <p className='font-medium text-[#3F434A] font-barlow text-[20px]'>Customer</p>
            <div className='flex flex-col gap-[23px]'>
                <div className='flex items-center gap-[224px]'>
                    <p className='font-barlow text-[#8A9099] font-medium texts,'>NAME</p>
                    <p className='font-barlow text-[#8A9099] font-medium texts,'>EMAIL</p>
                    <p className='font-barlow text-[#8A9099] font-medium texts,'>PHONE</p>
                    <p className='font-barlow text-[#8A9099] font-medium texts,'>LOCATION</p>
                </div>
                <hr />
                <div className='flex items-center gap-[157px]'>
                    <p className='font-barlow text-[#3F434A] text-sm'>{orderData?.user?.name}</p>
                    <p className='font-barlow text-[#3F434A] text-sm'>{orderData?.user?.email}</p>
                    <p className='font-barlow text-[#3F434A] text-sm'>{orderData?.user?.phone_number}</p>
                    <p className='font-barlow text-[#3F434A] text-sm'>{orderData?.address}</p>
                </div>

            </div>

        </div>
        <hr/>

        <div className='flex items-center justify-between'>
            <div className='flex flex-col gap-[22px]'>
                <p className='text-[20px] font-barlow font-medium text-[#3F434A]'>Payment method</p>
                <div className='flex items-center justify-between border border-[#E8E9EB] py-3 px-4 w-[205px] rounded-xl'>
                    <p className='text-[#3F434A] font-barlow text-sm capitalize'>{orderData?.payment_option}</p>
                    <IoIosArrowDown className='text-[14x] text-[#E8E9EB]' />
                </div>
                <div className='flex flex-col gap-1'>
                    <p className='font-medium text-[#3F434A] font-barlow text-sm'>Transaction ID: <span className='font-poppins font-normal text-sm'></span>{orderData?.txn_id}</p>
                    <p className='font-medium text-[#3F434A] font-barlow text-sm'>Amount: <span className='font-poppins font-normal text-sm'>{`₦${formatter.format(orderData?.total_amount)}`}</span> </p>
                </div>
            </div>
            <div className='flex flex-col gap-[22px]'>
                <p className='text-[20px] font-barlow font-medium text-[#3F434A]'>Shipping method</p>
                <div className='flex items-center justify-between border border-[#E8E9EB] py-3 px-4 w-[205px] rounded-xl'>
                    <p className='text-[#3F434A] font-barlow text-sm capitalize'>{orderData?.delivery_option}</p>
                    <IoIosArrowDown className='text-[14x] text-[#E8E9EB]' />
                </div>
                <div className='flex flex-col gap-1'>
                    <p className='font-medium text-[#3F434A] font-barlow text-sm'>Tracking Code: <span className='font-poppins font-normal text-sm'></span>Pending </p>
                    <p className='font-medium text-[#3F434A] font-barlow text-sm'>Date: <span className='font-poppins font-normal text-sm'>{new Date(orderData?.created_at).toLocaleDateString()}</span> </p>
                </div>
            </div>
            <div className='w-[358px] bg-[#F8F8F8] rounded-lg flex flex-col gap-4 px-4 py-5'>
                <div className='flex items-center justify-between'>
                    <p className='text-[#3F434A] text-sm font-barlow'>Fulfilment status</p>
                    <div className='flex items-center justify-between bg-[#FFF] py-3 px-4 w-[205px] rounded-xl'>
                        <p className='text-[#3F434A] font-barlow text-sm'>Processing</p>
                        <IoIosArrowDown className='text-[14x] text-[#E8E9EB]' />
                    </div>
                </div>
                <div className='flex items-center justify-between'>
                    <p className='text-[#3F434A] text-sm font-barlow'>Payment status</p>
                    <div className='flex items-center justify-between bg-[#FFF] py-3 px-4 w-[205px] rounded-xl'>
                        <p className='text-[#3F434A] font-barlow text-sm'>Paid</p>
                        <IoIosArrowDown className='text-[14x] text-[#E8E9EB]' />
                    </div>
                </div>

            </div>

        </div>

        <div className={`${openAddress ? "h-[158px]" : ""} w-full border border-[#E8E9EB] rounded-lg gap-5 px-6 py-4`}>
            <div className='flex items-center justify-between' onClick={() => handleOpenAddress()}>
                <p className='text-[20px] font-barlow text-[#3F434A] font-medium'>Billing address</p>
                {openAddress  ? <IoIosArrowUp className='text-[20px] text-[#3F434A]'  /> : <IoIosArrowDown className='text-[20px] text-[#3F434A]' />}
            </div>
            {
                openAddress && (
                    <div className='flex justify-between items-center mt-5'>
                        <div className='flex flex-col gap-1'>
                            <p className='text-[#3F434A] font-medium text-sm font-barlow'>First name: <span className='font-normal text-[#595F69]'>Regina</span></p>
                            <p className='text-[#3F434A] font-medium text-sm font-barlow'>Last name: <span className='font-normal text-[#595F69]'>Cooper</span></p>
                            <p className='text-[#3F434A] font-medium text-sm font-barlow'>Address: <span className='font-normal text-[#595F69]'>993 E. Brewer St. Holtsville</span></p>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <p className='text-[#3F434A] font-medium text-sm font-barlow'>State/Region: <span className='font-normal text-[#595F69]'> New York</span></p>
                            <p className='text-[#3F434A] font-medium text-sm font-barlow'>City: <span className='font-normal text-[#595F69]'> New York</span></p> 
                            <p className='text-[#3F434A] font-medium text-sm font-barlow'>Country: <span className='font-normal text-[#595F69]'>United States</span></p> 
                        </div>
                        <div className='flex flex-col gap-1'>
                            <p className='text-[#3F434A] font-medium text-sm font-barlow'>Phone: <span className='font-normal text-[#595F69]'>+1(070) 4567–8800</span></p> 
                            <p className='text-[#3F434A] font-medium text-sm font-barlow'>Email: <span className='font-normal text-[#595F69]'>example@mail.com</span></p> 
                            <p className='text-[#3F434A] font-medium text-sm font-barlow'>Postcode: <span className='font-normal text-[#595F69]'> 11742</span></p> 
                        </div>
                    </div>
                )
            }

        </div>

        <div className={` w-full border border-[#E8E9EB] rounded-lg gap-5  px-6 py-4`}>
            <div className='flex items-center justify-between'>
                <p className='text-[20px] font-barlow text-[#3F434A] font-medium'>Shipping address</p>
                <IoIosArrowDown className='text-[20px] text-[#3F434A]' />
            </div>
        </div>


    </div>
  )
}

export default OrderDetails