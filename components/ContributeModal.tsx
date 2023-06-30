'use client'
import React, { useState } from 'react'
import SalaryForm from '@/components/SalaryForm'

type Props = {}

const ContributeModal = (props: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <div className="text-center">
        <button 
          type="button"
          className="inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white transition-all bg-blue-500 border border-transparent rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
          onClick={handleOpenModal}
          >
            Contribute a Salary
        </button>
      </div>

      <div className="w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto">
          <SalaryForm />
      </div>
    </>
  )
}

export default ContributeModal
