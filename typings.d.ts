import React from 'react'

interface CardProps {
  className: string
  children: React.ReactNode
}

interface SavingsPlanProp {
  name: string
  targetAmount: number
  amount: number
  date: string
}

interface RecentTransactionProp {
  firstName: string
  lastName: string
  image?: string
  createdAt: string
  amount: number
  status: string
}

interface AccountCardProps {
  number: string
  cvc: string
  type: 'real' | 'virtual'
  status: string | 'active' | 'inactive' | 'pending'
  expiryDate: string
  balance: number
}