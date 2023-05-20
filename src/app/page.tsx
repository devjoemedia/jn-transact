'use client';

import Analytics from './components/Analytics';
import Header from './components/Header';
import Card from './components/Card';
import Container from './components/Container';
import RecentTransactionCard from './components/RecentTransactionCard';
import SavingsPlan from './components/SavingsPlan';
import { useState, useEffect } from 'react'
import { BiBell } from 'react-icons/bi'
import { TbMessage2 } from 'react-icons/tb'

export default function Home() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)

  }, [])

  return (
    <main className="p-5 space-y-5">
      <Header />

      <div className="flex space-x-5 w-full">
        <div className=" flex-1 space-y-7 ">
          <Container>
            <h1 className="mb-2  text-lg text-white">Overview</h1>

            <div className="grid grid-cols-2 gap-5">
              <Card title="Your Balance" className='bg-secondary' />
              <Card title="Savings" />
              <Card title="Income" />
              <Card title="Expenses" />
            </div>
          </Container>

          <Container>
            <div className="flex justify-between items-center">
              <h1 className='mb-2  text-lg text-white flex-[0.5]'>Analytics</h1>

              <div className="flex items-center justify-between flex-[0.5] text-sm">
                <p className='flex items-center'><span className="w-[12px] h-[12px] mr-2 rounded-full bg-secondary "></span>Incomes</p>
                <p className='flex items-center'><span className="w-[12px] h-[12px] mr-2 rounded-full  bg-green"></span>Expenses</p>
                <select name="day" id="day" className='bg-light-bg outline-none border-none text-xs rounded p-1'>
                  <option value="weekly">Weekly</option>
                  <option value="monthly">Monthly</option>
                  <option value="yearly">Yearly</option>
                </select>
              </div>
            </div>
            {/* Anlytics */}
            {isClient && <Analytics />}

          </Container>

          <Container className='space-y-5'>
            <div className="flex justify-between items-center">
              <h1 className='mb-2  text-lg text-white '>Recent Transaction</h1>

              <p className='text-secondary'>See All</p>
            </div>
            <hr />

            <RecentTransactionCard />
            <RecentTransactionCard />
            <RecentTransactionCard />
            <RecentTransactionCard />
            <RecentTransactionCard />
          </Container>
        </div>

        <div className=" flex-[0.4] space-y-7 ">

          <Container className='space-y-6'>
            <div className="flex justify-between items-center">
              <h1 className='mb-2  text-lg text-white '>Savings Plan</h1>

              <p className='text-secondary'>See All</p>
            </div>
            <hr />

            <SavingsPlan />
            <SavingsPlan />
            <SavingsPlan />
          </Container>

          <Container className='space-y-5'>
            <div className="flex justify-between items-center">
              <h1 className='mb-2  text-lg text-white '>Recent Transaction</h1>

              <p className='text-secondary'>See All</p>
            </div>
            <hr />

            <RecentTransactionCard />
            <RecentTransactionCard />
            <RecentTransactionCard />
            <RecentTransactionCard />
            <RecentTransactionCard />
          </Container>
        </div>
      </div>
    </main>
  )
}
