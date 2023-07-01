import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

const useActiveLink = (path: string) => {
  const pathName = usePathname()
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    setIsActive(pathName === path)
  }, [pathName, path]);

  return isActive;
};

export default useActiveLink
