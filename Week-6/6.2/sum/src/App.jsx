import { useState, useMemo } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState(1);

  let count = useMemo(function (){
    let finalCount = 0;
    for(let i = 1; i <= inputValue; i++){
      finalCount += i;
  } 

  return finalCount;
  }, [inputValue])

  

  return (
    <>
      <input onChange={function(e){
        setInputValue(e.target.value);
      }} placeholder="Find sum of 1 to n"></input>
      <br />
      Sum from 1 to {inputValue} is {count}
      <br />
      <button onClick={function(){
        setCounter(counter + 1);
      }}>Counter ({counter})</button> 
    </>
  )
}

export default App
