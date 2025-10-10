import { useState , useEffect} from 'react'
import axios from 'axios'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { useIsOnline } from './hooks/IsOnline.jsx'

//Custom-hook

function useTodos(n) {
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const value = setInterval(() => {
      axios.get("Backend Server")
      .then(res => {
        setTodos(res.data.todos)
        setLoading(false)
      })
    }, n * 1000)

    axios.get("Backend Server")
      .then(res => {
        setTodos(res.data.todos)
        setLoading(false)
      })

    return () => {
      clearInterval(value)
    }

  }, [n])

  

  return { todos, loading }
}

function App() {

  const isOnline = useIsOnline()

  return <div>
    {isOnline ? "You are Online" : "You are Offline, please conect to the internet"}
  </div>
  
  // Todos(Data Fetching) , Loading Hook
  // const { todos, loading } = useTodos(5)

  // if(loading){
  //   return <div>
  //     loading...
  //   </div>
  // }

  // return (
  //   <>
  //     {todos.map(todo => <Track todo={todo} /> )}
  //   </>
  // )


  // MousePointer Hook
  // const mousePointer = useMousePointer()

  //   return (
  //       <>
  //           Your mouse position is {mousePointer.x} {mousePointer.y}
  //       </>
  //   )
}

function Track({todo}){
  return <div>
    {todo.title}
    <br />
    {todo.description}
  </div>
}

export default App

