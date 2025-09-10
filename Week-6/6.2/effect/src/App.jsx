import { useState } from 'react'
import axios from 'axios'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])

  useEffect(function(){
    axios.get("http://localhost:3000/server")
    .then(function(response){
      setTodos(response.data.todos)
    })
  }, [])

  return (
    <>
      {todos.map(function(todo){
        <Todo title={todo.title} description = {todo.description} />
      })}
    </>
  )
}

function Todo(title, description){
  return <div>
    <h1>{title}</h1>
    <h5>{description}</h5>
  </div>
}

export default App
