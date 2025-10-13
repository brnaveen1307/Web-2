import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Todo title="Learn React" description="Learn React with TypeScript" done={false} />
    </>
  )
}

interface TodoProp{
  title: string;
  description: string;
  done: boolean;
}

function Todo(props: TodoProp){

  return <div>
    <h1>
      {props.title}
    </h1>

    <h2>
      {props.description}
    </h2>

    <h3>
      {props.done}
    </h3>
  </div>
}

export default App
