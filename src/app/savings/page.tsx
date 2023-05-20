import React from 'react'
import Container from '../components/Container'
import Header from '../components/Header'
import SavingsPlan from '../components/SavingsPlan'

const Savings = () => {
  return (
    <div className="space-y-5 px-5">
      <Header />
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
    </div>
  )
}

export default Savings