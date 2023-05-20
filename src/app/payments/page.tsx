import React from 'react'
import Container from '../components/Container'
import Header from '../components/Header'
import RecentTransactionCard from '../components/RecentTransactionCard'

const Payments = () => {
  return (
    <div className="space-y-5 px-5">
      <Header />
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
  )
}

export default Payments