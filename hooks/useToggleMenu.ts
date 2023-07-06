'use client'
import { useState, useEffect } from 'react';

export function useToggleMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return {
    isMenuOpen,
    toggleMenu,
  };
}
