import { useState , useRef , useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [incomeTax, setIncomeTax] = useState(20000);
  const divRef = useRef();

  useEffect(function(){
    setTimeout(function(){
      console.log(divRef.current);
      divRef.current.innerHTML = 10
    }, 5000)
  }, [])

  return (
    <>
      Hi there, your income tax returns are <div ref={divRef}>{incomeTax}</div>
    </>
  )
}

export default App
