import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const useActiveLink = (path: string) => {
  const router = useRouter()
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    setIsActive(router.pathname === path)
  }, [router.pathname, path]);

  return isActive;
};

export default useActiveLink
