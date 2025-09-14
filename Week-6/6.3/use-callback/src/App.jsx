import { useState , useEffect, useCallback , memo , useMemo } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [exchange1Data, setExchange1Data] = useState({});
  const [exchange2Data, setExchange2Data] = useState({});
  const [bankData, setBankData] = useState({});

  useEffect(function(){
    setExchange1Data({
      returns: 100
    })
  }, [])

  useEffect(function(){
    setExchange2Data({
      returns: 100
    })
  }, [])

  useEffect(function(){
    setTimeout(function(){
      setBankData({
        income: 100
      })
    }, 5000)
  }, [])

  const calculateCryptoReturns = useCallback(function(){
    return exchange1Data.returns + exchange2Data.returns;
  }, [exchange1Data, exchange2Data])



  return (
    <>
      <CryptoGainCalculator calculateCryptoReturns = {calculateCryptoReturns} />
    </>
  )
}

const CryptoGainCalculator = memo(function({calculateCryptoReturns}){
  console.log("Crypto re-rendered")
  return<div>
      Your crypto returns are {calculateCryptoReturns()}
    </div>
})

export default App
