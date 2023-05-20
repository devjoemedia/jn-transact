"use client"

import React from 'react'
import { TbLogout, TbMessage2 } from 'react-icons/tb'
import { BiHelpCircle } from 'react-icons/bi'
import { AiFillSetting } from 'react-icons/ai'
import { BiBell } from 'react-icons/bi'
import { RiTeamFill } from 'react-icons/ri'
import { MdOutlineAnalytics } from 'react-icons/md'
import { RiMessage2Line } from 'react-icons/ri'
import { AiOutlineSchedule } from 'react-icons/ai'
import { MdDashboard } from 'react-icons/md'

const Header = () => {
  return (
    <div>
      <div className="flex space-x-5 justify-between">
        {/* <div className="flex-1"> */}
        <div className='flex-1 bg-dark-bg py-2 px-4 rounded-full h-[50px]'>
          <input type='text' className=' bg-transparent w-full outline-none' placeholder='Search here...' />
        </div>
        {/* </div> */}

        <div className='flex-[0.4] bg-dark-bg py-2 px-4 rounded-full flex justify-between h-[50px]'>
          <div className='flex'>
            <span className="w-[50px] h-[35px] mr-2 rounded-full bg-light-bg flex items-center justify-center"><BiBell /></span>
            <span className="w-[50px] h-[35px] mr-2 rounded-full bg-light-bg flex items-center justify-center"><TbMessage2 /></span>
          </div>

          <div className="flex items-center">
            <span className="w-[50px] h-[35px] mr-2 rounded-full bg-light-bg flex items-center justify-center font-semibold">JN</span>
            <p className='text-sm'>Joseph Nartey</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header