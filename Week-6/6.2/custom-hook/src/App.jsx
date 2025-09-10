import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function useTodos(){
  const [todos, setTodos] = usestate([]);

  useEffect(function(){
    axios.get("URL")
      .then(function(res){
        setTodos(res.data.todos)
      })
  }, [])

  return todos;
}

function App() {
  todos = useTodos();

  return (
    <>
      {todos}  
    </>
  )
}

export default App
