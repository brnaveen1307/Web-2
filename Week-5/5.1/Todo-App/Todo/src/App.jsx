import {useState} from 'react'

function App() {
  const [todos, setTodos] = useState([{
    title: 'Learn React',
    isCompleted: false
  }, {
    title: 'Meet friend for lunch',
    isCompleted: true
  }, {
    title: 'Build really cool todo app',
    isCompleted: false
  }, {
    title: 'Play on the switch',
    isCompleted: false
  }]);

  function addTodo(){
    setTodos([...todos, {
      title: 'New Todo',
      isCompleted: false
    }])
  }

  return (
    <div>
      <button onCLick={addTodo}>Add a random Todo</button>
      {/* <Todo title={todos[0].title} isCompleted={todos[0].isCompleted}/>
      <Todo title={todos[1].title} isCompleted={todos[1].isCompleted}/> */}
      {todos.map(function(todo) {
        return <Todo title={todo.title} isCompleted={todo.isCompleted}/>
      })}
    </div>
  )
}

//component
function Todo(props){
  return <div>
    <h1>{props.title}</h1>
    <h2>{props.isCompleted}</h2>
  </div>
}

export default App