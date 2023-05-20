import React from 'react'

const RecentTransactionCard = () => {
  return (
    <div className='group space-y-2 hover:cursor-pointer hover:bg-light-bg p-2 rounded-md '>
      <div className="flex justify-between items-center">
        <div className="flex">
          <span className="w-[35px] h-[35px] mr-2 rounded-full bg-light-bg group-hover:bg-dark-bg flex items-center justify-center text-white font-semibold">JN</span>
          <div>
            <p className='text-white text-sm font-bold'>Joseph Nartey</p>
            <p className='text-xs text-slate-500'>March 16 2023</p>
          </div>
        </div>

        <div className="text-right">
          <p className='text-sm text-white font-bold'>$ 100</p>
          <p className='text-xs text-green font-semibold'>Completed</p>
        </div>
      </div>

    </div>
  )
}

export default RecentTransactionCard