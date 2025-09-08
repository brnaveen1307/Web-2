import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  return (
    <div>
      <HeaderWithButton />
      <Header title="Naveen" />
      <Header title="Bharath" />
      <Header title="Tharun" />
      <Header title="Prajwal" />
    </div>
        
  )
}

function HeaderWithButton(){
  const [title, setTitle] = useState("My name is Naveen")

  function updateTitle(){
    setTitle("My name is " + (Math.random()));
  }

  return <div>
    <button onClick={updateTitle}>Update the title</button>
    <Header title={title} />
  </div>
  

}

function Header({title}){
  return <div>
    {title}
  </div>
}

// Another way of writing the above function using React.memo
// const Header = React.memo(function Header({title}){
//   return <div>
//     {title}
//   </div>
//   })

export default App