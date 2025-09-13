import { useState , useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [exchangeData, setExchangeData] = useState({});
  const [bankData, setBankData] = useState({});
  console.log("Re-Render")

  useEffect(function(){
    setTimeout(function(){
    setBankData({income: 100})
  }, 3000)
  }, [])

  useEffect(function(){
    setTimeout(function(){
    setExchangeData({
      returns: 100
    })
  }, 1000)
  }, [])

  const incomeTax = (bankData.income + exchangeData.returns) * 0.3;

  return (
    <>
      Hi there, your tax returns are {incomeTax}
    </>
  )
}

export default App
