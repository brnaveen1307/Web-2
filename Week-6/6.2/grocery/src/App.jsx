import { useState, useEffect } from 'react'
import axios from 'axios'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [id, setId] = useState(1);

  return (
    <>
      <button onClick={function(){
        setId(1);
      }}>1</button>

      <button onClick={function(){
        setId(2);
      }}>2</button>

      <button onClick={function(){
        setId(3);
      }}>3</button>

      <button onClick={function(){
        setId(4);
      }}>4</button>

      <Todo id={id} />
    </>
  )
}

function Todo({id}){
  const [todos, setTodos] = useState({});

  useEffect(function(){
    axios.get("http://localhost:3000/server?id=" + id)
      .then(response(function(){
        setTodos(response.data.todo)
      }))
  }, [id])

  return <div>
    Id: {id}
    <h1>
      {todos.title}
    </h1>
    <h4>
      {todos.description}
    </h4>
  </div>
}

export default App
