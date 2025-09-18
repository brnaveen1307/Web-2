import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Count count={count} />
      <Buttons count={count} setCount={setCount} />
    </>
  )
}

function Buttons({count, setCount}){
  return <div>
    <button onClick = {function(){
      setCount(count + 1)
    }}>Increase</button>

    <button onClick = {function(){
      setCount(count - 1)
    }}>Decrease</button>
  </div>
}

function Count({count}){
  return <div>
    Count: {count}
  </div>
}

export default App
