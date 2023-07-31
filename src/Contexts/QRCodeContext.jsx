import { useContext } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { createContext } from 'react'
import { useLocation } from 'react-router-dom'

const QRCodeContext = createContext()

export function useQRCode() {
  return useContext(QRCodeContext)
}

function QRCodeContextProvider({ children }) {
  const scannerRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    if (scannerRef.current) {
      scannerRef.current = null
      console.log('Should pause')
      if(scannerRef.current?.getState() === 2) scannerRef.current.clear()
    }
  }, [location.pathname])

  return (
    <QRCodeContext.Provider value={scannerRef}>
      {children}
    </QRCodeContext.Provider>
  )
}

export default QRCodeContextProvider
