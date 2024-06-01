import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoIosArrowDown } from "react-icons/io";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom"

import Search from "../../assets/png/search.png"
import Notification from "../../assets/png/notification.png"

const Header = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [search, setSearch] = useState("")

    const navigate = useNavigate()

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const logOut = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("userObj")
        navigate("/")
    }

  return (
    <div className='px-[28px] py-3 w-full flex items-center justify-between'>
        <div>
            <p className='text-[#fff] font-barlow font-normal'>Welcome Back, <span className='font-semibold'>Admin</span></p>
        </div>
        <div className='w-[367px] h-[40px] rounded-3xl bg-[#F4F7FE] flex items-center p-2'>
            <img src={Search} alt='search' className='w-[20px] h-[20px]'/>
            <input 
                name='search'
                onChange={(e) => handleSearch(e)}
                className='bg-transparent outline-none ml-2'
            />

        </div>
        <div className='flex items-center gap-4'>
            <img src={Notification} alt='notification' className='w-[40px] h-[40px]'/>
            <div 
                className="w-[218px] h-[40px] flex justify-between items-center p-3"
                id="header-menu"
                aria-controls={open ? "header-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
            >
                <div className='flex items-center gap-3'>
                    <div className='rounded-full w-[32px] h-[32px] bg-[#CDD0FE] flex justify-center items-center'>
                        <p className='text-[#8CAD07] text-center'>A</p>
                    </div>
                    <div className='flex flex-col '>
                        <p className='text-[#fff] font-barlow font-medium'>Admin</p>
                        <p className='text-[#fff] font-barlow font-normal'>Super Admin</p>

                    </div>
                </div>
            
            </div>
            <Menu
                id="header-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <MenuItem
                    onClick={() => logOut()}
                >
                    Logout
                </MenuItem>
            </Menu>
        </div>

    </div>
  )
}

export default Header