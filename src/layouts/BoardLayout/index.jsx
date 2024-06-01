import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

const BoardLayout = () => {
  return (
    <div className='overflow-x-hidden flex w-full'>
        <div className='w-[20%]  bg-[#2B3674] fixed h-screen flex flex-col overflow-y-auto overflow-x-hidden'>
            <Sidebar/>
        </div>
        <div className='flex flex-col w-[85%] ml-[18%]'>
            <div className='w-full bg-[#2B3674] h-[77px]'>
                <Header />
            </div>
            <div className='bg-[#fff] pb-[10px]'>
                <Outlet />
            </div>
        </div>

    </div>
  )
}

export default BoardLayout