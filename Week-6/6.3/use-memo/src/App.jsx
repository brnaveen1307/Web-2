import { useState , useEffect, useMemo} from 'react'
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
    setTimeout(function() {
      setBankData({
        income: 100
      })
    }, 5000)
  }, [])

  const cryptoReturns = useMemo(function(){
    exchange1Data.returns + exchange2Data.returns;
  }, [exchange1Data, exchange2Data])
  

  const incomeTax = (cryptoReturns + bankData.income) * 0.3;

  return (
    <>
      Hi there, your income tax returns are {incomeTax}
    </>
  )
}

export default App
