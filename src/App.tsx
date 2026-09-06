import React, { useEffect, useState } from 'react'
import DesktopApp from './pages/Desktop/DesktopApp'
import MobileApp from './pages/Mobile/MobileApp'
import './styles/app.sass'

const App: React.FC = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1300)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1300)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return isMobile ? <MobileApp /> : <DesktopApp />
}

export default App