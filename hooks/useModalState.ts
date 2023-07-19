'use client'
import { useState } from 'react';

// Custom hook for managing modal state
const useModalState = (initialState = false) => {
  const [isModalOpen, setIsModalOpen] = useState(initialState);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return {
    isModalOpen,
    handleOpenModal,
    handleCloseModal,
  };
};

export default useModalState;
