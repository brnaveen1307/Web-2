import { useState , useContext} from 'react'
import {CountContext, }  from './context'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CountContext.Provider value={count}>
        <Count count = {count} setCount= {setCount}/>
      </CountContext.Provider>
    </>
  )
}

function Count({setCount}){
  return <div>
    <CountReRender />
    <Buttons setCount = {setCount} />
  </div>
}

function CountReRender(){
  const count = useContext(CountContext);
  return <div>
    {count}
  </div>
}

function Buttons({setCount}){
  const count = useContext(CountContext);;
  return <div>
    <button onClick= {function(){
      setCount(count + 1)
    }}>Increase</button>
    <button onClick={function(){
      setCount(count - 1)
    }}>Decrease</button>
  </div>
}


export default App
