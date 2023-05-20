import React from 'react'

const Container = ({children, className}: {children: React.ReactNode, className?:string},) => {
  return (
    <div>
      <div className={`bg-dark-bg p-5 rounded-lg ${className}`}>
        {children}
      </div>
    </div>
  )
}

export default Container