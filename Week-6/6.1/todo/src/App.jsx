import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

let counter = 4;

function App() {
  const [todos, setTodos] = useState([{
    id: 1,
    title: 'Learn React',
    description: 'Learn React from scratch'
  }, {
    id: 2,
    title: 'Learn Vite',
    description: 'Learn Vite from scratch'  
  }, {
    id: 3,
    title: 'Learn JavaScript',
    description: 'Learn JavaScript from scratch'
  }, {
    id: 4,
    title: 'Learn TypeScript',
    description: 'Learn TypeScript from scratch'
  }])

  return (
    <>
      <button onClick={addTodo}>Add a Todo</button>
      {todos.map(function(todo){
        return <Todo key = {todo.id} title = {todo.title} description = {todo.description} />
      })}
    </>
  )

  function Todo({title, description}){
    return <div>
      <h1>{title}</h1>
      <h5>{description}</h5>
    </div>
  }

  function addTodo(){
    setTodos([...todos, {
      id: counter++,
      title: Math.random(),
      description: Math.random()
    }])
  }

}

export default App
