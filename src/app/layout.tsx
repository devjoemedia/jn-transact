"use client"

import { TbLogout, TbMessage2 } from 'react-icons/tb'
import { BiHelpCircle } from 'react-icons/bi'
import { AiFillSetting } from 'react-icons/ai'
import { BiBell } from 'react-icons/bi'
import { RiTeamFill } from 'react-icons/ri'
import { MdOutlineAnalytics } from 'react-icons/md'
import { RiMessage2Line } from 'react-icons/ri'
import { AiOutlineSchedule } from 'react-icons/ai'
import { MdDashboard } from 'react-icons/md'

import './globals.css'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  // const query = useRouter()
  // console.log(query)

  const navs = [
    { text: 'My Account', icon: <MdOutlineAnalytics /> },
    { text: 'Transactions', icon: <RiTeamFill /> },
    // { text: 'Payments', icon: <RiTeamFill /> },
    { text: 'Cards', icon: <MdOutlineAnalytics /> },
    { text: 'Schedules', icon: <AiOutlineSchedule /> },
    { text: 'Analytics', icon: <MdOutlineAnalytics /> },
    { text: 'Savings', icon: <RiTeamFill /> },
    { text: 'Notifications', icon: <BiBell /> }
  ]

  return (
    <html lang="en">
      <body>
        <div className='flex h-[100vh] w-screen overflow-hidden max-w-[1440px] mx-auto '>
          <div className='  bg-dark-bg flex-[0.2] flex flex-col justify-between space-y-5'>
            <div className='space-y-5'>
              <div>
                <div className="flex items-center py-3 px-4 border-b-slate-400">
                  <span className="w-[45px] h-[45px]  rounded-full bg-light-bg flex items-center justify-center font-semibold">JN</span>
                  <div className=" ml-2">
                    <p className='m-0 p-0 text-sm'>Joseph Nartey</p>
                    <p className='text-slate-400 text-xs m-0 p-0'>Demo Account</p>
                  </div>
                </div>
              </div>

              <ul className=' text-primary'>
                <Link href='/'>
                  <li className='group flex space-x-3 items-center hover:bg-secondary  px-5 py-3 hover:cursor-pointer '>
                    <MdDashboard /> <p className='ml-3 '>Dashboard</p>
                  </li>
                </Link>
                {navs.map((link, index) => (
                  <Link href={link.text.toLowerCase().split(' ').join('-')} key={index}>
                    <li className='group flex space-x-3 items-center hover:bg-secondary  px-5 py-3 hover:cursor-pointer '>
                      {link.icon} <p className='ml-3 '>{link.text}</p>
                    </li>
                  </Link>
                ))}

              </ul>
            </div>

            <ul className='space-y-5 text-primary'>
              <li className='flex space-x-3 items-center hover:bg-light-bg px-5 py-3 hover:cursor-pointer '><BiHelpCircle className='mr-3' />Help</li>
              <li className='flex space-x-3 items-center hover:bg-light-bg px-5 py-3 hover:cursor-pointer '><TbLogout className='mr-3' />Logout</li>
            </ul>
          </div>

          <div className='flex-1 bg-light-bg w-full overflow-y-scroll'>
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
