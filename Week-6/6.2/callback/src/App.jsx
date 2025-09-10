import { useState , memo , useCallback} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const inputFunction = useCallback(function(){
    console.log("Hey there!")
  }, [])

  return (
    <>
      <ButtonComponent input={inputFunction} />
      <button onClick = {function(){
        setCount(count + 1);
      }}>Click me {count}</button>
    </>
  )
}

const ButtonComponent = memo(function({inputFunction}) {
  console.log("Button rendered");

  return <div>
    <button>Button clocked</button>
  </div>
})

export default App
