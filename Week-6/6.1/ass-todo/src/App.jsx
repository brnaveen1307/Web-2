import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [Todo, setTodos] = useState([]);

  useEffect(function(){
    setInterval(function(){
      fetch("http://localhost:3000/server")
      .then(async function(res){
        const json = await res.json();
        setTodos(json.todos);
      })
    }, 10000)
    
  }, [])

  return (
    <>
      {Todo.map(todo => <Todo key = {todo.id} title = {todo.title} description = {todo.description} /> )}
    </>
  )
}

function Todo({title, description}){
  return <div>
    <h1>
      {title}
    </h1>
    <h4>
      {description}
    </h4>
  </div>
}

export default App